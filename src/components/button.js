import React from 'react'
import { Button } from '@mui/material'

export default function Buttons(
    { 
        text,
        icon, 
        hoverText, 
        type, 
        bgColor, 
        functions, 
        hoverColor, 
        color, 
        border, 
        padding, 
        width, 
        weight, 
        size, 
    }
) {
    return (
        <Button 
            type={type}
            sx={
                {
                    padding: padding ? padding : '16px 52px',
                    borderRadius: '4px',
                    textTransform: 'capitalize',
                    background: bgColor,
                    color: color || '#fff',
                    fontWeight: weight ? weight : 400,
                    fontSize: size ? size : '16px',
                    fontFamily: 'inherit',
                    width: width,
                    height:'53px',
                    border: border,
                    transition: 'all 0.3s ease-in-out',
                    "&:hover": {
                      opacity: '50%',
                      color: hoverText,
                    }
                }
            }
            onClick={functions}
        >
            {text}
            {icon}
        </Button>
    )
}
