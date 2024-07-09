// components
import Layout from "@/components/layout/Layout";
import Create from "@/components/sections/Create";

// styles
import styles from "./style.module.css";

export default function () {
  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <div className={styles["market-page"]}>
        <div id="create" className="tabcontent container pt-5">
          <Create />
        </div>
      </div>
    </Layout>
  );
}
