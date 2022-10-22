import React, { useState } from "react";
import { BsEmojiSunglassesFill, BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useDarkMode from "./../../useDarkMode";

export default function Navbar(props) {
	const { isMobile } = props;
	const [openMenu, setOpenMenu] = useState(false);
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<nav className="flex items-center relative z-10">
			<div className="flex items-center">
				<div className="text-[20px] font-bold mr-2">NerdCard</div>
				{isDarkMode ? (
					<BsFillMoonFill
						size="22px"
						color="#FBDF07"
						className="cursor-pointer"
						onClick={() => {toggleDarkMode(!isDarkMode)}}
					/>
				) : (
					<BsEmojiSunglassesFill
						size="22px"
						color="#FBDF07"
						className="cursor-pointer"
						onClick={() => {toggleDarkMode(!isDarkMode)}}
					/>
				)}
			</div>
			<ul className="ml-auto md:flex md:gap-8">
				{openMenu && isMobile ? (
					<AiOutlineClose
						size={"22px"}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
				) : !openMenu && isMobile ? (
					<GiHamburgerMenu
						size={"22px"}
						className="cursor-pointer"
						onClick={handleMenu}
					/>
				) : (
					<>
						<li className="btn-hover">Features</li>
						<li className="btn-hover">Menu</li>
						<li className="btn-hover">Our Story</li>
						<li className="btn-hover ml-[40px]">Contact</li>
					</>
				)}
				{openMenu && (
					<div className="absolute right-8 bg-white p-8 text-center text-[13px] text-black">
						<li className="cursor-pointer">Features</li>
						<li className="cursor-pointer">Menu</li>
						<li className="cursor-pointer">Our Story</li>
						<li className="cursor-pointer">Contact</li>
					</div>
				)}
			</ul>
		</nav>
	);
}
