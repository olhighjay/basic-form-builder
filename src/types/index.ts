import type { ComponentPropsWithoutRef } from "react";

export interface SavedForm {
    id: string;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export type TextInputPropsInit = {
    name: string;
    placeholder?: string;
    defaultValue?: string | number;
    type: "text" | "number" | "email";
    disabled?: boolean;
} & ComponentPropsWithoutRef<"input">;