import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { arabic } from "./translation/arabic";
import { english } from "./translation/english";

const resources = {
  en: {
    translation: {
      ...english,
    },
  },
  ar: {
    translation: {
      ...arabic,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
