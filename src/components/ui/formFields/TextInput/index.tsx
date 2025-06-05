import type { TextInputPropsInit } from "@/types";
import { StyledTextInput } from "./styles";
import { forwardRef } from "react";

const TextInput = forwardRef<HTMLInputElement, TextInputPropsInit>(
    function TextInput(
        {
            name,
            placeholder,
            type,
            disabled,
            defaultValue,
            ...props
        },
        ref
    ) {

        return (
            <StyledTextInput
                ref={ref}
                defaultValue={defaultValue}
                disabled={disabled}
                id={name}
                name={name}
                placeholder={placeholder}
                type={type === 'email' ? 'text' : type}
                {...props}
                onKeyPress={(event) => {
                    if (type === "number") {
                        if (!/^\d*(\.)?(\d{0,2})?$/.test(event.key)) {
                            event.preventDefault();
                        }
                    }
                }}
                onMouseMove={(event) => {
                    if (type === "number") {
                        event.stopPropagation();
                    }
                }}
            ></StyledTextInput>
        )
    })

export default TextInput;