import styles from "./Page.module.css";

const Page = (props) => {
  return <div className={styles.center}>{props.children}</div>;
};

export default Page;
