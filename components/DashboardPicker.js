'use client'
import React, { useState } from 'react'
import DashboardDatePicker from './DashboardDatePicker'
import DashbooardDropdown from './DashbooardDropdown'

export default function DashboardPicker() {


    return (
        <div className="grid grid-cols-5 flex items-start justify-between text-[0.6rem] lg:text-xs mt-2 gap-4">
            <div className="grid w-full col-span-1 flex items-start pt-2 pr-4">
                <p className=" w-full font-bold">DATE</p>
                <DashboardDatePicker />
            </div>
            <div className="w-full grid  col-span-1 flex items-start pt-2 pr-4">
                <p className="w-full font-bold">ATM ID</p>
                <DashbooardDropdown onATMChange = {(atm) => console.log(atm)}/>
            </div>
            <div className="w-full grid grid-rows-2 col-span-1 flex items-start justify-between pt-2">
                <p className="font-bold grid row-span-1">CUSTOMER PAN NUMBER</p>
            </div>
            <div className="w-full grid grid-rows-2 col-span-1 flex items-start justify-between pt-2">
                <p className="font-bold grid row-span-1">EMV CHIP AID</p>
            </div>
            <div className="w-full grid grid-rows-2 col-span-1 flex items-start justify-between pt-2">
                <p className="font-bold grid row-span-1">TRANSACTION SERIAL NUMBER</p>
            </div>
        </div>
    )
}
