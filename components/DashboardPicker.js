'use client'
import React, { useState } from 'react'
import { DateRangePicker } from 'rsuite';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
    {
      id: 1,
      name: 'Wade Cooper',
    },
    {
      id: 2,
      name: 'Arlene Mccoy',
    },
    {
      id: 3,
      name: 'Devon Webb',
    },
    {
      id: 4,
      name: 'Tom Cook',
    },
    {
      id: 5,
      name: 'Tanya Fox',
    },
    {
      id: 6,
      name: 'Hellen Schmidt',
    },
    {
      id: 7,
      name: 'Caroline Schultz',
    },
    {
      id: 8,
      name: 'Mason Heaney',
    },
    {
      id: 9,
      name: 'Claudie Smitham',
    },
    {
      id: 10,
      name: 'Emil Schaefer',
    },
  ]

export default function DashboardPicker() {

    const [selected, setSelected] = useState(people[3])

    return (
        <div className="grid grid-cols-5 flex items-center justify-between">
            <div className="grid col-span-1 flex items-start justify-between p-2">
                <p className="font-bold">DATE</p>
                <div >
                    <DateRangePicker size="sm" placeholder="Select Date Range"/>
                </div>
            </div>
            <div className="w-full grid col-span-1 flex items-start justify-between p-2">
                <p className="font-bold">ATM ID</p>
                <div className="justify-center flex w-full grid text-center">
                    <Listbox value={selected} onChange={setSelected}>
                    <div className="relative w-full">
                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate">{selected.name}</span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                        </ListboxButton>

                        <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                        >
                        {people.map((person) => (
                            <ListboxOption
                            key={person.id}
                            value={person}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                            >
                            <div className="flex items-center">
                                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{person.name}</span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                            </ListboxOption>
                        ))}
                        </ListboxOptions>
                    </div>
                    </Listbox>
                </div>
            </div>
            <div>
                <p className="font-bold">CUSTOMER PAN NUMBER</p>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}
