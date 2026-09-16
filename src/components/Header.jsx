import "./Header.css";
import menuIcon from  '../assets/icons/menu-icon.svg'
import bag from '../assets/icons/bag.svg'
import userLogo from '../assets/icons/userLogo.svg'


function Header() {
  return (
    <header
      className="flex fixed left-0 right-0 px-5 h-12 items-center
        bg-white backdrop-blur-xl  mt-3 
          "
    >
      <div className="flex flex-1 min-w-0 items-center">
        <button className="flex items-center">
          <img 
          className="h-11"
          src={menuIcon} />
        </button>
      </div>
      <div className="flex flex-1 min-w-0 items-center justify-center px-2">
        <h1 className="font-brand text-[35px] font-medium leading-none text-[#1D1D1F]">
          <span >i</span>Planet
        </h1>
      </div>
      <div className="flex flex-1 min-w-0 items-center justify-end gap-4">
        <button className="flex items-center">
          <img src={bag} className="h-7" />
        </button>
        <button className="flex items-center">
          <img src={userLogo} className="h-7" />
        </button>
      </div>
    </header>
  );
}

export default Header;
