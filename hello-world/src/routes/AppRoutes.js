import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home'
import About from '../pages/About'
import Users from '../pages/Users'
import UserDetails from '../pages/UserDetails'
import NotFound from '../pages/NotFound'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails name/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes