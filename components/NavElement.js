'use client'
import React, {useState} from 'react'

export default function NavElement(props) {
    const { elementName, handleNav, text, prim, icon } = props
    return (
        <div>
            <li className='p-none w-full flex flex-col'>
            <button id={elementName} value={elementName} onClick = {(e) => handleNav(e)}
                className = {'p-2 rounded-sm w-full md:text-left duration-200 hover:bg-[var(--navbar-hover)] ' 
                + (prim == elementName ?  ` bg-[var(--navbar-primary)] border-l-4
                    border-[var(--navbar-selected-side)]` 
                : ' ') + (elementName == 'menu-toggle' ? "text-center bg-[var(--navbar-primary)]" : "")}>
                <i className={'fa pr-1 ' + (icon ? icon : ' fa-fw')}></i>
                {text}
            </button>
            </li>
        </div>  
    )
}
