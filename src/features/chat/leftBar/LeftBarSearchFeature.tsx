import React from 'react';
import TextField from "shared/ui/inputs/TextField";

const LeftBarSearchFeature = () => {
    return (
        <div style={{padding: 15, display: "flex", alignItems: "center", gap: 10}}>
            <img src={"img/svg/search.svg"}/>
            <div style={{flex: "1 1 auto"}}>
                <TextField placeholder={"Поиск"} value={""} onChange={() => {}}/>
            </div>
        </div>
    );
};

export default LeftBarSearchFeature;