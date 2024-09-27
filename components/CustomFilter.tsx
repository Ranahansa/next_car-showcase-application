"use client"
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { Fragment, useState } from 'react'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const router = useRouter()
    const [selected, setSelected] = useState(options[0])

    const handleUpdateParams = (e: {title: string, value: string}) => {
        const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase())

        router.push(newPathName)
    }

    return (
        <div className='w-fit'> 
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e)
                    handleUpdateParams(e)
                }}
            >
                <div className='relative w-fit z-10'>
                    <Listbox.Button className="custom-filter__btn">
                        <span className='block truncate'>{selected.title}</span>
                        <Image  
                            src="/chevron-up-down.svg"
                            width={20}
                            height={20}
                            className='ml-4 object-contain'
                            alt='up down'
                        />
                    </Listbox.Button>
                    
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-20">
                            {options.map((option) => (
                                <Listbox.Option key={option.title} value={option}>
                                    {({ active, selected }) => (
                                        <span className={`block truncate px-4 py-2 ${active ? 'bg-blue-500 text-white' : 'text-black'}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter