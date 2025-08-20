

import { Input } from "@/components/ui/input";
import {
  FaSearch,
  FaTimes,
} from "react-icons/fa";
const SearchDoctor = ({setSearchTerm,searchTerm}) => {
  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div className="relative w-80">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name, specialty or email..."
            className="pl-10 pr-8 py-2 rounded-lg bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <FaTimes
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={() => setSearchTerm("")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchDoctor;
