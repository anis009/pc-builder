import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

const RootLayout = ({ children }) => {
	return (
		<div className="">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default RootLayout;
