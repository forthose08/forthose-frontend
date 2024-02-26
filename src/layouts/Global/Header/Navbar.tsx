import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillCartCheckFill, BsArrowUpRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./data";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import Drawer from "./Drawer.1";
import Image from "next/image";

function redirectToAbout() {}

export default function Navbar() {
  const [categoryToggle, setToggle] = useState(false);
  const [pagesToggle, setPagesToggle] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const shopList = [
    {
      title: "Products",
      data: [{ title: "IPhone 14" }, { title: "Galaxy S22 Ultra" }],
    },
    { title: "Plans", data: [{ title: "VI" }, { title: "Airtel" }] },
    {
      title: "Accessories",
      data: [{ title: "Charging Jack" }, { title: "Iphone Original Display" }],
    },
  ];

  useEffect(() => {
    const categorySection = document.getElementById("categorySection");
    const pagesSection = document.getElementById("pagesSection");

    if (categorySection) {
      categorySection.style.zIndex = categoryToggle ? "30" : "10";
    }

    if (pagesSection) {
      pagesSection.style.zIndex = pagesToggle ? "30" : "10";
    }
  }, [categoryToggle, pagesToggle]);

  const toggleCategory = () => {
    setToggle(!categoryToggle);
  };

  const togglePages = () => {
    setPagesToggle(!pagesToggle);
  };
  const [profileOpen, setProfileOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };
  const catego = [
    { title: "Products" },
    { title: "Plans" },
    { title: "Accessories" },
  ];
  return (
    <nav className={`  w-full justify-start bg-[#2c2a99] fixed z-10 `}>
      <div className=" hidden md:flex  w-full   md:flex-row  ">
        <div className="flex  text-md md:text-xl  w-full  px-3 md:px-8  items-center">
          <div className="font-bold w-[15%] text-4xl mr-20 inline p-6">
            <Link href="/">
              <Image
                alt="logo"
                src={require("../../../utils/image/icon/logoPng.png")}
                className="w-1/2 h-1/2"
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-8 w-[60%]  justify-start ">
            {navigationLinks.map((item: any, index: any) => (
              <Link
                key={index}
                href={item?.href}
                className="popp hover:border-b   text-white capitalize "
              >
                {item?.text}
              </Link>
            ))}
          </div>

          <div className="w-[18%] inline text-center bg-gradient-to-r from-purple-600 to-pink-500 rounded-full py-3 text-white">
            <a href="/home/register">
              LOGIN{" "}
              <span className="absolute ml-4 w-2 h-2">
                <BsArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-3xl md:hidden">
        <div className="w-[30%]  ">
          <Image
            alt="logo"
            src={require("../../../utils/image/icon/logoPng.png")}
            className="w-full h-auto "
          />
        </div>
        <div className="w-[20%]">
          <Drawer />
        </div>
      </div>
    </nav>
  );
}
