import {
  commonItems,
  doctorItems,
  hospitalAdminItems,
  patientItems,
} from "@/constants/nav-items/nav-items";
import { useNavigate, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Logo from "@/assets/logo-3.png";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";

const Sidebars = ({ userType, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const getMenuItems = () => {
    switch (userType) {
      case "hospital":
        return [...hospitalAdminItems, ...commonItems];
      case "doctor":
        return [...doctorItems, ...commonItems];
      case "patient":
        return [...patientItems, ...commonItems];
      default:
        return commonItems;
    }
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/auth/login");
  };

  const renderMenuItems = () => {
    return getMenuItems().map((item, index) => {
      const IconComponent = item.icon;

      if (item.submenu) {
        return (
          <SubMenu
            key={index}
            label={isOpen ? item.title : ""}
            icon={<IconComponent />}
            defaultOpen={activePath.startsWith(item.path)}
            className={`text-gray-700 hover:text-primary-600 ${
              activePath.startsWith(item.path) ? "!text-primary-600" : ""
            }`}
            rootStyles={{
              "& > .ps-menu-button": {
                "&:hover": {
                  color: "#a855f7",
                },
                ...(activePath.startsWith(item.path) && {
                  borderLeft: "4px solid #a855f7",
                  paddingLeft: "calc(1rem - 4px)",
                }),
              },
              "& > .ps-submenu-content": {
                zIndex: 1000,
                backgroundColor: "white",
                // boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            {item.submenu.map((subItem, subIndex) => (
              <MenuItem
                key={subIndex}
                onClick={() => handleItemClick(subItem.path)}
                className={`${
                  activePath === subItem.path
                    ? "!bg-primary-50 !text-primary-600 font-medium "
                    : ""
                }`}
                rootStyles={{
                  "& > .ps-menu-button": {
                    ...(activePath === subItem.path && {
                      borderLeft: "4px solid #a855f7",
                      paddingLeft: "calc(1rem - 4px)",
                    }),
                  },
                }}
              >
                <div className="flex items-center">
                  {!isOpen && (
                    <span className="absolute left-12 px-2 py-1 z-[1001] whitespace-nowrap  ">
                      {subItem.title}
                    </span>
                  )}
                  {isOpen && subItem.title}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
        );
      }

      return (
        <MenuItem
          key={index}
          icon={<IconComponent />}
          onClick={() => handleItemClick(item.path)}
          className={`text-gray-700 hover:bg-primary-50 hover:text-primary-600 ${
            activePath === item.path
              ? "!bg-primary-50 !text-primary-600 font-medium"
              : ""
          }`}
          rootStyles={{
            "& > .ps-menu-button": {
              ...(activePath === item.path && {
                borderLeft: "4px solid #a855f7",
                paddingLeft: "calc(1rem - 4px)",
              }),
            },
          }}
        >
          {isOpen ? item.title : ""}
        </MenuItem>
      );
    });
  };

  return (
    <Sidebar
      collapsed={!isOpen}
      backgroundColor="white"
      width="250px"
      collapsedWidth="80px"
      rootStyles={{
        height: "100vh",
        position: "fixed",
        borderRight: "1px solid #e5e7eb",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        zIndex: 50, // Ensure sidebar stays above page content
      }}
    >
      {/* Logo Section */}
      <div
        className={`flex items-center justify-center p-4 ${
          !isOpen ? "h-16" : "h-28"
        }`}
      >
        {isOpen ? (
          <img src={Logo} alt="Logo" className="h-24 object-contain" />
        ) : (
          <div className="text-xl font-bold text-primary-600">HC</div>
        )}
      </div>

      <Menu
        menuItemStyles={{
          button: ({ level }) => {
            if (level === 0) {
              return {
                "&:hover": {
                  backgroundColor: "#faf5ff",
                  color: "#a855f7",
                },
                "&.active": {
                  backgroundColor: "#faf5ff !important",
                  color: "#a855f7 !important",
                },
              };
            }
            return {};
          },
        }}
      >
        {renderMenuItems()}

        <MenuItem
          icon={<FiLogOut />}
          onClick={handleLogout}
          className="text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        >
          {isOpen ? "Logout" : ""}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidebars;