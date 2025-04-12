import React from 'react'

// The main transcations page
// Can be moved behind a login page in the future
// Currently just at the index page
export default function Main(props) {
    // Unpack any props passed to this component
    const {children} = props
    return (
    <main>
        { children} 
    </main>
    )
}
