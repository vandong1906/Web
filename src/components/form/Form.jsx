import clsx from 'clsx'
import { Description, Field, Input, Label } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

import BackGround from '../img/BackGround.jpg'
import fetchData from '../axiosFetch/fetchData';
import { useCookies } from 'react-cookie';
import { UseAuth } from '../useHook/Context';
import { Navigate } from 'react-router-dom';
function Form() {
    const { isLogin,handleLogin} = UseAuth();
    const [state, setState] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setSatus] = useState(true);
    

    const [error, setError] = useState(null);
    async function handlerLogin(name,password) {
        try {
            const UserLogin = {
                User_Name: name,
                password: password
            };
            const respon = await fetchData.get(process.env.REACT_APP_APi_URL + '/user', UserLogin);
            console.log(respon);
            if (respon.status == 200) {
                handleLogin();
              
            }
        } catch (error) {
            setError("An error occurred during login.");
            console.error("Error:", error);
        }
    }
    async function handlerSignUp(name,password) {
        try {
            const UserLogin = {
                User_Name: name,
                password: password
            };
            console.log("User data:", UserLogin);
            const status = await fetchData.post(process.env.REACT_APP_APi_URL + "/user/signup", UserLogin);
            console.log("Response status:", status);
        } catch (error) {
            setError("An error occurred during login.");
            console.error("Error:", error);
        }
    }

    return <>
        <div className='flex justify-center mt-48'>
            {/*--------------------------------------------Login---------------------------------------- */}
            <div className={clsx(status ? 'block' : 'hidden', 'border-2 p-11 rounded max-w-sm')}>
                <h1 className='text-center'> Dang Nhap</h1>
                <Field >
                    <Label className="text-sm/6 font-medium ">Name</Label>
                    <Description className="text-sm/6 ">Use your real name so people will recognize you.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 border-2',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <Label className="text-sm/6 font-medium">Name</Label>
                    <Description className="text-sm/6">Use your real name so people will recognize you.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 border-2',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <div className='btn text-center mt-8 w-full  '>
                        <button type="submit" className='rounded bg-blue-400 p-2 data-[hover]:opacity-20 w-full' onClick={()=>handlerLogin(name,password)}>Dang Nhap</button>
                    </div>
                    <div className='tranferForm'>
                        <button type="button" onClick={() => {
                            setSatus(!status);
                        }}>{
                                status ?
                                    'Do you have any account please click here ?' : 'you have account'}</button>
                    </div>
                </Field>

            </div>
            <div className='w-96'>
                <img src={BackGround} alt="" className='h-full max-w-96 w-full object-cover' />
            </div>
            {/*--------------------------------------------sigUp---------------------------------------- */}
            <div className={clsx(status ? 'hidden' : 'block', 'border-2 p-11 rounded max-w-sm ')}>
                <h1 className='text-center'> Dang Ki</h1>
                <Field >

                    <Label className="text-sm/6 font-medium ">Name</Label>
                    <Description className="text-sm/6 ">Use your real name so people will recognize you.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 border-2',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <Label className="text-sm/6 font-medium">Name</Label>
                    <Description className="text-sm/6">Use your real name so people will recognize you.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 border-2',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 data-[focus]:border-rose-600'
                        )}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <div className='btn text-center mt-8 w-full  '>
                        <button type="submit" className='rounded bg-blue-400 p-2 data-[hover]:opacity-20 w-full' onClick={() => {
                            handlerSignUp(name,password);
                        }} >Dang Ki</button>
                    </div>
                    <div className='tranferForm'>
                        <button type="button" onClick={() => {
                            setSatus(!status);
                        }}>{
                                status ?
                                    'Do you have any account please click here ?' : 'you have account'}</button>
                    </div>
                </Field>

            </div>
        </div>
        {
            isLogin  && (<Navigate to='/' replace={true}/>)
        }



    </>

}

export default Form;