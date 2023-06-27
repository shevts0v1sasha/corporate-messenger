import React from 'react';
import ChatMessageFeature from "../../features/chat/message/ChatMessageFeature";
import {observer} from "mobx-react";
import MessagesStore from "../../entity/message/model/MessagesStore";

export const messageStore = new MessagesStore();

const ChatAreaWidget = () => {
    return (
        <div style={{padding: 20, overflowY: "auto", maxHeight: 750}}>
            {
                messageStore.messages.map(message => <ChatMessageFeature mine={message.yours} text={message.text}/>)
            }
        </div>
    );
};

export default observer(ChatAreaWidget);