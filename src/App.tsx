import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Header } from "./components/Header";
import imgBanner from "/images/bgr.webp";

function App() {
	return (
		<ShoppingCartProvider>
			<Header />
			<div style={{ borderBottom: "1px solid black" }}>
				<img src={imgBanner} alt="Banner" className="img-fluid" />
			</div>
			<Container className="container my-4 d-flex align-item-center justify-content-center">
				<div className="col-12 row">
					<div className="col-lg-3 col-md-12">
						<Navbar />
					</div>
					<div className="col-lg-9 col-md-12 mt-3 mt-lg-0 ">
						<Outlet />
					</div>
				</div>
			</Container>
		</ShoppingCartProvider>
	);
}

export default App;
