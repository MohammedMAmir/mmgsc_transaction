'use client'
import React, { useState, useEffect } from 'react'

export default function Results(props) {
  const { atmList, filter } = props
  const [filteredRes, setFilteredRes] = useState(true)
  const [allTxns, setAllTxns] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/v1", {
      method: "POST",
      body: JSON.stringify(
        {
          "atmId": [
            0, 54, 100
          ],
          "date0": -10000,
          "date1": 1000000000,
        }
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
      // convert data to json
      const json = await data.json();
      setAllTxns(json.txn)
      return json;
    }
    try {
      const res = fetchData()
    }catch(err){
      console.log(err)
    }

    const fetchLogs = async () => {
      
    }
    }, []);

    console.log(allTxns)

  return (
    <div className="w-full bg-[var(--body-white)] text-[0.7rem] lg:text-xs rounded border-2 border-[var(--body-bold)] mt-2">
      <div className="bg-[var(--body-white)] w-full ">
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-1 p-2">Date</div>
            <div className="col-span-1 p-2">ATM ID</div>
            <div className="col-span-1 p-2">Customer Pan</div>
            <div className="col-span-1 p-2">Description</div>
            <div className="col-span-1 p-2">Code</div>
          </div>
          {(filteredRes) ?
            allTxns.map((txn, index)=>(
            <div key={index} className="grid grid-cols-5 gap-2">
              <div className="col-span-1 p-2">
                {txn.devTime.toString().substring(6, 8)+ "-" +txn.devTime.toString().substring(4,6) + "-" + txn.devTime.toString().substring(0,4)}</div>
              <div className="col-span-1 p-2">{txn.atm.txt}</div>
              <div className="col-span-1 p-2">{txn.pan}</div>
              <div className="col-span-1 p-2">{txn.ttp.descr}</div>
              <div className="col-span-1 p-2">Code</div>
            </div>
            ))
             :
            <div className="text-center p-2 border-t-2  border-[var(--body-bold)]">No Results</div>}
      </div>    
    </div> 
  )
}
