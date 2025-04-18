import React from 'react'
import Link from 'next/link'
import Button from './Button'

export default function NotImplemented() {
  return (
    <section className="flex items-center h-full p-16 dark:bg-[var(--body-gray)] dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-[var(--navbar-primary)]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, page no implemented.</p>
          <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things in the Transactions.</p>
        </div>
      </div>
    </section>

  )
}
