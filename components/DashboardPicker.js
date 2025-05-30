'use client'
import React, { useState, useEffect } from 'react'
import DashboardDatePicker from './DashboardDatePicker'
import ATMDropdown from './ATMDropdown'
import CreditCardField from './CreditCardField'
import ChipAidDropdown from './ChipAidDropdown'
import TransactionSerialField from './TransactionSerialField'

export default function DashboardPicker(props) {
    const { atmList, filterChange} = props
    const [atmId, setATMId] = useState(null)
    const [emvId, setEMVId] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [pan, setPan] = useState(null)
    const [txnSerial, setTxnSerial] = useState(null)

    return (
        <div className="z-4 grid grid-cols-5 items-start justify-between text-[0.6rem] lg:text-xs mt-2 gap-2">
            <div className="grid w-full col-span-1 items-start pt-2 pr-2">
                <p className=" w-full font-bold">DATE</p>
                <DashboardDatePicker onStartDateChange={(startDate) => {
                    filterChange(startDate, endDate,atmId, pan, emvId, txnSerial);
                    setStartDate(startDate)}
                     } onEndDateChange={(endDate) => setEndDate(endDate)} />
            </div>
            <div className="w-full grid  col-span-1 flex items-start pt-2 pr-2">
                <p className="w-full font-bold">ATM ID</p>
                <ATMDropdown atmList = {atmList} onChangeID={(atmID) => {
                    setATMId(atmID)
                    filterChange(startDate, endDate,atmID, pan, emvId, txnSerial);
                    }}/>
            </div>
            <div className="w-full grid col-span-1 flex items-start pt-2 pr-2">
                <p className="w-full font-bold">CUSTOMER PAN #</p>
                <CreditCardField onPanChange={(pan) => {
                    setPan(pan)
                    filterChange(startDate, endDate,atmId, pan, emvId, txnSerial);
                    }}/>
            </div>
            <div className="w-full grid col-span-1 items-start pt-2 pr-2">
                <p className="w-full font-bold">EMV CHIP AID</p>
                <ChipAidDropdown onEMVChange = {(emv)=> {
                    setEMVId(emv)
                    filterChange(startDate, endDate,atmId, pan, emv, txnSerial);
                    }}/>
            </div>
            <div className="w-full grid col-span-1 flex items-start pt-2 pr-2">
                <p className="w-full font-bold truncate">TRANSACTION SERIAL #</p>
                <TransactionSerialField onTxnSerialChange={(txnSerial) => {
                    setTxnSerial(txnSerial)
                    filterChange(startDate, endDate,atmId, pan, emvId, txnSerial);
                    }} />
            </div>
        </div>
    )
}
