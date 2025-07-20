import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import nav1 from "../../public/images/nav1.jpeg";
import nav2 from "../../public/images/nav2.jpeg";
import nav3 from "../../public/images/nav3.jpeg";
import nav4 from "../../public/images/nav4.jpeg";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const menuRef = useRef(null);
  const navImages = [nav1, nav2, nav3, nav4];
  const navLinks = ["SHOP", "FIND IN STORES", "ABOUT US", "PROGRAMS"];

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const tl = useRef();

  const handleClick = () => {
    if (!mobileMenu) {
      setShowMenu(true);
      setMobileMenu(true);
    } else {
      tl.current = gsap.timeline({
        onComplete: () => {
          setShowMenu(false);
          setMobileMenu(false);
        },
      });

      tl.current.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power1.in",
      });
    }
  };

  useEffect(() => {
    if (mobileMenu && showMenu) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power1.out" }
      );
    }
  }, [mobileMenu, showMenu]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-3 md:p-9 flex justify-between items-center">
        <img
          src="/images/nav-logo.svg"
          alt="nav-logo"
          className="md:w-24 w-20"
        />
        <button onClick={handleClick}>
          {mobileMenu ? (
            <IoClose cursor={"pointer"} size={55} color="black" />
          ) : (
            <FaBarsStaggered size={40} cursor={"pointer"} color="black" />
          )}
        </button>
      </nav>
      {showMenu && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-screen bg-[#FAEAD4] z-40"
        >
          <div className="flex justify-center items-center h-full">
            <div className="flex-1/2">
              <ul className="w-full flex justify-center items-center flex-col gap-10">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className="text-5xl md:text-6xl lg:text-9xl font-extrabold transition-all duration-300 cursor-pointer hover:scale-105 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {!isMobile && !isTablet && (
              <img
                src={navImages[hoveredIndex]}
                alt="nav-image"
                className="w-full h-screen flex-1/2 object-cover object-center"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
