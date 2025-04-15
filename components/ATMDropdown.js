'use client'
import React, { useEffect, useState } from 'react'


export default function ATMDropdown(props) {
    const { onATMChange } = props
    const[atmList, setATMList] = useState([]);
    const [selectedATM, setselectedATM] = useState()
    const [isSelecterOpen, setSelecterOpen] = useState(false)

    useEffect(()=>{
        fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/atmlist/v1")
        .then((res) => res.json())
        .then((data) => {
            const atms = data.map((atm) => (atm.name));
            setATMList(atms);
            console.log(atms)
            console.log("fetched ATMS")
        })
    }, []);
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
                <span>{atmList[selectedATM] ?? "All ATMs"}</span>
                <i className={"fa " + (isSelecterOpen ? "fa-chevron-up" : "fa-chevron-down")}></i>
            </div>
            <ul className={"mt-1 bg-[var(--body-white)] overflow-y-auto " + (isSelecterOpen ? "max-h-60 " : "max-h-0") }>
                {atmList.map((atm, index) => (
                    <li key={index} className={"p-2 text-sm duration-200 hover:bg-[var(--body-bold)] " +
                        (atm===atmList[selectedATM] ? "bg-bg-[var(--navbar-primary)]" : " ")}
                        onClick = {() => {
                            setselectedATM(index);
                            setSelecterOpen(false);
                            onATMChange(index)
                        }}
                    >
                        {index}: {atm}
                    </li>
                ))}
            </ul>
        </div>
    )
}
