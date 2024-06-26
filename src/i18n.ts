// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["en", "ua"],
		fallbackLng: "en",
		debug: true,
		backend: {
			loadPath: "/shop-vite-react-typescript/locales/{{lng}}/translation.json",
		},
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
