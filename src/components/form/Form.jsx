import clsx from 'clsx'
import { Description, Field, Input, Label } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

import fetchData from '../axiosFetch/fetchData';
function Form() {

    const [state, setState] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setSatus] = useState(true);
    const UserLogin = {
        User_Name: name,
        password: password
    };
    const [error, setError] = useState(null);
    // async function handlerLogin(UserLogin) {
    //     try {
    //         console.log("User data:", UserLogin);
    //         const status = await fetchData.post(process.env.REACT_APP_APi_URL + "/user/login", UserLogin);
    //         console.log("Response status:", status);

    //         if (status.status === 200) {
    //             handlerUser(status.data);
    //         } else {
    //             setError("Login failed. Please check your credentials.");
    //         }
    //     } catch (error) {
    //         setError("An error occurred during login.");
    //         console.error("Error:", error);
    //     }
    // }
    // async function handlerSignUp(UserLogin) {
    //     try {
    //         console.log("User data:", UserLogin);
    //         const status = await fetchData.post(process.env.REACT_APP_APi_URL + "/user/signup", UserLogin);
    //         console.log("Response status:", status);

    //         if (status.status === 200) {
    //             handlerUser(status.data);
    //         } else {
    //             setError("Login failed. Please check your credentials.");
    //         }
    //     } catch (error) {
    //         setError("An error occurred during login.");
    //         console.error("Error:", error);
    //     }
    // }
    // useEffect(() => {
    //     console.log("Current user in context:", user);
    // }, [user]);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setError(null); // Clear previous errors
    //     handlerLogin(UserLogin);
    // };
    return (
        <div className={clsx("w-full max-w-md  px-4 bg-black/80 rounded-lg  p-24 fixed inset-0 z-50 m-auto h-1/2 ", state ? "hidden" : "fixed")}>
            <div className='block right-0 absolute top-0'><button type="button" onClick={() => {
                setState(!state)
            }}><XCircleIcon className='text-white' />close</button></div>

            {/*--------------------------------------------Login---------------------------------------- */}
            <div className={clsx(status && 'hidden')}>
                <Field >
                    <Label className="text-sm/6 font-medium text-white ">Name</Label>
                    <Description className="text-sm/6 text-white ">Use your real name so people will recognize you.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 bg-white/85',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <Label className="text-sm/6 font-medium text-white ">Name</Label>
                    <Description className="text-sm/6 text-white">Use your real name so people will recognize you.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 bg-white/85',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />


                </Field>

            </div>

            {/*--------------------------------------------sigUp---------------------------------------- */}
            <div className={clsx(!status && 'hidden')}>

                <Field >
                    <Label className="text-sm/6 font-medium text-white ">Name</Label>
                    <Description className="text-sm/6 text-white "></Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 bg-white/85',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <Label className="text-sm/6 font-medium text-white ">password</Label>
                    <Description className="text-sm/6 text-white"></Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 bg-white/85',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                     <Label className="text-sm/6 font-medium text-white ">password again</Label>
                    <Description className="text-sm/6 text-white"></Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 bg-white/85',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                </Field>

            </div>
            <div className='around-btn flex justify-center'>

                <div className='btn text-center m-4  '>
                    <button type="submit" className='rounded bg-blue-400 p-2 data-[hover]:opacity-20' >Dang nhap</button>
                </div>
                <div className='btn text-center m-4  '>
                    <button type="submit" className='rounded bg-blue-400 p-2 data-[hover]:opacity-20' >Dang nhap</button>
                </div>

            </div>
            <div className='tranferForm'>
                <button type="button" onClick={() => {
                    setSatus(!status);
                }}>{
                    status ?
                    'Do you have any account please click here' :'you have account' }</button>
            </div>

        </div>
    )
}

export default Form;