'use client'
import React, { useEffect, useState } from 'react'


export default function ATMDropdown(props) {
    const { atmList } = props
    const [selectedATM, setselectedATM] = useState()
    const [isSelecterOpen, setSelecterOpen] = useState(false)

    /* useEffect(()=>{
        fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/atmlist/v1")
        .then((res) => res.json())
        .then((data) => {
            const atms = data.map((atm) => (atm));
            setATMList(atms);
            console.log(atms)
            console.log("fetched ATMS")
        })
    }, []); */
    /* const atms = [
        {
        "key": 1,
        "name": "Bob",
        },
        {
        "key": 2,
        "name": "Jeremy",
        },
        {
        "key": 3,
        "name": "Kimbo",
        },
    ] */   

    return (
        <div className="pt-1">
            <div className=" p-2 mt-1 bg-[var(--body-white)] border-2 border-[var(--body-bold)] rounded-md flex w-full items-center justify-between"
            onClick={() => setSelecterOpen(!isSelecterOpen)}>
                <span>{(selectedATM) ? selectedATM.name : "All ATMs"}</span>
                <i className={"fa " + (isSelecterOpen ? "fa-chevron-up" : "fa-chevron-down")}></i>
            </div>
            <ul className={"mt-1 bg-[var(--body-white)] absolute display-block overflow-y-auto " + (isSelecterOpen ? "max-h-60 " : "max-h-0") }>
                {atmList.map((atm, index) => (
                    <li key={index} className={"p-2 text-sm duration-200 hover:bg-[var(--body-bold)] " +
                        ((selectedATM && atm.id===selectedATM.id) ? "bg-bg-[var(--navbar-primary)]" : " ")}
                        onClick = {() => {
                            setselectedATM(atm);
                            setSelecterOpen(false);
                        }}
                    >
                        {atm.id}: {atm.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
