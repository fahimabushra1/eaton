import { CiHeart } from 'react-icons/ci';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
const Navbar = () => {

  const {logOut, user}= useAuth();

  const handleLogout = async ()=>{
    await logOut()
  }
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
        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li><Link>Menu</Link></li>
      <li><Link>Offers</Link></li>
      <li><Link>Food</Link></li>
      <li><Link>Services</Link></li>
      <li><Link to={"dashboard"}>Restaurants</Link></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Eaton</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-xl'><Link to={"food"}>Restaurants</Link></li>
    <li className='text-xl'><Link>Services</Link></li>
      <li className='text-xl'><Link>Offers</Link></li>
      <li className='text-xl'><Link>Map</Link></li>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-black z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-orange-500">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn text-white bg-[#198754] btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link className="justify-between">
            Favourites
            <span><CiHeart className='text-3xl font-bold' /></span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        {
         user?
         <>
         <span className="text-white mr-4">{user?.email}</span>
         <button onClick={handleLogout} className="btn mr-2">Log out</button>
         </>
         :
        <Link to= "/login" className="mx-4">Login</Link>
       }
      </ul>
    </div>
    <li>
        <details>
          <summary><TbWorld className='text-3xl font-bold' />en</summary>
          <ul className="bg-black rounded-t-none p-2">
            <li><button>English</button></li>
            <li><button>Bangla</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  </div>
</div>
    );
};

export default Navbar;