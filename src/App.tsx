import styles from "./App.module.scss";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const { t, i18n } = useTranslation();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app} data-testid="App" dir={i18n.dir()}>
        <Navbar />
        <div className={styles.appBody}>
          <div></div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
