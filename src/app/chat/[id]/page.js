"use client";

import { useLazyQuery, useQuery, useSubscription } from '@apollo/client';
import gql from 'graphql-tag';
import { useEffect } from 'react';

const CHAT_QUERY = gql`
  query GetChat {
    chats {
      id
      messages {
        content
        sender {
          username
        }
      }
    }
  }
`;

const MESSAGE_SUBSCRIPTION = gql`
  subscription OnMessageSent($chatId: Int!) {
    messageSent(chatId: $chatId) {
      id
      content
      sender {
        username
      }
    }
  }
`;

export default function Chat({ params }) {
    const { id } = params;
    const [getChat, { data, loading, error }] = useLazyQuery(CHAT_QUERY);

    useEffect(() => {
        getChat();
    }, []);

    useEffect(() => {
        console.log("data ", id);
    }, [id])

    useSubscription(MESSAGE_SUBSCRIPTION, {
        variables: { chatId: Number(id) },
        onSubscriptionData: ({ client, subscriptionData }) => {
            client.cache.modify({
                id: `Chat:${id}`,
                fields: {
                    messages(existingMessages = []) {
                        const newMessageRef = client.cache.writeFragment({
                            data: subscriptionData.data.messageSent,
                            fragment: gql`
                fragment NewMessage on Message {
                  id
                  content
                  sender {
                    username
                  }
                }
              `
                        });
                        return [...existingMessages, newMessageRef];
                    }
                }
            });
        }
    });

    if (loading) return <p>Loading chat...</p>;
    if (error) return <p>Error loading chat</p>;

    return (
        <div className="p-4">
            {data?.chats[0]?.messages.map((message, index) => (
                <p key={index}><strong>{message.sender.username}:</strong> {message.content}</p>
            ))}
        </div>
    );
}
