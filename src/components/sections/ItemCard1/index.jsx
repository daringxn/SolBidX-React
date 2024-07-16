import React from "react";

// components
import Countdown from "@/components/elements/Countdown";

export default function () {
  const currentTime = new Date();
  const timerx = (
    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
  );
  return (
    <div className="tf-card-box">
      <div className="card-media">
        <Link href="#">
          <img src="/assets/images/box-item/banner-02.jpg" alt="" />
        </Link>
        <span className="wishlist-button icon-heart" />
        <div className="featured-countdown">{timerx}</div>
        <div className="button-place-bid">
          <a onClick={handleBidModal} href="#" className="tf-button">
            <span>Place Bid</span>
          </a>
        </div>
      </div>
      <div className="meta-info text-center">
        <h5 className="name">
          <Link href="#">Dayco serpentine belt</Link>
        </h5>
        <h6 className="price gem">
          <i className="icon-gem" />
          0,34
        </h6>
      </div>
    </div>
  );
}
