import React from "react";
import { useSpring, animated } from "react-spring";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Content() {
	const customer = useSpring({ customers: 10245, from: { customers: 0 } });
	const cards = useSpring({ cards: 12045, from: { cards: 0 } });
	return (
		<section className="pt-10 md:flex md:flex-row">
			<div className="text-white ml-[50px] mr-[50px] text-bold flex flex-col items-center bg-gradient-to-b from-slate-400/40 to-transparent shadow-lg rounded-[24px] justify-center  md:w-[20%]" >
				<div className="mt-16 gap-8 flex items-start">
					<FaUser size={"22px"} className="mt-[12px]" />
					<div>
						<div className="text-[26px]">
							<animated.div>
								{customer.customers.to((val) =>
									Math.floor(val)
								)}
							</animated.div>
						</div>
						<p className="text-[13px] font-semibold mb-[16px]">
							Customer
						</p>
					</div>
				</div>
				<div className="mt-16 gap-8 flex items-start">
					<BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
					<div>
						<div className="text-[26px]">
							<animated.div>
								{cards.cards.to((val) => Math.floor(val))}
							</animated.div>
						</div>
						<p className="text-[13px] font-semibold mb-[36px]">
							Cards Issued
						</p>
					</div>
				</div>
			</div>

			<div className="text-[13px] gap-y-4 flex flex-col w-[100%] mt-[90px] mb-8  font-semibold md:w-[30%] md:text-[16px] md:ml-[20%] md:mt-0">
				<div className="check-content">
					<div>
						<AiFillCheckCircle size="24px" />
					</div>
					<p> Card reports sent to your phone every weeks</p>
				</div>
				<div className="check-content">
					<div>
						<AiFillCheckCircle size="24px" />
					</div>
					<p> No external fees</p>
				</div>
				<div className="check-content">
					<div>
						<AiFillCheckCircle size="24px" />
					</div>
					<p> Set spending limits and restrictions</p>
				</div>
			</div>
		</section>
	);
}
