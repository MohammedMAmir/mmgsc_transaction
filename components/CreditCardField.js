import React, { useState } from 'react'

export default function CreditCardField(props) {
    const { onPanChange } = props
    const [pan, setPan] = useState("");
    

    const panOnChange = (e) => {
        console.log(pan)
        setPan(e.target.value)
        onPanChange(e.target.value)
    }

    return (
        <div className="pt-1">
                <div className="flex flex-col">
                    <div className="col-span-1 border-2 border-[var(--body-bold)] text-center 
                    rounded-md mt-1 bg-[var(--body-white)] p-1 flex inline-block truncate">
                        <input className="flex w-full truncate overflow-hidden p-1" 
                        placeholder='Partial or full card number' type="tel" 
                        inputMode="numeric" pattern="[0-9\s]{13,19}" value={pan}
                        autoComplete="cc-number" maxLength="19" required id="c_card"
                        onChange={panOnChange}
                        />
                    </div>
                </div>
        </div>
    )
}
