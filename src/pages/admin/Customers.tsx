// import React, { useState } from 'react'
import data from '../../data'
import CustomerTile from '../../components/admin/CustomerTile'
import SearchIcon from '../../components/ui/SearchIcons'

const Customers = () => {

    const { customers } = data


    // const [actionId, setActionId] = useState('')
    return (

        <div className='bg-white rounded-lg'>
            <div className="flex justify-between p-8 items-center">
                <p className="font-semibold">Customers</p>
                <div className='relative'>
                    <SearchIcon />
                    <input type='text' className='text-black py-2 px-4 rounded cursor-pointer border-slate-400 border-[1px] text-sm text-left outline-none pl-10' value={''} placeholder='Search customers' />
                </div>
            </div>

            <div className='grid grid-cols-table-customers gap-x-8 px-8 py-4 border-t-[1px] border-b-[1px] mb-6'>
                <button>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.3087L3.37549 1.00035M3.37549 1.00035L5.75246 3.30726M3.37549 1.00035L3.37935 13M13 10.692L10.6238 12.9997M10.6238 12.9997L8.24754 10.692M10.6238 12.9997V1" stroke="#474B57" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className='text-sm text-slate-500 font-medium '>
                    Name
                </span>

                <span className='text-sm text-slate-500 font-medium'>
                    Email
                </span>

                <span className='text-sm text-slate-500 font-medium'>
                    Shipping Address
                </span>

                <span className='text-sm text-slate-500 font-medium'>
                    Created at
                </span>

                <span className='text-sm text-slate-500 font-medium'>
                    Active
                </span>

                
                <span className='text-sm text-slate-500 font-medium'>
                    Verified
                </span>

                <span className='text-sm text-slate-500 font-medium'>
                    Action
                </span>
            </div>

            {
                customers.length < 1 ?
                    <p className='px-8 py-8 text-slate-500'>There are no customers yet.</p>
                    :
                    <div className="w-full">
                        {
                            customers.map(customer =>
                                <CustomerTile key={customer.id} customer={customer} />
                            )
                        }
                    </div>

            }


        </div>
    )
}

export default Customers