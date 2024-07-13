import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import Square from "@/components/sections/Square";

// styles
import styles from "./style.module.css";

export default function CollectionItem1({
  collection,
  style,
  selected,
  className,
}) {
  return (
    <div
      className={classNames([
        "tf-card-collection",
        { selected },
        className,
        styles["collection-card-1"],
      ])}
      style={style}
    >
      <div className={styles.image}>
        <Square>
          <img src={"/" + collection?.image} alt="" />
        </Square>
      </div>
      <div className="card-bottom">
        <div className="author">
          <h5>
            <a href="#">{collection?.name}</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
