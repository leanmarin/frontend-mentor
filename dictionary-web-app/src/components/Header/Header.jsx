import {
  HiOutlineBookOpen,
  HiOutlineMoon,
  HiOutlineSun,
  HiChevronDown,
} from "react-icons/hi";
import { BsJournalBookmark } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between">
      <BsJournalBookmark className="text-3xl text-gray-400" />
      <div className="flex gap-3 divide-x-2 items-center">
        <span className="font-bold">
          Serif
          <HiChevronDown className="text-purple-600 inline ml-2 text-xl" />
        </span>
        <HiOutlineMoon className="text-4xl pl-3 text-gray-400" />
      </div>
    </div>
  );
}

export default Header;
