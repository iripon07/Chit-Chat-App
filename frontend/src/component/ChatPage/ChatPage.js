import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get("/api/chat");
        console.log(data);
        setChats(data);
    }
    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div className='bg-orange text-white'>
            {chats.map((chat) => (
                <div key={chat._id}>{chat.ChatName}</div>
            ))}
        </div>
    )
}

export default ChatPage