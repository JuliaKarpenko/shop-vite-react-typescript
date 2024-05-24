import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useTranslation } from "react-i18next";
import "./StoreItem.css";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();
	const quantity = getItemQuantity(id);
	const { t } = useTranslation();

	return (
		<Card className="h-100">
			<div className="my-hover">
				<Card.Img
					variant="top"
					src={imgUrl}
					height="350px"
					style={{ objectFit: "cover" }}
					className="transform-scale"
				/>
			</div>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-3">{name}</span>
					<span className="ms-3 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button
							className="w-100 btn"
							style={{
								color: "white",
								backgroundColor: "#8d3132",
								border: "#8d3132",
							}}
							onClick={() => increaseCartQuantity(id)}
						>
							+ {t("Add to cart")}
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center flex-center"
								style={{ gap: ".5rem" }}
							>
								<Button
									style={{
										color: "white",
										backgroundColor: "#8d3132",
										border: "#8d3132",
										width: "30px",
										height: "30px",
									}}
									onClick={() => decreaseCartQuantity(id)}
									size="sm"
								>
									-
								</Button>
								<div>
									{quantity} {t("in cart")}
								</div>
								<Button
									style={{
										color: "white",
										backgroundColor: "#8d3132",
										border: "#8d3132",
										width: "30px",
										height: "30px",
									}}
									onClick={() => increaseCartQuantity(id)}
								>
									+
								</Button>
							</div>
							<Button
								style={{
									color: "white",
									backgroundColor: "#8d3132",
									border: "#8d3132",
								}}
								size="sm"
								onClick={() => removeFromCart(id)}
							>
								{t("Remove")}
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
