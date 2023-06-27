import React from 'react';

const ChatMessageFeature = (props: any) => {
    return (
        <div style={{display: "flex", flexDirection: props.mine ? "row-reverse" : "row", marginBottom: 10}}>
            <div
                style={{
                    backgroundColor: props.mine ? "#E4EDFD" : "#F8F8F8",
                    borderRadius: 15,
                    padding: "0 10px",
                    maxWidth: 380,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 15,
                    alignItems: "end"
            }}>
                <p>{props.text}</p>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    color: "#3369F3",
                    fontSize: 9,
                    position: "relative",
                    top: -5
                }}>
                    <img src={"img/svg/readStatus.svg"}/>
                    <span>19:45</span>
                </div>
            </div>
        </div>
    );
};

export default ChatMessageFeature;