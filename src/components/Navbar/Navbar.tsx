import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/Logo";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import styles from "./Navbar.module.scss";

const Navbar: FunctionComponent = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.navbar}>
      <Logo width={120} height={36} direction={i18n.dir()} />
      <LanguageMenu />
    </div>
  );
};
export default Navbar;
