import React from 'react'
import Button from './Button'
import { notFound, redirect } from 'next/navigation'

export default function Dashboard(props) {
  const redirectHandler = (e) => {
    redirect('/not-found')
  }
  return (
    <div className="p-8 sm:p-6 flex items-center justify-between gap-4 ">
      <h1 className="text-sm lg:text-base">All Transactions</h1>
      <div className="text-xs lg:text-sm flex items-center justify-between grid grid-cols-2 gap-2">
        <Button text="Print" clickHandler = {redirectHandler}/>
        <Button text="Export" clickHandler = {redirectHandler} />
      </div>
    </div>
)
}
