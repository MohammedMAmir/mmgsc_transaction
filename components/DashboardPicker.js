'use client'
import React, { useState, useEffect } from 'react'
import DashboardDatePicker from './DashboardDatePicker'
import ATMDropdown from './ATMDropdown'
import CreditCardField from './CreditCardField'
import ChipAidDropdown from './ChipAidDropdown'
import TransactionSerialField from './TransactionSerialField'

export default function DashboardPicker() {
    const[atmList, setATMList] = useState([]);
    const [atmId, setATMId] = useState(null)
    const [emvId, setEMVId] = useState(null)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [pan, setPan] = useState(null)
    const [txnSerial, setTxnSerial] = useState(null)

    useEffect(()=>{
        fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/atmlist/v1")
        .then((res) => res.json())
        .then((data) => {
            const atms = data.map((atm) => (atm));
            setATMList(atms);
            console.log(atms)
            console.log("fetched ATMS")
        })
    }, []);

    useEffect(()=>{
        let starter = startDate.getTime()
        let ender = endDate.getTime()
        console.log("fetching https://dev.smartjournal.net:443/um/test/api/jr/txn/txnlist/"+atmId+"/"+{startDate}+"/v1")
            fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/txnlist/"+atmId+"/"+starter+"/v1")
            .then((res) => res.json())
            .then((data) => {
                //const transactions = data.map((transaction) => transaction.txn);
                console.log(data)
                console.log("got here")
            })
        }, []);

    return (
        <div className="z-4 grid grid-cols-5 items-start justify-between text-[0.6rem] lg:text-xs mt-2 gap-2">
            <div className="grid w-full col-span-1 items-start pt-2 pr-2">
                <p className=" w-full font-bold">DATE</p>
                <DashboardDatePicker onStartDateChange={(startDate) => setStartDate(startDate)
                     } onEndDateChange={(endDate) => setEndDate(endDate)} />
            </div>
            <div className="w-full grid  col-span-1 flex items-start pt-2 pr-2">
                <p className="w-full font-bold">ATM ID</p>
                <ATMDropdown atmList = {atmList} />
            </div>
            <div className="w-full grid col-span-1 flex items-start pt-2 pr-2">
                <p className="w-full font-bold">CUSTOMER PAN #</p>
                <CreditCardField onPanChange={(pan) => setPan(pan)}/>
            </div>
            <div className="w-full grid col-span-1 items-start pt-2 pr-2">
                <p className="w-full font-bold">EMV CHIP AID</p>
                <ChipAidDropdown onEMVChange = {(emv) => setEMVId(emv)}/>
            </div>
            <div className="w-full grid col-span-1 flex items-start pt-2 pr-2">
                <p className="w-full font-bold truncate">TRANSACTION SERIAL #</p>
                <TransactionSerialField onTxnSerialChange={(txnSerial) => setTxnSerial(txnSerial)} />
            </div>
        </div>
    )
}
