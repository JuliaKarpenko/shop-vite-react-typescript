import { useTranslation } from "react-i18next";

export function Localization() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: any) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div>
			<button
				className="mx-1"
				style={{
					border: "1px solid black",
					borderRadius: "5px",
					color: "#8d3132",
				}}
				onClick={() => changeLanguage("en")}
			>
				EN
			</button>
			<button
				className="mx-1"
				style={{
					border: "1px solid black",
					borderRadius: "5px",
					color: "#8d3132",
				}}
				onClick={() => changeLanguage("ua")}
			>
				UA
			</button>
		</div>
	);
}
