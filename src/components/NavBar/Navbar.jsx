import {
  ChevronDownIcon, Bars4Icon, ShoppingCartIcon,
  UserIcon
} from '@heroicons/react/24/solid'
import {
  ArchiveBoxXMarkIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems, Switch } from '@headlessui/react'


import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import fetchData from '../axiosFetch/fetchData';
import { UseAuth } from '../useHook/Context';

function NavBar() {
  const navigate =useNavigate();
  const { isLogin,handleLogout } = UseAuth();
  const [data, setData] = useState([]);
  const [enabled, setEnabled] = useState(false)
  const [color, setcolor] = useState(true);
  useEffect((color) => {
    setcolor(!color);
  }, [enabled])
  return <>
    <nav className={clsx('top-0 z-40 h-full', enabled ? 'bg-white' : 'bg-slate-600')}
    >
      <div className="flex justify-around max-md:hidden pc items-center ">
        <div className='flex justify-center items-center'>
          <Link to='/'>Home</Link>
        </div>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold  focus:outline-none  data-[hover]:text-blue-400 data-[focus]:outline-1 data-[focus]:outline-white m-5 ">
            Product
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom start"
            className="divide-y divide-white/5 bg-black rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-50"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold  focus:outline-none  data-[hover]:text-blue-400 data-[focus]:outline-1 data-[focus]:outline-white m-5 ">
            Brand
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom start"
            className="divide-y divide-white/5 bg-black rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-50"
          >
            <div className="p-3">
              {/* {
              data.map((datas)=>(
                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">{datas.Brand_Name}</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
              ))
            } */}

            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div className=''>
          <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
        </div>
        <div className='Search relative flex items-center' >
          <input type="text" name="" id="" className='rounded-full h-12 text-center' placeholder='Search' />
          <MagnifyingGlassIcon className='h-6 w-6 absolute right-0 bg-blue-600 rounded-full mr-4' />
        </div>
        <div className='switch-color flex justify-center items-center'>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-black transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        </div>
        <div className="Card-Shoping flex justify-center ">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
              Shopping Cart<ShoppingCartIcon className="size-5" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom start"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 "
            >
              
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">

                      Delete
                      <kbd className="ml-auto font-sans text-xs text-white/50 ">
                        <img src='' alt="" />
                      </kbd>
                    </button>
                  </MenuItem>
                

            </MenuItems>
          </Menu>
        </div>
        {/*User ---------------------- */}
        <div className='User flex justify-center '>
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
              vandong <UserIcon className="size-5" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 "
            >

              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <TrashIcon className="size-4 fill-white/30" />
                  Setting
                  <kbd className="ml-auto font-sans text-xs text-white/50 ">

                  </kbd>
                </button>
              </MenuItem>
              {
                isLogin ? (<>
                <MenuItem>
                  <Link to='/AddProduct' className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'> <TrashIcon className="size-4 fill-white/30" />AddProduct</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/DashBoard' className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'> <TrashIcon className="size-4 fill-white/30" />DashBoard</Link>
                </MenuItem>
                <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={()=>{handleLogout();
                navigate('/login');
             
               
                }}>
                  <TrashIcon className="size-4 fill-white/30"  />
                  Log-out
                  <kbd className="ml-auto font-sans text-xs text-white/50 ">

                  </kbd>
                </button>
              </MenuItem>
                </>
                ) :(<MenuItem>
                  <Link to='/Login' className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'> <TrashIcon className="size-4 fill-white/30" />Login</Link>
                </MenuItem>)
              }

              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <TrashIcon className="size-4 fill-white/30" />
                  Profile
                  <kbd className="ml-auto font-sans text-xs text-white/50 ">

                  </kbd>
                </button>
              </MenuItem>
              
              
            </MenuItems>
          </Menu>
        </div>
      </div>

      {/* Mobile Phone */}
      <div className='mobile mb-4 h-full md:hidden  '>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white h-full">
            Menu <Bars4Icon className="size-4 fill-white/60 h-full" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 "
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 z-40">
                <PencilIcon className="size-4 fill-white/30" />
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <Square2StackIcon className="size-4 fill-white/30" />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <TrashIcon className="size-4 fill-white/30" />
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>

      </div>

    </nav>
  </>

    
  
}

export default NavBar;