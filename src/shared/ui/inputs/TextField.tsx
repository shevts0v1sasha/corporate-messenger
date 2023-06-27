import React, {FC} from 'react';

interface TextFieldProps {
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

const TextField: FC<TextFieldProps> = ({placeholder, value, onChange}) => {
    return (
        <input
            style={
                {
                    backgroundColor: "#EFEFEF",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "none",
                    width: "100%"
                }}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={event => onChange(event.target.value)}
        />
    );
};

export default TextField;