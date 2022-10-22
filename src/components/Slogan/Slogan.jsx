import React from "react";
import Cards from "../../assets/isocard.svg";

export default function Slogan() {
	return (
		<section className="md:relative text-[36px] my-[50px] font-extrabold md:grid md:grid-cols-3 md:items-center md:text-[48px]">
			<div className="text-center md:col-span-1 md:col-start-2">
				<p>
					Earn <span className="text-purple-500">More</span>
				</p>
				<p>Pay Less</p>
				<button className="text-white text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-purple-400 transition-all duration-300 md:text-[25px] md:py-[22px] md:px-[50px]">
					Start
				</button>
			</div>
			<div className="pt-[69px] md:absolute md:right-[-5rem]">
				<img src={Cards} alt="Cards" />
			</div>
		</section>
	);
}
