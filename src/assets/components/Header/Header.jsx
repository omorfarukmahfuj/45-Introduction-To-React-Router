import { useState } from "react";
import NavItem from '../NavItem/NavItem';
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/users", name: "Users" },
    { id: 6, path: "/xyz123", name: "Error Page" },
  ];
  return (
    <header>
      <nav className='bg-[#4D6BF2]  text-white py-3'>

        <div className='text-3xl md:hidden static pl-2' onClick={() => setOpen(!open)}>
          {
            open == true ? <RxCross2 /> : <HiOutlineMenu />
          }
        </div>

        <ul className={`md:flex justify-center absolute md:static bg-[#4D6BF2] duration-1000 ${open ? 'left-0' : '-left-40'}`}>
          {
            routes.map(route => <NavItem key={route.id} route={route}></NavItem>)
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;