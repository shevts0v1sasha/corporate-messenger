import React from 'react';
import ChatLeftBar from "../../widgets/chat/leftBar/ChatLeftBar";
import ConversationInfoWidget from "../../widgets/chat/ConversationInfoWidget";
import ChatAreaWidget from "../../widgets/chat/ChatAreaWidget";
import ChatControlsFeature from "../../features/chat/control/ChatControlsFeature";

const ChatPage = () => {
    return (
        <div style={{height: "100vh", maxWidth: "100vw"}}>
            <div style={{display: "flex", height: "100%"}}>
                <ChatLeftBar/>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", flex: "2 1 auto", padding: 20}}>
                    <div>
                        <ConversationInfoWidget/>
                        <div style={{height: 1, width: "100%", backgroundColor: "#EFEFEF"}}/>
                        <ChatAreaWidget/>
                    </div>
                    <ChatControlsFeature/>
                </div>
            </div>
        </div>

    );
};

export default ChatPage;