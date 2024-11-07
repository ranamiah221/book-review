import { IoIosArrowDown } from "react-icons/io";

const Sorting = () => {
    return (
        <div className="dropdown dropdown-bottom dropdown-center">
          <div  tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white px-16">
            Sort by <span><IoIosArrowDown /></span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow"
          >
            <li>
              <button className="btn mb-1">Rating</button>
            </li>
            <li>
            <button className="btn mb-1">Number of Page</button>
            </li>
            <li>
            <button className="btn mb-1">Publisher Year</button>
            </li>
          </ul>
        </div>
    );
};

export default Sorting;