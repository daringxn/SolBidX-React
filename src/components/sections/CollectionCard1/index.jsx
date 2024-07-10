import { Link } from "react-router-dom";
import classNames from "classnames";

// styles
import styles from "./style.module.css";

export default function CollectionItem1({ collection, selected }) {
  return (
    <div className={classNames(["tf-card-collection", { selected }])}>
      <div className={styles.image}>
        <img src={"/" + collection.image} alt="" width="100%" />
      </div>
      <div className="card-bottom">
        <div className="author">
          <h5>
            <a href="#">{collection.name}</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
