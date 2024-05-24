import { useTranslation } from "react-i18next";

export function About() {
	const { t } = useTranslation();

	return (
		<>
			<section>
				<h3>{t("About")}</h3>
				<p>
					{t(
						"Our online store is proud to preserve and popularize the traditional Ukrainian art of Pysanka making. Pysanka is not just an egg painted with patterns, but a real amulet, a symbol of rebirth and life."
					)}
				</p>
			</section>
			<section>
				<h3>{t("History of Pysanka in Ukraine")}</h3>
				<p>
					{t(
						"The art of Pysanka making in Ukraine has a thousand-year history. Archaeological findings show that the tradition of painting eggs existed as far back as the Trypillian culture. Pysanky have always had an important ritual significance: they were given as gifts for Easter, used in wedding ceremonies and as amulets for the home."
					)}
				</p>
			</section>
			<section>
				<h3>{t("Techniques and regional peculiarities")}</h3>
				<p>
					{t(
						"In different regions of Ukraine, Easter eggs differ in their techniques and ornaments:"
					)}
				</p>
				<ul>
					<li>
						<strong>{t("Carpathians")}</strong> -{" "}
						{t(
							"Pysanka from this region are usually very bright and colorful. Traditional geometric patterns, symbols of the sun, stars and plants are used. The most commonly used technique is wax painting."
						)}
					</li>
					<li>
						<strong>{t("Podillia")}</strong> -{" "}
						{t(
							"The ornaments of Podillia`s Pysanka are usually more restrained, using floral and animal motifs. The dominant colors are red and black. The technique often combines wax painting with the use of natural dyes."
						)}
					</li>
					<li>
						<strong>{t("Polissya")}</strong> -{" "}
						{t(
							"Pysanky of Polissia are characterized by their simplicity and minimalism. Mostly natural colors are used: green, yellow, and brown. The ornaments look like small floral motifs and symbols of fertility."
						)}
					</li>
					<li>
						<strong>{t("Prydniprovia")}</strong> -{" "}
						{t(
							"Complex geometric patterns and multicolored compositions are popular in this region. The technique involves multi-stage coloring and wax patterns."
						)}
					</li>
					<li>
						<strong>{t("Slobozhanshchina")}</strong> -{" "}
						{t(
							"Pysanka from this region are characterized by intricate ornaments and rich colors. Traditional symbols of fertility, sun and water are used."
						)}
					</li>
				</ul>
			</section>
		</>
	);
}
