import { FaBars, FaBell } from "react-icons/fa";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-full mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Hamburger menu button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
          aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <FaBars className="h-5 w-5" />
        </button>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative rounded-full h-9 w-9 hover:bg-gray-100"
          >
            <FaBell className="h-4 w-4 text-gray-600" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>
          
          <Avatar className="h-8 w-8 border border-gray-200">
            <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="User avatar" />
            <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
              AD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;