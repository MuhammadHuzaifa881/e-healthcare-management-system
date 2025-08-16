import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

const HeaderHelp = ({searchQuery,setSearchQuery}) => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Help & Support Center</h1>
        <p className="text-lg text-gray-600">
          Find answers to your questions or contact our support team
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search help articles..."
            className="pl-10 pr-4 py-6 text-lg bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderHelp;
