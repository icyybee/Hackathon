import React from 'react'
import { Button } from '@mui/material'

export default function Buttons(
    { 
        text,
        icon, 
        hoverText, 
        type, 
        resWidth, 
        bgColor, 
        functions, 
        hoverColor, 
        color, 
        border, 
        padding, 
        width, 
        weight, 
        size, 
        smpadding
    }
) {
    return (
        <Button 
            type={type}
            sx={
                {
                    // display: 'flex',
                    // gap: '16px',
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
                    // "@media (max-width:800px)": {
                    //     padding: smpadding
                    // },
                    // "@media (max-width:600px)": {
                    //     width: resWidth
                    // },
                    // "&:hover": {
                    //   backgroundColor: hoverColor,
                    //   color: hoverText,
                    // }
                }
            }
            onClick={functions}
        >
            {text}
            {icon}
        </Button>
    )
}
