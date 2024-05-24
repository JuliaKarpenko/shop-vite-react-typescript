import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Header } from "./components/Header";
import imgBanner from "/images/bgr.webp";
import { Artists } from "./pages/Artists";

function App() {
	return (
		<ShoppingCartProvider>
			<Header />
			<div style={{ borderBottom: "1px solid black" }}>
				<img src={imgBanner} alt="Banner" className="img-fluid" />
			</div>
			<Container className="container my-4">
				<div className="col-12 row">
					<div className="col-3">
						<Navbar />
					</div>
					<div className="col-9">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/store" element={<Store />} />
							<Route path="/artists" element={<Artists />} />
						</Routes>
					</div>
				</div>
			</Container>
		</ShoppingCartProvider>
	);
}

export default App;
