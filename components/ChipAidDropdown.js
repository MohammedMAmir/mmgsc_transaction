'use client'
import React, { useEffect, useState } from 'react'


export default function ChipAidDropdown(props) {
    const { onEMVChange } = props
    const[emvList, setEMVList] = useState([]);
    const [selectedEMV, setselectedEMV] = useState(null)
    const [isSelecterOpen, setSelecterOpen] = useState(false)

    useEffect(()=>{
        fetch("https://dev.smartjournal.net:443/um/test/api/jr/txn/aidlist/v1")
        .then((res) => res.json())
        .then((data) => {
            const emvs = data.map((aid) => aid.aid);
            setEMVList(emvs);
            console.log("fetched emv")
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
        <div className="pt-1 flex-1">
            <div className=" p-2 mt-1 bg-[var(--body-white)] border-2 border-[var(--body-bold)] rounded-md flex col-span-1 items-center justify-between"
            onClick={() => setSelecterOpen(!isSelecterOpen)}>
                <span>{selectedEMV ?? "All applications"}</span>
                <i className={"fa " + (isSelecterOpen ? "fa-chevron-up" : "fa-chevron-down")}></i>
            </div>
            <ul className={"mt-1 bg-[var(--body-white)]  overflow-y-auto " + (isSelecterOpen ? "max-h-60 " : "max-h-0") }>
                {emvList.map(emv => (
                    <li key={emv} className={"p-2 text-sm max-w-20 duration-200 hover:bg-[var(--body-bold)]  " +
                        (emv===selectedEMV ? "bg-bg-[var(--navbar-primary)]" : " ")}
                        onClick = {() => {
                            setselectedEMV(emv);
                            setSelecterOpen(false);
                            onEMVChange(emv)
                        }}
                    >
                        {emv}
                    </li>
                ))}
            </ul>
        </div>
    )
}
