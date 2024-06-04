import { useTranslation } from "react-i18next";
import video from "../video/video.mp4";
import instagram from "/images/instagram.png";

export function Artists() {
	const { t } = useTranslation();

	return (
		<div>
			<section>
				<h3>{t("Our masters")}</h3>
				<p>
					{t(
						"Our mission is to preserve and pass on to the next generations the richness of the Ukrainian art of Pysanka making. Each Pysanka in our store is the result of the inspired work and soul of our craftsmen. Thank you for choosing Ukrainian traditions and supporting our national values."
					)}
				</p>
			</section>

			<div>
				<h4>
					{t("Mariana Svirzhevska")}{" "}
					<span>
						<a
							href="https://www.instagram.com/pysanky_svit/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={instagram} alt="Instagram" width={20} height={20} />
						</a>
					</span>
				</h4>

				<p>
					{t(
						"Mariana Svirzhevska is a talented craftswoman known for her unique Easter eggs. Her works are characterized by elegance, harmonious color combinations, and authenticity."
					)}
				</p>
				<div>
					<h4>{t("Video of Mariana`s work")}</h4>
					<iframe
						max-width="360"
						width="auto"
						height="315"
						src={video}
					></iframe>
				</div>
				<div>
					<br />
					<p>
						{t(
							"All information on this site is for portfolio purposes only. No products are sold."
						)}
					</p>
				</div>
			</div>
		</div>
	);
}
