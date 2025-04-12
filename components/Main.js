import React from 'react'

// The main transcations page
// Can be moved behind a login page in the future
// Currently just at the index page
export default function Main(props) {
    // Unpack any props passed to this component
    const { children } = props
    return (
    <main className='flex-1 flex flex-col bg-[var(--body-gray)]'>
        <div className='p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-6'>
            <div className='col-span-1'>
                Settings
            </div>
            <div className='col-span-5'>
            { children }
            </div>  
        </div>
    </main>
    )
}
