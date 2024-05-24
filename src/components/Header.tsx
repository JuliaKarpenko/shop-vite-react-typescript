import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import logo from "/images/logoWhite.webp";
import { Localization } from "./Localization";

export function Header() {
	const { openCart, cartQuantity } = useShoppingCart();
	return (
		<header
			className="header-container sticky-top"
			style={{ boxShadow: "0 5px 10px -5px #8d3132" }}
		>
			<div
				className="d-flex p-3 justify-content-between align-items-center"
				style={{ backgroundColor: "#8d3132" }}
			>
				<div style={{ color: "white" }}>
					<img
						src={logo}
						alt="Logo"
						width="50px"
						height="50px"
						style={{ marginRight: "1rem" }}
					/>
					<span className="header-title" role="presentation">
						Pysаnka
					</span>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<Button
						onClick={openCart}
						style={{
							width: "2.5rem",
							height: "2.5rem",
							position: "relative",
							backgroundColor: "#8d3132",
						}}
						variant="light"
						className="rounded-circle d-flex justify-content-center align-items-center mx-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							viewBox="0 0 16 16"
						>
							<path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
						</svg>
						{cartQuantity > 0 && (
							<div
								className="rounded-circle bg-white d-flex justify-content-center align-items-center"
								style={{
									color: "black",
									width: "1.2rem",
									height: "1.2rem",
									position: "absolute",
									bottom: 0,
									right: 0,
									transform: "translate(25%, 25%)",
								}}
							>
								{cartQuantity}
							</div>
						)}
					</Button>
					<Localization />
				</div>
			</div>
		</header>
	);
}
