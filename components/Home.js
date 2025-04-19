'use client'
import React, {useState} from 'react'
import NavElement from './NavElement'
import NotImplemented from './NotImplemented'
import Dashboard from './Dashboard'

export default function Home() {
    const [currentPage, setCurrentPage] = useState('transactions')
    const [menuOpen, setMenuOpen] = useState(false)

    let children = (
        <Dashboard />
    )

    const handlePage = (e) => {
        setCurrentPage(e.target.value)
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    if (currentPage != 'transactions'){
        children = 
        <NotImplemented />
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-1 p-2 py-8 sm:py-6 md:text-xs lg:text-base'>
                <ul className={"w-full text-center md:text-left items-center md:block " + (menuOpen ? "block " : " hidden")} >
                    <NavElement elementName="transactions" 
                    handleNav = {handlePage} text = "Transactions" 
                    prim = {currentPage} 
                    icon="fa-dollar"/>
                    <NavElement elementName="settings" 
                    handleNav = {handlePage} text = "Settings" 
                    prim = {currentPage} 
                    icon = "fa-cog"/>
                    <NavElement elementName="user_management" 
                    handleNav = {handlePage} text = "User Management" 
                    prim = {currentPage} />
                    <NavElement elementName="atm_management" 
                    handleNav = {handlePage} text = "ATM Management" 
                    prim = {currentPage} />
                    <NavElement elementName="my_account" 
                    handleNav = {handlePage} text = "My Account" 
                    prim = {currentPage} />
                </ul>
                <div className="md:hidden">
                    {menuOpen ? 
                    <NavElement elementName="menu-toggle" 
                    handleNav = {toggleMenu} text = "Close Menu" 
                    prim = {currentPage} icon="fa-chevron-up"/> :
                    <NavElement elementName="menu-toggle" 
                    handleNav = {toggleMenu} text = "Open Menu" 
                    prim = {currentPage} icon="fa-chevron-down"/> }
                </div>
            </div>
            <div className='col-span-4'>
                { children }
            </div>  
        </div>
  )
}
