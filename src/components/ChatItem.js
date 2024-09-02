export default function ChatItem({ chat }) {
    return (
        <div className="flex items-center p-2 border-b">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div>
                <p>{chat.members.map(member => member.username).join(', ')}</p>
                <p className="text-sm text-gray-500">{chat.messages[chat.messages.length - 1]?.content}</p>
            </div>
        </div>
    );
}
