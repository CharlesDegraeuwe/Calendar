import open from '../../../assets/icons/burger-menu-open.svg';
import closed from '../../../assets/icons/burger-menu-closed.svg';
import profile from '../../../assets/icons/profile.svg';
import Hamburger from './Hamburger.jsx';
export default function Header({ burgerToggled, setBurgerToggled }) {
  const handleProfile = () => {};

  const handleClick = () => setBurgerToggled((prev) => !prev);

  const url = burgerToggled ? open : closed;

  return (
    <div>
      <div className="w-full h-20 m-0 flex justify-between fixed top-0 left-0 z-[998] bg-white border-b border-black border-solid">
        <div className="w-100 h-full  p-3 pl-10 flex items-center justify-baseline ">
          <img
            src={url}
            alt="Burger Menu"
            className="h-8 cursor-pointer "
            onClick={handleClick}
          />
        </div>
        <div className="w-100 h-full  p-3 flex items-center justify-center">
          <span className="text-2xl cursor-pointer ">Agenda</span>
        </div>
        <div className="w-100 h-full  p-3 pr-10 flex items-center justify-end">
          <img
            src={profile}
            alt="profilepicture"
            className="h-8 cursor-pointer "
            onClick={handleProfile}
          />
        </div>
      </div>
    </div>
  );
}
