import React, { useState } from 'react'

export default function TransactionSerialField(props) {
    const { onTxnSerialChange } = props
    const [txnSerial, setTxnSerial] = useState("");
    

    const txnOnChange = (e) => {
        setTxnSerial(e.target.value)
        onTxnSerialChange(e.target.value)
    }

    return (
        <div className="pt-1">
                <div className="flex flex-col">
                    <div className="col-span-1 border-2 border-[var(--body-bold)] text-center 
                    rounded-md mt-1 bg-[var(--body-white)] p-1 flex inline-block truncate">
                        <input className="flex w-full truncate overflow-hidden p-1" 
                        placeholder='4 digit number' type="tel" 
                        inputMode="numeric" pattern="^\d{4}" value={txnSerial}
                        maxLength="4" id="txn_serial"
                        onChange={txnOnChange}
                        />
                    </div>
                </div>
        </div>
    )
}
