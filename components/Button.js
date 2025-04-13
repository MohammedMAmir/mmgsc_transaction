import React from 'react'

export default function Button(props) {
  const { text, full, clickHandler } = props

  return (
    <button onClick = {(e) => clickHandler(e)}
    className={`rounded overflow-hidden duration-200
      bg-[var(--body-white)] border-2 border-solid border-[var(--body-bold)]
      hover:bg-[var(--body-bold)] ` + (full ? 'grid place-items-center w-full ':
      ' '
      )}>
        <p className={'px-4 sm:px-5 whitespace-nowrap py-1'}>
          {text}
        </p>
      </button>
  )
}
