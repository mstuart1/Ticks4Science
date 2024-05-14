import { FaEye, FaHome, FaListOl, FaSpider, FaStroopwafel, FaRegBookmark } from "react-icons/fa"

const navMenuItems = [
    {id: 1, title: 'Home', path: '/', icon: <FaHome/>},
    {id: 2, title: 'Join the Project', path: '/steps', icon: <FaListOl/>},
    {id: 3, title: 'Ticks of NJ', path: '/ticks', icon: <FaSpider/>},
    {id: 4, title: `Prevent Tick Bites`, path: '/checkMenu', icon: <FaEye/>},
    // {id: 5, title: `Tick Blitz`, path: '/tickBlitz', icon: <FaStroopwafel/>},
    {id: 6, title: `Education`, path: '/education', icon: <FaRegBookmark/>},
]

export default navMenuItems