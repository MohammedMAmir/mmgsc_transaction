'use client'
import React, { useState, useEffect, useReducer } from 'react'
import Button from './Button'
import { notFound, redirect } from 'next/navigation'
import DashboardPicker from './DashboardPicker'
import Results from './Results'

export default function Dashboard(props) {
  const[atmList, setATMList] = useState([1]);
  const[filter, setFilter] = useState({
    "sDate": null,
    "eDate": null,
    "atmID": null,
    "pan": null,
    "chipAid": null,
    "tSerial": null,
   })

  const redirectHandler = (e) => {
    redirect('/not-found')
  }
  

  useEffect(()=>{
    const fetchATMs =  async () => {
      let res = await fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/atmlist/v1")
      const data = await res.json()
      const atms = await data.map((atm) => (atm))
      setATMList(atms);
      console.log("fetched ATMS")
    }
    fetchATMs()
  }, []);

  const filterChange = (startDate, endDate, atmID, pan, chipAid, tSerial) => {
    setFilter({
      "sDate": startDate,
      "eDate": endDate,
      "atmID": atmID,
      "pan": pan,
      "chipAid": chipAid,
      "tSerial": tSerial,
     })
  }
  
  return (
    <div className="p-9 sm:p-7">
      <div className="flex items-center justify-between gap-4 ">
        <h1 className="text-sm lg:text-base">All Transactions</h1>
        <div className="text-xs lg:text-sm flex items-center justify-between grid grid-cols-2 gap-2">
          <Button text="Print" clickHandler = {redirectHandler}/>
          <Button text="Export" clickHandler = {redirectHandler} />
        </div>
      </div>
      <div className="text-sm flex flex-col">
        <DashboardPicker atmList={atmList} listChanged={true} filterChange={filterChange}/>
        <Results atmList={atmList} filter={filter}/>
      </div>
    </div>
    
)
}
