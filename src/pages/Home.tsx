import { useTranslation } from "react-i18next";

export function Home() {
	const { t } = useTranslation();
	return (
		<>
			<h3>{t("welcome")}</h3>
			<p>{t("description")}</p>
			<p>
				{t(
					"Choose your own unique symbol of goodness, happiness, and prosperity from our rich collection of Pysankas."
				)}
			</p>
		</>
	);
}
