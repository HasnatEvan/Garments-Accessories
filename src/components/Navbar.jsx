import BottomNavbar from "./BottomNavbar";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Navbar = () => {
  return (
    <div className="w-full"> 
      <TopHeader />
      <MiddleHeader />
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
