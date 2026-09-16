import "./Header.css";
import userDefaultPicture from "../assets/icons/user-icon.jpg";

function Header() {
  return (
    <header
      className="flex px-10 h-12 items-center
         bg-zinc-200 mt-3 rounded-4xl border
          border-[#d8d8d8]"
    >
      <div className="left flex items-center flex-1">
        <h1 className="font-sans text-[20px] font-medium w-5 text-[#1D1D1F]">
          <span className="text-blue-600">i</span>Planet
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
      <div className="flex justify-end items-center right flex-1  ">
        <button>
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
