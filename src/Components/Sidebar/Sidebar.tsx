import React from "react";
import SidebarCategory from "./SidebarCategory";
import { GoHome } from "react-icons/go";
import { FaTiktok, FaWifi } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import SidebarCategoryItem from "./SidebarCategoryItem";
import { BiLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { AiFillShopping, AiOutlineTrophy } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
import { GiClapperboard } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper, HiOutlineShoppingCart } from "react-icons/hi";

const Sidebar = () => {
  const categories = [
    {
      categoryName: null,
      categoryItem: [
        {
          title: "Home",
          url: "/home",
          icon: <GoHome size="1.4rem" color="white" />,
        },
        {
          title: "Shorts",
          url: "/short",
          icon: <FaTiktok size="1.4rem" color="white" />,
        },
        {
          title: "Subscriptions",
          url: "/subscriptions",
          icon: <MdOutlineSubscriptions size="1.4rem" color="white" />,
        },
      ],
    },
    {
      categoryName: null,
      categoryItem: [
        {
          title: "Library",
          url: "/home",
          icon: <PiVideo size="1.4rem" color="white" />,
        },
        {
          title: "History",
          url: "/short",
          icon: <FaClockRotateLeft size="1.4rem" color="white" />,
        },
        {
          title: "Watch Later",
          url: "/subscriptions",
          icon: <LuClock4 size="1.4rem" color="white" />,
        },
        {
          title: "Liked Videos",
          url: "/subscriptions",
          icon: <BiLike size="1.4rem" color="white" />,
        },
      ],
    },
    {
      categoryName: "Explore",
      categoryItem: [
        {
          title: "Trending",
          url: "/home",
          icon: <BsFire size="1.4rem" color="white" />,
        },
        {
          title: "Shopping",
          url: "/short",
          icon: <AiFillShopping size="1.4rem" color="white" />,
        },
        {
          title: "Music",
          url: "/subscriptions",
          icon: <IoMdMusicalNote size="1.4rem" color="white" />,
        },
        {
          title: "Movie",
          url: "/subscriptions",
          icon: <GiClapperboard size="1.4rem" color="white" />,
        },
        {
          title: "Live",
          url: "/subscriptions",
          icon: <FaWifi size="1.4rem" color="white" />,
        },
        {
          title: "Gaming",
          url: "/subscriptions",
          icon: <SiYoutubegaming size="1.4rem" color="white" />,
        },
        {
          title: "News",
          url: "/subscriptions",
          icon: <HiOutlineNewspaper size="1.4rem" color="white" />,
        },
        {
          title: "Sports",
          url: "/subscriptions",
          icon: <AiOutlineTrophy size="1.4rem" color="white" />,
        },
        {
          title: "Shopping",
          url: "/subscriptions",
          icon: <HiOutlineShoppingCart size="1.4rem" color="white" />,
        },
      ],
    },
    {
      categoryName: null,
      categoryItem: [
        {
          title: "Library",
          url: "/home",
          icon: <PiVideo size="1.4rem" color="white" />,
        },
        {
          title: "History",
          url: "/short",
          icon: <FaClockRotateLeft size="1.4rem" color="white" />,
        },
        {
          title: "Watch Later",
          url: "/subscriptions",
          icon: <LuClock4 size="1.4rem" color="white" />,
        },
        {
          title: "Liked Videos",
          url: "/subscriptions",
          icon: <BiLike size="1.4rem" color="white" />,
        },
      ],
    },
  ];

  return (
    <div
      className="sidebar  p-0 "
      style={{
        maxWidth: "15vw",
        maxHeight: "100vh",
      }}
    >
      {categories.map((category, index) => (
        <SidebarCategory key={index} categoryName={category.categoryName}>
          {category.categoryItem.map((item, index) => (
            <SidebarCategoryItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </SidebarCategory>
      ))}
    </div>
  );
};

export default Sidebar;
