import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import Square from "@/components/sections/Square";

// styles
import styles from "./style.module.css";

export default function CollectionItem1({ collection, selected, className }) {
  return (
    <div
      className={classNames([
        "tf-card-collection",
        { selected },
        className,
        styles["collection-card-1"],
      ])}
    >
      <div className={styles.image}>
        <Square>
          <img src={"/" + collection?.image} alt="" />
        </Square>
      </div>
      <div className={classNames(["card-bottom", styles.bottom])}>
        <div className="author">
          <h5 className="mb-3">
            <a href="#">{collection?.name}</a>
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <div className="author flex items-center">
            <div className="avatar">
              <img
                src={
                  "/" + collection?.user.avatar ||
                  "assets/images/avatar/avatar-box-02.jpg"
                }
                alt=""
              />
            </div>
            <div className="info">
              <span>Created by:</span>
              <h6>
                <Link href="author-2.html">
                  {collection?.user.name || "Marvin McKinney"}
                </Link>
              </h6>
            </div>
          </div>
          <div className="bottom-right">
            <div className={classNames(["shop", styles.items])}>
              <div className="icon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>{collection?.items.length} Item</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
