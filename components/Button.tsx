"use client"
import { ButtonProps } from '@/types'
import React from 'react'

const Button = ({title, containerStyles, handleClick, btnType}: ButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default Button