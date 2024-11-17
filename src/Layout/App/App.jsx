
import Product from "Layout/Page/Product";
import { UseAuth } from "../../components/useHook/Context";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page from "Layout/Page/Page";
import Contact from "Layout/Page/contact";
import Form from "components/form/Form";
import DashBoard from "components/DashBoard/DashBoard";
import AddProduct from "components/form/addProduct";
import Verify from "components/form/Veryfi";
function App() {
    const { Authenciance } = UseAuth();
    const publicRoutes = [
        {
            path: '/product', component: <Product />,
        },
        {
            path: '/', component: <Page />,
        },
        {
            path: '/Contact', component: <Contact />,
        },
        {
            path: '/register/verify', component: <Verify/>,
        }

    ]
    const privateRoutes = [
        {
            path: '/DashBoard', component: <DashBoard />,
        },
        {
            path: '/AddProduct', component: <AddProduct />,
        },

    ]
    return (
        <BrowserRouter>
            <Routes>
                {
                    publicRoutes.map((router, index) => (
                        <Route key={index} path={router.path} element={router.component} />
                    ))
                }
                {
                    Authenciance.login() && (
                        privateRoutes.map((router, index) => (
                            <Route key={index} path={router.path} element={router.component} />
                        ))
                    )}
            </Routes>
        </BrowserRouter>

    )
}
export default App;