import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItem from "../data/items.json";
import bgr from "/images/bgrCart.webp";
import { useTranslation } from "react-i18next";

type ShoppingCartProps = {
	isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
	const { closeCart, cartItems } = useShoppingCart();
	const { t } = useTranslation();

	return (
		<Offcanvas
			show={isOpen}
			onHide={closeCart}
			placement="end"
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<div>
				<img src={bgr} alt="bgr" style={{ width: "50px", height: "100%" }} />
			</div>
			<div style={{ width: "100%" }}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{t("Cart")}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body className="px-2">
					<Stack gap={3}>
						{cartItems.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
						<div className="ms-auto fw-bold fs-5">
							{t("Total")}
							{formatCurrency(
								cartItems.reduce((total, cartItem) => {
									const item = storeItem.find((i) => i.id === cartItem.id);
									return total + (item?.price || 0) * cartItem.quantity;
								}, 0)
							)}
						</div>
					</Stack>
				</Offcanvas.Body>
			</div>
		</Offcanvas>
	);
}
