import { ClickAwayListener } from "@mui/base";
import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageMenu.module.scss";
import Arrow from "../../assets/ArrowIcon";

const LanguageMenu: FunctionComponent = () => {
  const [expandDropDownMenu, setExpandDropDownMenu] = useState<boolean>(false);
  const [expandHamburgerMenu, setexpandHamburgerMenu] =
    useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const handelChangeLanguage = (language: string) => {
    switch (language) {
      case "ar":
        i18n.dir("ar");
        i18n.changeLanguage("ar");
        break;
      default:
        i18n.dir("en-US");
        i18n.changeLanguage("en");
        break;
    }
    setExpandDropDownMenu(false);
  };
  const handelClickAwayListener = () => setExpandDropDownMenu(false);
  const handelClickHamburgerMenu = () => {
    setexpandHamburgerMenu(!expandHamburgerMenu);
  };
  const handelChangeHamburgerMenuLang = () => {
    handelChangeLanguage(i18n.language === "ar" ? "en" : "ar");
    setexpandHamburgerMenu(false);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handelClickAwayListener}>
        <div className={styles.dropDownMenu}>
          <span
            onClick={() => setExpandDropDownMenu(!expandDropDownMenu)}
            className={styles.currentLanguage}
            is-expanded={expandDropDownMenu.toString()}
          >
            <p>{t(i18n.language)}</p>
            <Arrow width={10} height={6} direction={i18n.dir()} />
          </span>

          <ul
            className={styles.languageList}
            is-expanded={expandDropDownMenu.toString()}
            dir={i18n.dir()}
          >
            <li onClick={() => handelChangeLanguage("en")}>{t("english")}</li>
            <li onClick={() => handelChangeLanguage("ar")}>{t("arabic")}</li>
          </ul>
        </div>
      </ClickAwayListener>
      <div
        className={styles.hamburgerMenu}
        onClick={handelClickHamburgerMenu}
        is-expanded={expandHamburgerMenu.toString()}
      >
        <div />
        <div />
        <div />
      </div>
      <div
        className={styles.hamburgerMenuPortal}
        is-expanded={expandHamburgerMenu.toString()}
        dir={i18n.dir()}
      >
        <p onClick={handelChangeHamburgerMenuLang}>
          {i18n.language === "ar" ? t("enLang") : t("arLang")}
        </p>
      </div>
    </>
  );
};
export default LanguageMenu;
