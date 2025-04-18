'use client'
import React, { useState } from "react"; 
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

export default function DashboardDatePicker (props){
    const { onStartDateChange, onEndDateChange } = props

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())

    const startOnChange = (e) => {
        const dateString = e.target.value.toString()
        let reformatedDate = dateString.replace('-','')
        reformatedDate = reformatedDate.replace('-','')
        if(endDate != "" && endDate < e.target.value){
            setEndDate(e.target.value)
            onEndDateChange(reformatedDate)
        }
        document.getElementById("end").showPicker()
        setStartDate(e.target.value)
        onStartDateChange(reformatedDate)
    }

    const endOnChange = (e) => {
        const dateString = e.target.value.toString()
        let reformatedDate = dateString.replace('-','')
        reformatedDate = reformatedDate.replace('-','')
        if(startDate != "" && startDate > e.target.value){
            setStartDate(e.target.value)
            onStartDateChange(reformatedDate)
        }
        setEndDate(e.target.value)
        onEndDateChange(reformatedDate)
    }

    return (
        <div className="pt-1">
            <div className="grid grid-cols-1 flex flex-col lg:grid-cols-2 w-full lg:gap-2">
                <div className="col-span-1 hover:bg-[var(--navbar-hover)] border-2 border-[var(--body-bold)] text-center rounded-md mt-1 bg-[var(--body-white)] p-2 flex inline-block truncate">
                    <input className="flex no_calender inline-block truncate overflow-hidden " value={startDate} type="date" id="start"
                    onChange = {startOnChange} />
                </div>
                <div className="col-span-1 border-2 hover:bg-[var(--navbar-hover)] border-[var(--body-bold)] text-center mt-1 rounded-md bg-[var(--body-white)] p-2 inline-block truncate">
                    <input className="flex no_calender inline-block truncate overflow-hidden" type="date" value={endDate} id="end"
                    onChange = {endOnChange}></input>
                </div>  
            </div>
        </div>
    )
}

