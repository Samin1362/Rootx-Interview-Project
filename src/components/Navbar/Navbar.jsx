import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[1240px] mx-auto bg-[#FF914E] text-white shadow-md rounded">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center px-6 py-4">
        {/* Company Name */}
        <h1 className="text-2xl font-bold">Rootx</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li onClick={() => navigate("/form")} className="cursor-pointer hover:text-gray-400">
            Create Portfolio
          </li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FF914E] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="cursor-pointer hover:text-gray-400">Portfolio</li>
            <li className="cursor-pointer hover:text-gray-400">About</li>
            <li className="cursor-pointer hover:text-gray-400">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
