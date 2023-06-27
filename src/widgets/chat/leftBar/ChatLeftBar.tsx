import React from 'react';
import LeftBarSearchFeature from "../../../features/chat/leftBar/LeftBarSearchFeature";
import LeftBarChatFeature from "../../../features/chat/leftBar/LeftBarChatFeature";

const chats = [
    {name: "Андрей", lastMessage: "Изображение", unreadMessages: 1, preview: "http://localhost:3000/img/temp-user-images/first.jpg"},
    {name: "Киноклуб", lastMessage: "вы: стикер", unreadMessages: 2, preview: "http://localhost:3000/img/temp-user-images/2.jpg"},
    {name: "Илья", lastMessage: "Друзья, у меня для вас...", unreadMessages: 5, preview: "http://localhost:3000/img/temp-user-images/3.jpg"},
    {name: "Вадим", lastMessage: "Круто!", unreadMessages: 0, preview: "http://localhost:3000/img/temp-user-images/4.jpg"},
    {name: "Тет а теты", lastMessage: "Какой то текст...", unreadMessages: 2, preview: "http://localhost:3000/img/temp-user-images/5.jpg"},
    {name: "1, 2, 3", lastMessage: "Какой то текст...", unreadMessages: 0, preview: "http://localhost:3000/img/temp-user-images/6.jpg"},
    {name: "Design Destroyer", lastMessage: "Какой то текст...", unreadMessages: 0, preview: "http://localhost:3000/img/temp-user-images/7.jpg"},
    {name: "Day.", lastMessage: "Какой то текст...", unreadMessages: 0, preview: "http://localhost:3000/img/temp-user-images/8.jpg"},
    {name: "Стас Рогозин", lastMessage: "Какой то текст...", unreadMessages: 0, preview: "http://localhost:3000/img/temp-user-images/9.jpg"},
];

const ChatLeftBar = () => {
    return (
        <div style={{height: "100%", padding: 5}}>
            <LeftBarSearchFeature/>
            <div style={{overflowY: "auto", maxHeight: window.innerHeight - 75}}>
                {
                    chats.map(chat => <LeftBarChatFeature name={chat.name} lastMessage={chat.lastMessage} unreadMessages={chat.unreadMessages} preview={chat.preview}/>)
                }
            </div>
        </div>
    );
};

export default ChatLeftBar;