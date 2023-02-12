import styles from "./Loader.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader} />
    </div>
  );
};
export default LoadingSpinner;
