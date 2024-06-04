import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
	const { t } = useTranslation();

	return (
		<NavbarBs
			className="bg-white shadow-sm align-items-start"
			style={{ height: "100%" }}
		>
			<Nav className="d-md-flex flex-md-row d-lg-flex flex-lg-column">
				<Nav.Link to="/shop-vite-react-typescript/" end as={NavLink}>
					{t("Home")}
				</Nav.Link>
				<Nav.Link to="/shop-vite-react-typescript/about" end as={NavLink}>
					{t("About")}
				</Nav.Link>
				<Nav.Link to="/shop-vite-react-typescript/store" as={NavLink}>
					{t("Store")}
				</Nav.Link>
				<Nav.Link to="/shop-vite-react-typescript/artists" as={NavLink}>
					{t("Artists")}
				</Nav.Link>
			</Nav>
		</NavbarBs>
	);
}
