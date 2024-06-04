import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
	id: number;
	quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
	const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
		useShoppingCart();
	const item = storeItems.find((i) => i.id === id);

	if (item == null) return null;
	return (
		<Stack
			direction="horizontal"
			gap={0.5}
			className="d-flex align-items-start justify-content-between"
		>
			<div>
				<img
					src={item.imgUrl}
					style={{ width: "125px", height: "75px", objectFit: "cover" }}
				/>
				<div>{item.name}</div>
			</div>

			<div>
				{formatCurrency(item.price)}

				{quantity > 1 && (
					<span className="text-muted" style={{ fontSize: ".65 rem" }}>
						{` x ${quantity}`}
					</span>
				)}

				<div
					className="d-flex justify-content-between"
					style={{ width: "65px" }}
				>
					<Button
						variant="outline-danger"
						onClick={() => decreaseCartQuantity(id)}
						size="sm"
					>
						-
					</Button>
					<Button
						variant="outline-danger"
						onClick={() => increaseCartQuantity(id)}
						size="sm"
					>
						+
					</Button>
				</div>
			</div>

			<div className="d-flex flex-column align-items-center justify-content-between">
				<div>{formatCurrency(item.price * quantity)}</div>
				<Button
					variant="outline-danger"
					size="sm"
					onClick={() => removeFromCart(item.id)}
				>
					&times;
				</Button>
			</div>
		</Stack>
	);
}
