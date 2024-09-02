export default function Sidebar() {
    return (
        <div className="w-1/4 bg-gray-100 p-4">
            <button className="w-full mb-4 bg-blue-500 text-white p-2 rounded">New Message</button>
            <ul>
                <li className="mb-2">Inbox</li>
                <li className="mb-2">Marked</li>
                <li className="mb-2">Draft</li>
                <li className="mb-2">Sent</li>
                <li className="mb-2">Trash</li>
                <li className="mb-2">Custom Work</li>
                <li className="mb-2">Partnership</li>
                <li className="mb-2">In Progress</li>
                <li className="mb-2">Add Label</li>
            </ul>
        </div>
    );
}
