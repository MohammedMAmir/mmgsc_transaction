import React from 'react'


// The main transcations page
// Can be moved behind a login page in the future
// Currently just at the index page
export default function Main({children}) {
    return (
    <main className='flex-1 flex flex-col bg-[var(--body-gray)] min-w-170'>
       {children}
    </main>
    )
}
