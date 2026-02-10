import { useState } from "react";
import { IoLanguageOutline } from "react-icons/io5";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a
        href='#'
        className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
        onClick={() => setOpen(!open)}
      >
        <IoLanguageOutline size={22} />
        <span>Language</span>
      </a>
      <div
        className={`${open ? `h-24.4` : `h-0`} pl-4 overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <a
          href='#'
          className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
        >
          <span>Indonesia</span>
        </a>
        <a
          href='#'
          className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
        >
          <span>English</span>
        </a>
      </div>
    </div>
  );
}
