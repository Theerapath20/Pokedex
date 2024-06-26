import location from '../assets/location.svg'
import track from '../assets/track.svg'
import discount from '../assets/discount.svg'
import logo1 from '../assets/International_Pokémon_logo 1.svg'
import search from '../assets/search.svg'
import user from '../assets/user.svg'
import cart from '../assets/bag-2.svg'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import '../global.css'




function Navbar({ cartItem , handleSearch , searchTerm  }) {
  const getTotalQuantity = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity(cartItem);

  return (
    <div className="text-xs md:text-base">
      <div className="navbar">
        <div className="flex justify-around flex-wrap  md:gap-28 ">
          <div className="">Welcome to Pokemon shop!</div>

          <div className="flex  gap-3">
            <img className=" hidden md:block" src={location} alt="location" />
            <p>Contact 123456 </p>
            <p>|</p>
            <img className=" hidden md:block" src={track} alt="location" />
            <p>Track your order </p>
            <p>|</p>
            <img className=" hidden md:block" src={discount} alt="location" />
            <p>All Offers </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-center flex justify-around border shadow-lg md:p-2 md:gap-32 gap-12 ">
        <Link to={"/"}>
          <div className="image-container">
            <img className="responsive-image " width={200} src={logo1} alt="logo" />
          </div>
        </Link>
        <div className="pt-2 w-1/3  md:block">
          <div className="border rounded-lg flex p-3  gap-3 bg-gray-100   ">
            <img className="ml-3 w-5" src={search} alt="search" />
            <input
              className=" bg-gray-100 w-full focus:outline-none  "
              type="text"
              placeholder="Search name Pokémon ..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex gap-3 pt-4  sm:text-xs md:text-sm">
          <div className="flex gap-3">
            <img className="h-6" src={user} alt="" />
            <p className="mt-1 md:mt-0 ">Username</p>
            <p className="mx-3">|</p>
          </div>
          <Link to={"/pocket"}>
            <div className="flex flex-wrap">
              <div className="mx-2">
                <img className="h-6 absolute  " src={cart} alt="" />
                <div className=" relative text-white">
                  <div className="rounded-full  w-4 h-4  ml-3 bg-black   flex justify-center  ">
                    <div className=" text-xs">{totalQuantity}</div>
                  </div>
                </div>
              </div>
              <p className="mt-1 md:mt-0">Pocket</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar