import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import Square from "@/components/sections/Square";

// hooks
import useIsAuth from "@/hooks/useIsAuth";

// stores
import useAuthStore from "@/stores/authStore";

// helpers
import { simplifyWalletAddress } from "@/helpers/utils";

// styles
import styles from "./style.module.css";

export default function ({
  item,
  onImageClicked,
  onMakeOfferButtonClicked,
  onBuyNowButtonClicked,
}) {
  const isAuth = useIsAuth();

  const user = useAuthStore();

  return (
    <div
      className={classNames("tf-card-box", "style-1", styles["item-card-1"])}
    >
      <div className="card-media">
        <a href="#" onClick={onImageClicked}>
          <Square ratio={1}>
            <img
              src={
                "/" + item?.image || "/assets/images/box-item/card-item-09.jpg"
              }
              alt=""
            />
          </Square>
        </a>
        {item?.status === "list" && (
          <span className={styles["sale-mark"]}>Sale</span>
        )}
        {isAuth &&
          item?.status === "list" &&
          user.wallet_address !== item?.collector?.wallet_address && (
            <div className="button-place-bid">
              <a
                href="#"
                className="tf-button"
                onClick={onMakeOfferButtonClicked}
              >
                <span>Make Offer</span>
              </a>
              <a
                href="#"
                className="tf-button mt-2"
                onClick={onBuyNowButtonClicked}
              >
                <span>Buy Now</span>
              </a>
            </div>
          )}
      </div>
      <h6 className="name">
        <Link href="#">{item?.name}</Link>
      </h6>
      <div className="author flex items-center">
        {/* <div className="avatar">
          <img
            src={
              "/" + item?.collector?.avatar ||
              "/assets/images/avatar/avatar-box-01.jpg"
            }
            alt="Image"
          />
        </div> */}
        <div className="info d-flex">
          <span>Owned by</span>
          <h6 className="ml-2">
            <a href="#">
              {simplifyWalletAddress(item?.collector?.wallet_address)}
            </a>
          </h6>
        </div>
      </div>
      <div className="divider" />
      <div className="meta-info flex items-center justify-between">
        <span className="text-bid">Price</span>
        <h6 className="price gem">{item?.price} SOL</h6>
      </div>
    </div>
  );
}
