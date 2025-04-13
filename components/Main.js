'use client'
import React, {useState} from 'react'
import NavElement from './NavElement'
import NotImplemented from './NotImplemented'
import Dashboard from './Dashboard'

// The main transcations page
// Can be moved behind a login page in the future
// Currently just at the index page
export default function Main() {
    // Unpack any props passed to this component
    const [currentPage, setCurrentPage] = useState('transactions')
    let children = (
        <Dashboard />
    )

    const handlePage = (e) => {
        setCurrentPage(e.target.value)
    }

    if (currentPage != 'transactions'){
        children = 
        <NotImplemented />
    }
    return (
    <main className='flex-1 flex flex-col bg-[var(--body-gray)]'>
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-1 p-2 py-8 sm:py-6 md:text-xs lg:text-base'>
            <ul>
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
            </div>
            <div className='col-span-4'>
            { children }
            </div>  
        </div>
    </main>
    )
}
