import { useState } from "react"
import Image from "next/image"
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [profileMenu, setProfileMenu] = useState(false)

    const handleProfileClick = () => {
        setProfileMenu(!profileMenu);
    }

  return (
    <>
        <div className='py-3 sm:px-5 border-b border-solid border-slate-200 sticky top-0 z-50 bg-white'>
            <div className='w-full mx-auto flex items-center max-w-[1440px] relative'>
                <Image src='https://links.papareact.com/qd3' width={120} height={100} className="object-contain cursor-pointer hidden sm:flex" />

                <div className="relative flex items-center mx-auto max-w-sm w-11/12">
                    <input type="text" placeholder="Start your search" className="pl-10 pr-5 sm:pl-5 sm:pr-14 py-3 rounded-3xl w-full border border-solid border-slate-200 shadow-md text-black text-sm font-medium outline-none" />

                
                    <MagnifyingGlassIcon className="sm:bg-red-400 sm:hover:bg-red-500 sm:active:bg-red-600 p-2 rounded-full absolute left-2 sm:left-auto sm:right-2 h-8 w-8 cursor-pointer sm-slate-900 sm:text-white" />
                
                </div>

                <div className="hidden sm:block">
                    <button className="flex items-center gap-2 px-3 py-1 border border-solid border-slate-200 rounded-3xl text-slate-500 hover:shadow-md" onClick={handleProfileClick}>
                        <Bars3Icon className="h-6 w-6 text-black" />
                        <UserCircleIcon className="h-8 w-8" />
                    </button>

                    <div className={`absolute right-0 top-12 bg-white rounded-xl py-3 shadow-xl drop-shadow-lg flex-col w-52 z-50 border border-solid border-slate-200 ${profileMenu ? 'flex' : 'hidden'}`}>
                        <a href="#" className="text-sm font-bold text-black   px-3 py-3 hover:bg-gray-100">Signup</a>
                        <a href="#" className="text-sm font-medium text-black  px-3 py-3 hover:bg-gray-100">Login</a>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    
  )
}

export default Navbar