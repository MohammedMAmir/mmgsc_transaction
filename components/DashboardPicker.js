'use client'
import React, { useState, useEffect } from 'react'
import DashboardDatePicker from './DashboardDatePicker'
import DashbooardDropdown from './DashbooardDropdown'

export default function DashboardPicker() {
    const [atmId, setATMId] = useState(1)
    const [startDate, setStartDate] = useState(new Date(0))
    const [endDate, setEndDate] = useState(new Date(0))

    useEffect(()=>{
        let date = startDate.getDate.toString()
        console.log("fetching https://dev.smartjournal.net:443/um/test/api/jr/txn/txnlist/"+{atmId}+"/"+{startDate}+"/v1")
            fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/txnlist/1/"+{date}+"/v1")
            .then((res) => res.json())
            .then((data) => {
                //const transactions = data.map((transaction) => transaction.txn);
                console.log(data)
                console.log("got here")
            })
        }, []);

    return (
        <div className="grid grid-cols-5 flex items-start justify-between text-[0.6rem] lg:text-xs mt-2 gap-4">
            <div className="grid w-full col-span-1 flex items-start pt-2 pr-4">
                <p className=" w-full font-bold">DATE</p>
                <DashboardDatePicker onStartDateChange={(startDate) => setStartDate(startDate)
                     } onEndDateChange={(endDate) => setEndDate(endDate)} />
            </div>
            <div className="w-full grid  col-span-1 flex items-start pt-2 pr-4">
                <p className="w-full font-bold">ATM ID</p>
                <DashbooardDropdown onATMChange = {(atm) => setATMId(atm)}/>
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
