import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export default function NavBar() {
  return (
    <header className="w-full py-5 sm:py-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden space-x-5">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" height={18} width={18} />
          <img src={bagImg} alt="search" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
}
