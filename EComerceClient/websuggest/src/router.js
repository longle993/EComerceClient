import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePages';
import { ROUTERS } from './utills/router';
import MasterLayout from './pages/theme/masterLayout';
import ProfilePage from './pages/profilePages';


const renderUserRouter = () => {
    const userRoute = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>
        }
    ]

    return (
        <MasterLayout>
        <Routes>
            {
                userRoute.map((item, key) => (
                    <Route key = {key} path= {item.path} element = {item.component}/>

                ))
            }
        </Routes>
        </MasterLayout>

    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;