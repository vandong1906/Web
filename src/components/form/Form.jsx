import clsx from 'clsx'
import { Description, Field, Input, Label } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

import BackGround from '../img/BackGround.jpg'
import fetchData from '../axiosFetch/fetchData';

import { UseAuth } from '../useHook/Context';
import { Navigate, useNavigate } from 'react-router-dom';
import { validPassword } from 'components/CheckValid/CheckValid';
function Form() {
    const { Authenciance } = UseAuth();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState(false);
    const [mail, setMail] = useState('');
    const navigate = useNavigate();
    async function handlerLogin(e) {
        e.preventDefault();
        try {
            const UserLogin = {
                User_Name: name,
                password: password,

            };
            const respon = await fetchData.post('/user', UserLogin);
            console.log(respon);
            if (respon.status == 200) {
                Authenciance.setUser(respon.data);
                navigate('/');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    async function handlerSignUp(e) {
        e.preventDefault();
        try {
                const register = {
                    User_Name: name,
                    password: password,
                    mail: mail
                };
                console.log("User data:", register);
                const status = await fetchData.post("/user/register", register);
                console.log("Response status:", status.status);
                if (status.status == 200) {
                    navigate('/register/verify');
                }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return <>
        <div className="flex items-center justify-center min-h-screen bg-slate-100/40 inset-0 fixed z-50">
            <div className={clsx("bg-white p-8 rounded-lg shadow-md w-96 ", state ? "hidden" : "block")}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Đăng nhập</h2>
                    <div className="flex items-center">
                        <div className="bg-yellow-200 text-yellow-600 px-2 py-1 rounded-md text-sm font-semibold mr-2">Đăng nhập với mã QR</div>
                        <i className="fas fa-qrcode text-red-500"></i>
                    </div>
                </div>
                <form onSubmit={handlerLogin}>
                    <div className="mb-4">
                        <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập" className="w-full p-2 border border-gray-300 rounded-md" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-4 relative">
                        <input type="password" placeholder="Mật khẩu" className="w-full p-2 border border-gray-300 rounded-md" onChange={e => setPassword(e.target.value)} />
                        <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
                    </div>

                    <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md mb-4">ĐĂNG NHẬP</button>
                </form>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <a href="#" className="hover:underline">Quên mật khẩu</a>
                    <a href="#" className="hover:underline">Đăng nhập với SMS</a>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-500">HOẶC</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-between">
                    <button className="flex items-center justify-center w-1/2 bg-blue-600 text-white py-2 rounded-md mr-2">
                        <i className="fab fa-facebook-f mr-2"></i> Facebook
                    </button>
                    <button className="flex items-center justify-center w-1/2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md">
                        <i className="fab fa-google mr-2"></i> Google
                    </button>
                </div>
                <div className="text-center text-sm text-gray-500 mt-4">
                    Bạn mới biết đến Shopee? <button type='submit' onClick={() => setState(true)} className="text-red-500 hover:underline">Đăng ký</button>
                </div>
            </div>
            {/******************************************************  handler register *************************** */}
            <div className={clsx("bg-white p-8 rounded-lg shadow-md w-96 ", state ? "block" : "hidden")}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Đăng kí </h2>
                </div>
                <form onSubmit={handlerSignUp}>
                    <div className="mb-4">
                        <input type="text" placeholder="Tên đăng nhập" className="w-full p-2 border border-gray-300 rounded-md" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-4 relative">
                        <input type="password" placeholder="Mật khẩu" className="w-full p-2 border border-gray-300 rounded-md" onChange={e => setPassword(e.target.value)} />
                        <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <div className="mb-4 relative">
                        <input type="text" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" onChange={e => setMail(e.target.value)} />
                        <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md mb-4">ĐĂNG NHẬP</button>
                </form>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <a href="#" className="hover:underline">Quên mật khẩu</a>
                    <a href="#" className="hover:underline">Đăng nhập với SMS</a>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-500">HOẶC</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-between">
                    <button className="flex items-center justify-center w-1/2 bg-blue-600 text-white py-2 rounded-md mr-2">
                        <i className="fab fa-facebook-f mr-2"></i> Facebook
                    </button>
                    <button className="flex items-center justify-center w-1/2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md">
                        <i className="fab fa-google mr-2"></i> Google
                    </button>
                </div>
                <div className="text-center text-sm text-gray-500 mt-4">
                    ban da co account <button type='submit' className="text-red-500 hover:underline" onClick={e => setState(false)}>Đăng ký</button>
                </div>
            </div>
        </div>
        {
            Authenciance.login() && (<Navigate to='/' replace={true} />)
        }

    </>

}

export default Form;