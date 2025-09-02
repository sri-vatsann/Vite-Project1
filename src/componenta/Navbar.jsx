import {
    FaHome, FaInfoCircle, FaServicestack, FaEnvelope} from "react-icons/fa"

    const navlink =[
        {
            name:"Home",
            icon: <FaHome/>,
            href:"#"
        },
        {
            name:"About",
            icon:<FaInfoCircle/>,
            href:"#"
        },
        {
            name:"Services",
            icon:<FaServicestack/>,
            href:"#"
        },
        {
            name:"Contact",
            icon:<FaEnvelope/>,
            href:"#"
        },
    ]
function Navbar(){
return(
  <>
  <nav className="bg-gray-900 text-white p-4">
    <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold">🚀My Website</h1>
        <ul className="flex space-x-6">
            {/* <li><a className="flex items-center gap-1 hover:text-blue-400" href=""><FaHome />Home</a> </li>
            <li><a className="flex items-center gap-1 hover:text-blue-400" href=""><FaInfoCircle/>About</a></li>
            <li><a className="flex items-center gap-1 hover:text-blue-400" href=""><FaServicestack/>Services</a> </li>
            <li><a className="flex items-center gap-1 hover:text-blue-400" href=""><FaEnvelope/>Contact</a> </li> */}


            {navlink.map((link, index) => (
                <li key={index}>
                    <a className="flex items-center gap-1 hover:text-blue-400" href={link.href}>
                       {link.icon}{link.name}
                    </a> 
                </li>))}
        </ul>

    </div>

  </nav>
    </>
)
}
export default Navbar;
