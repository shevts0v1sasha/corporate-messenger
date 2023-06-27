import React from 'react';
import "./leftBarChatFeature.css";

const LeftBarChatFeature = (props: any) => {
    return (
        <div className={"left-bar-item"}>
            <div style={{display: "flex", alignItems: "center", gap: 15, padding: "0 10px"}}>
                <div>
                    <img style={{width: 47, height: 47, borderRadius: "50%"}} src={props.preview}/>
                </div>
                <div>
                    <h4 style={{marginBottom: -10}}>{props.name}</h4>
                    <p style={{color: "#999"}}>{props.lastMessage}</p>
                </div>
            </div>

            {
                props.unreadMessages > 0 &&
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    gap: 5
                }}>
                    <span>10:49</span>
                    <div
                        style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            backgroundColor: "#3369F3",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}>
                        <span style={{textAlign: "center"}}>{props.unreadMessages}</span>
                    </div>
                </div>
            }

        </div>
    );
};

export default LeftBarChatFeature;