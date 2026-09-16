import "./Header.css";
import userDefaultPicture from "../assets/icons/user-icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header
      className="flex fixed left-5 right-5 px-10 h-12 items-center
         bg-zinc-200/70 backdrop-blur-xl  mt-3 rounded-4xl border
          border-[#d8d8d8]"
    >
      <div className="left flex items-center flex-1">
        <h1 className="font-sans text-[20px] font-medium w-5 text-[#1D1D1F]">
          <span className="text-blue-800">i</span>Planet
        </h1>
      </div>
      <div className="center flex items-center flex-1">
        <input
          type="text"
          className="w-full ps-5 font-light text-[15px] hidden md:block  
          border border-[#d8d8d8] h-8 rounded-2xl lowercase bg-white "
          placeholder="Find your favorite products..."
        />
      </div>
      <div className="flex gap-4 justify-end items-center right flex-1  ">
        <button className="relative flex items-center">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl text-gray-700"
          />
          <span 
          className="absolute -top-2 text-white -right-2 bg-blue-400/60 w-5 rounded-[50%]
             font-normal text-[14px] text-center">5</span>
        </button>
        <button className="flex items-center">
          <img
            className="h-7 rounded-[50%]"
            src={userDefaultPicture}
            alt="user-image"
          />
        </button>
        
      </div>
    </header>
  );
}

export default Header;
