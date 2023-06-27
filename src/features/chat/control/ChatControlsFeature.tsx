import React, {useState} from 'react';
import TextField from "../../../shared/ui/inputs/TextField";
import {messageStore} from "../../../widgets/chat/ChatAreaWidget";

const ChatControlsFeature = () => {

    const [text, setText] = useState<string>("");

    const handleOnSendClicked = () => {
        messageStore.messages = [...messageStore.messages, {date: new Date(), text, yours: true}];
        setText("");
    }

    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 30px",
                gap: 15
            }}>
                <img src={"img/svg/attach.svg"}/>
                <div style={{flex: "2 1 auto"}}>
                    <TextField placeholder={"Сообщение"} value={text} onChange={(text) => {
                        setText(text)
                    }}/>
                </div>
                <input
                    style={{
                        backgroundColor: "#3369F3",
                        padding: 10,
                        color: "white",
                        border: "none",
                        borderRadius: 10
                    }}
                    value={"Отправить"}
                    type={"button"}
                    onClick={handleOnSendClicked}
                />
            </div>

        </div>
    );
};

export default ChatControlsFeature;