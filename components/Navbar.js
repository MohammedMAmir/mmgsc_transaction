'use client'
import React, {useState} from 'react'
import NavElement from './NavElement'

export default function(props) {
    const { primary, navHandler } = props
    const handleNav = (e) =>{
        navHandler(e);
    }

    return (
        <div className="p-2 sm:p-4 ">
            <ul>
                <NavElement elementName="transactions" 
                handleNav = {handleNav} text = "Transactions" 
                prim = {primary} />
                <NavElement elementName="settings" 
                handleNav = {handleNav} text = "Settings" 
                prim = {primary} />
            </ul>
        </div>
    )
}
