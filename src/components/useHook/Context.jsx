import { createContext, useContext, useState, useEffect } from "react";
import fetchData from "../axiosFetch/fetchData";
import Cookies from 'js-cookie';
const Auth = createContext();

function Authuciance() {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null);
        if (Cookies.get('user')) {
            setLogin(true);
        }
    }, [])
    const Authenciance = {
        login() {
            return isLogin;
        },
        user() {
            return user;
        },
        setUser(value) {
            setUser(value);
            Cookies.set('user', JSON.stringify(value), { expires: 7 });
            setLogin(true);
        },
        handleLogout() {
            setLogin(false);
            Cookies.remove('user');
            setUser(null);
        },
    }
    return Authenciance;
}
function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = Cookies.get('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [])
    const carts = {
        cart() {
            return cart;
        },
        newCart(value) {
            setCart((prevcart) => {
                const updatedCart = [...prevcart, ...value];
                Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
                return updatedCart;
            });
        },
        removeCookies() {

            Cookies.remove('cart');
            setCart([]);
        }
    }
    return carts;
}
export const AuthContext = ({ children }) => {



    return (
        <Auth.Provider value={{ Authenciance: Authuciance(), cart: Cart() }}>
            {children}
        </Auth.Provider>
    );
}

export const UseAuth = () => useContext(Auth);