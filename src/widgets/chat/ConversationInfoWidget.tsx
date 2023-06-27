import React from 'react';

const ConversationInfoWidget = () => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div style={{display: "flex", gap: 15, alignItems: "center"}}>
                <img src={"http://localhost:3000/img/temp-user-images/4.jpg"} style={{width: 34, height: 34, borderRadius: "50%"}}/>
                <h4>Вадим</h4>
            </div>
            <img src={"img/svg/additionalSettings.svg"}/>
        </div>
    );
};

export default ConversationInfoWidget;