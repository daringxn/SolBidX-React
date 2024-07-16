import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import Square from "@/components/sections/Square";

export default function ({ item }) {
  return (
    <div className="tf-card-box style-1">
      <div className="card-media">
        <Link href="#">
          <Square>
            <img
              src={
                "/" + item.image || "/assets/images/box-item/card-item-09.jpg"
              }
              alt=""
            />
          </Square>
        </Link>
        <div className="button-place-bid">
          <a href="#" className="tf-button">
            <span>Place Bid</span>
          </a>
        </div>
      </div>
      <h5 className="name">
        <Link href="#">{item.name}</Link>
      </h5>
      <div className="author flex items-center">
        <div className="avatar">
          <img
            src={
              "/" + item.collector?.avatar ||
              "/assets/images/avatar/avatar-box-01.jpg"
            }
            alt="Image"
          />
        </div>
        <div className="info">
          <span>Owned by:</span>
          <h6>
            <Link href="/author-2">
              {item.collector?.name || "Cody Fisher"}
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}
