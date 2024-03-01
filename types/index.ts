import { MouseEventHandler } from "react";


export interface ButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset" | undefined;
}

export interface IntrinsicAttributes {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}