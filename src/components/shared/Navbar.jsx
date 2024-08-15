import { Link } from 'react-router-dom';
import avatar from "../../assets/images/Avatar.png";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black text-white rounded-b-3xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li><Link>Menu</Link></li>
      <li><Link>Offers</Link></li>
      <li><Link>Food</Link></li>
      <li><Link>Services</Link></li>
      <li><Link>Restaurants</Link></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Eaton</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Menu</Link></li>
      <li><Link>Offers</Link></li>
      <li><Link>Food</Link></li>
      <li><Link>Services</Link></li>
      <li><Link>Restaurants</Link></li>
    </ul>
  </div>
  <div className="navbar-end pr-4">
    <Link><img src={avatar} alt="avatar" /></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;