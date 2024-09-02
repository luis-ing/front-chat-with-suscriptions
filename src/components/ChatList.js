"use client";

import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import ChatItem from './ChatItem';

const CHATS_QUERY = gql`
  query GetChats {
    chats {
      id
      members {
        username
      }
      messages {
        content
      }
    }
  }
`;

const ChatList = () => {
    const [getChat, { data, loading, error }] = useLazyQuery(CHATS_QUERY);

    useEffect(() => {
        getChat();
    }, []);

    if (loading) return <p>Loading chats...</p>;
    if (error) return <p>Error loading chats</p>;

    return (
        <div className="w-3/4 p-4">
            {data?.chats?.map(chat => (
                <ChatItem key={chat.id} chat={chat} />
            ))}
        </div>
    );
}

export default ChatList;