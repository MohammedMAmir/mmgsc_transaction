import React from 'react'

// The main transcations page
// Can be moved behind a login page in the future
// Currently just at the index page
export default function Main(props) {
    // Unpack any props passed to this component
    const { children } = props
    return (
    <main className='flex-1 flex flex-col p-4 sm:p-8'>
        { children } 
    </main>
    )
}
