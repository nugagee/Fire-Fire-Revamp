import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import churchLogo from "../assets/img/ffiemc/ffiemc.png";


const NavbarDefault = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 text-black mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/services' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="services" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/about-us' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="about-us" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/about-us' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="about-us" className="flex items-center">
          Sermons
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/about-us' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="about-us" className="flex items-center">
          Special Programme
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/blog' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="blog" className="flex items-center">
          Events
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/blog' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="blog" className="flex items-center">
          Blog
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/blog' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="blog" className="flex items-center">
          Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/testimonials' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="testimonials" className="flex items-center">
          Church Pastors
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={()=> setOpenNav(false)}
        className={`p-1 font-normal text-lg text-white hover:text-yellow-800 ${pathname === '/testimonials' && 'text-yellow-800 underline underline-offset-8'}`}
      >
        <Link to="testimonials" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="py-2 lg:py-0 border-none navBar rounded-none mx-0 min-w-full">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* <Typography className="mr-4 cursor-pointer py-1.5 text-black font-bold text-2xl"> */}
          <Link to="/">
          <div className="justify-items-center">
            <img className="" src={churchLogo} style={{height: "8rem"}}/>
          </div>
          </Link>
        {/* </Typography> */}
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="outlined"
          size="sm"
          className="hidden lg:inline-block text-primary bg-red-800 border-white-900 font-bold floating-4"
          onClick={() => {
            setOpenNav(false)
            navigate("contact-us")
          }
          }
        >
          <span>Give Donation</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={() => {
            setOpenNav(false)
            navigate("contact-us")
          }}>
            <span>Give Donation</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarDefault;
