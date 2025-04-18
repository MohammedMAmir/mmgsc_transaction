'use client'
import React, { useState, useEffect } from 'react'

export default function Results({filter, atmList}) {
  const [filteredRes, setFilteredRes] = useState([])
  const [allTxns, setAllTxns] = useState(null)
  const [txnsFetched, setTxnsFetched] = useState(1)
  const [logs, setLog] = useState()

  let today = new Date()
  let date = today.getDate()
  let month = today.getMonth()
  let year = today.getFullYear()

  function filterResults(){
    let result = []
    if(allTxns){
      result = function () {
        let res = []
        console.log(filter.sDate)
        for(let i = 0; i < allTxns.length ; i++){
          if((filter.atmID ? allTxns[i].atm.id == filter.atmID : true) && 
          (filter.sDate ? allTxns[i].devTime/1000000 >= filter.sDate : true) &&
          (filter.edate ? allTxns[i].devTime/1000000 < filter.eDate : true) &&
          (filter.pan  ? (allTxns[i].pan ? allTxns[i].pan.startsWith(filter.pan) : false) : true)
        ){
            console.log("pushing")
            res.push(allTxns[i])
          }
        }
        console.log("res is:")
        console.log(res)
        return res
      }
    }else{
      result = []
    }
    setFilteredRes(result)
    }

  useEffect(()=>{
    const atmIDs = atmList.map((atm) => atm.id)
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/v1", {
      method: "POST",
      body: JSON.stringify(
        {
          "atmId": atmIDs,
          "date0": 19700101,
          "date1": year*10000+month*100 + date,
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
      fetchData().then(filterResults())
      setTxnsFetched(txnsFetched+1)
      
    }catch(err){
      console.log(err)
    }

  }, [atmList]);

  useEffect(()=>{
      filterResults()
    }, [allTxns, filter]);
  

    console.log(allTxns)
    console.log(filteredRes)

  return (
    <div className="w-full bg-[var(--body-white)] text-[0.7rem] lg:text-xs rounded border-2 border-[var(--body-bold)] mt-2 max-h-[500px] overflow-y-auto">
      <div className="bg-[var(--body-white)] w-full ">
          <div className="grid grid-cols-5 gap-2 font-semibold">
            <div className="col-span-1 p-2">Date</div>
            <div className="col-span-1 p-2">ATM ID</div>
            <div className="col-span-1 p-2">Customer Pan</div>
            <div className="col-span-1 p-2">Description</div>
            <div className="col-span-1 p-2">Code</div>
          </div>
          {(filteredRes && filteredRes.length > 1) ? (
            filteredRes.map((txn, index)=>(
            <div key={index} className="border-t-2 border-[var(--body-bold)] grid grid-cols-5 gap-2">
              <div className="col-span-1 p-2">
                {txn.devTime.toString().substring(6, 8)+ "-" +txn.devTime.toString().substring(4,6) + "-" + txn.devTime.toString().substring(0,4)}</div>
              <div className="col-span-1 p-2">{txn.atm.txt}</div>
              <div className="col-span-1 p-2">{txn.pan}</div>
              <div className="col-span-1 p-2">{txn.ttp.descr}</div>
              <div className="col-span-1 p-2">{txn.ref}</div>
            </div>
            )))
             :
            <div className="text-center p-2 border-t-2  border-[var(--body-bold)]">No Results</div>}
      </div>    
    </div> 
  )
}
