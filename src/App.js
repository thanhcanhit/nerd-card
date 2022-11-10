import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slogan from "./components/Slogan/Slogan";
import Content from "./components/Content/Content";
import { useEffect, useState } from "react";

function App() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const handleSize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleSize);
		handleSize();
		return () => window.removeEventListener("resize", handleSize);
	}, []);

	useEffect(() => {
		if (windowSize.width < 500) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	}, [windowSize]);
	return (
		<div className="overflow-x-hidden overflow-y-auto font-sora h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-600 from-white to-purple-500 dark:text-white text-black md:px-[40px]">
			<Navbar isMobile={isMobile} />
			<Slogan />
			<Content />
		</div>
	);
}

export default App;
