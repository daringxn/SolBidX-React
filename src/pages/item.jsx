import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";

// components
import Layout from "@/components/layout/Layout";

// stores
import useUserStore from "@/stores/userStore";
import useItemsStore from "@/stores/itemsStore";
import useOffersStore from "@/stores/offersStore";

export default function () {
  const [item, setItem] = useState({});

  const user = useUserStore();
  const { createOrUpdateItem, getItem } = useItemsStore();
  const { createOffer } = useOffersStore();

  const params = useParams();

  const getItemData = useCallback(async (id) => {
    const response = await getItem(id);
    if (!response.status) {
      alert(response.error);
      return;
    }
    setItem(response.data);
  }, []);

  const sendSellTransaction = useCallback(() => {}, []);

  const sendMakeOfferTransaction = useCallback(() => {}, []);

  const sendBuyNowTransaction = useCallback(() => {}, []);

  const sendAcceptTransaction = useCallback(() => {}, []);

  const onSellButtonClicked = useCallback(async () => {
    sendSellTransaction();
    const response = await createOrUpdateItem({ id: item.id, status: "list" });
    if (!response.status) {
      alert(response.error);
      return;
    }
    getItemData(item.id);
  }, [sendSellTransaction, item, getItemData]);

  const onMakeOfferButtonClicked = useCallback(async () => {
    sendMakeOfferTransaction();
    const response = await createOffer({
      item_id: item.id,
      from_wallet_address: user.wallet_address,
      price: item.price,
    });
    if (!response.status) {
      alert(response.error);
      return;
    }
    getItemData(item.id);
  }, [sendMakeOfferTransaction, item, user]);

  const onAcceptButtonClicked = useCallback(
    async (offer) => {
      sendAcceptTransaction();
      const response = await createOrUpdateItem({
        id: item.id,
        collector_id: offer.user_id,
        status: "sale",
      });
      if (!response.status) {
        alert(response.error);
        return;
      }
      getItemData(item.id);
    },
    [sendMakeOfferTransaction, item, user]
  );

  const onBuyNowButtonClicked = useCallback(async () => {
    sendBuyNowTransaction();
    const response = await createOrUpdateItem({
      id: item.id,
      buyer_wallet_address: user.wallet_address,
      status: "sale",
    });
    if (!response.status) {
      alert(response.error);
      return;
    }
    getItemData(item.id);
  }, [sendBuyNowTransaction, item]);

  useEffect(() => {
    getItemData(params.id);
  }, [getItemData, params]);

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
        <div>
          <div className="tf-section-2 product-detail">
            <div className="themesflat-container">
              <div className="row">
                <div data-wow-delay="0s" className="wow fadeInLeft col-md-6">
                  <div className="tf-card-box style-5 mb-0">
                    <div className="card-media mb-0">
                      <Link href="#">
                        <img src={"/" + item.image} alt="" />
                      </Link>
                    </div>
                    <div className="featured-countdown"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    data-wow-delay="0s"
                    className="wow fadeInRight infor-product"
                  >
                    <h2>{item.name}</h2>
                    <div className="author flex items-center mb-30">
                      <div className="avatar">
                        <img
                          src={
                            item.collector?.avatar ||
                            "/assets/images/avatar/avatar-box-05.jpg"
                          }
                          alt="Image"
                        />
                      </div>
                      <div className="info">
                        <span>Owned by:</span>
                        <h6>
                          <Link href="/author01">
                            {item.collector?.name || "Unknown"}
                          </Link>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0s"
                    className="wow fadeInRight product-item time-sales"
                  >
                    <div className="content">
                      <div className="text">Current price</div>
                      <div className="flex justify-between">
                        <p>{item.price} SOL</p>
                        {user.wallet_address && (
                          <>
                            {user.wallet_address ===
                              item.collector?.wallet_address &&
                              item.status !== "list" && (
                                <Link
                                  href="#"
                                  className="tf-button style-1 h50 w216"
                                  onClick={onSellButtonClicked}
                                >
                                  Sell
                                </Link>
                              )}
                            {user.wallet_address !==
                              item.collector?.wallet_address &&
                              item.status === "list" && (
                                <>
                                  <Link
                                    href="#"
                                    className="tf-button style-1 h50"
                                    onClick={onMakeOfferButtonClicked}
                                  >
                                    Make a offer
                                  </Link>
                                  <Link
                                    href="#"
                                    className="tf-button style-1 h50"
                                    onClick={onBuyNowButtonClicked}
                                  >
                                    Buy Now
                                  </Link>
                                </>
                              )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0s"
                    className="wow fadeInRight product-item description"
                  >
                    <h6>
                      <i className="icon-description" />
                      Description
                    </h6>
                    <i className="icon-keyboard_arrow_down" />
                    <div className="content">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  {user.wallet_address && item.status === "list" && (
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp product-item offers"
                    >
                      <h6>
                        <i className="icon-description" />
                        Offers
                      </h6>
                      <i className="icon-keyboard_arrow_down" />
                      <div className="content">
                        <div className="table-heading">
                          <div className="column">Price</div>
                          <div className="column">From</div>
                          <div className="column">Date</div>
                          {user.wallet_address ===
                            item.collector?.wallet_address && (
                            <div className="column"></div>
                          )}
                        </div>
                        {(item.offers || []).map((offer) => (
                          <div className="table-item">
                            <div className="column">
                              <h6 className="price gem">{offer.price} SOL</h6>
                            </div>
                            <div className="column">
                              <span className="tf-color">
                                {offer.user?.name || "Unknown"}
                              </span>
                            </div>
                            <div className="column">
                              {moment(offer.createdAt).format("MM/DD HH:mm")}
                            </div>
                            {user.wallet_address ===
                              item.collector?.wallet_address && (
                              <div className="column">
                                <a
                                  href="#"
                                  className="tf-button style-1 w90"
                                  onClick={() => onAcceptButtonClicked(offer)}
                                >
                                  Accept
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  data-wow-delay="0s"
                  className="wow fadeInUp col-12 mt-20px"
                >
                  <div className="product-item details">
                    <h6>
                      <i className="icon-description" />
                      Details
                    </h6>
                    <i className="icon-keyboard_arrow_down" />
                    <div className="content">
                      <div className="details-item">
                        <span>Contract Address</span>
                        <span className="tf-color">
                          {item.contract_address}
                        </span>
                      </div>
                      <div className="details-item">
                        <span>Token ID</span>
                        <span className="tf-color">{item.id}</span>
                      </div>
                      <div className="details-item">
                        <span>Last Updated</span>
                        <span>
                          {moment(item.updatedAt).format("MM/DD HH:mm")}
                        </span>
                      </div>
                      <div className="details-item mb-0">
                        <span>Creator Earnings</span>
                        <span>{item.royatity}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                  <div className="product-item item-activity mb-0">
                    <h6>
                      <i className="icon-two-arrow rotateZ90" />
                      Item activity
                    </h6>
                    <i className="icon-keyboard_arrow_down" />
                    <div className="content">
                      <div className="table-heading">
                        <div className="column">Event</div>
                        <div className="column">Price</div>
                        <div className="column">Form</div>
                        <div className="column">To</div>
                        <div className="column">Date</div>
                      </div>
                      {(item.activities || []).map((activity) => (
                        <div className="table-item">
                          <div className="column flex items-center">
                            {
                              { mint: "Mint", list: "List", sale: "Sale" }[
                                activity.type
                              ]
                            }
                          </div>
                          <div className="column">{activity.price} SOL</div>
                          <div className="column">
                            <span className="tf-color">
                              {activity.from_user.name || "Unknown"}
                            </span>
                          </div>
                          <div className="column">
                            <span className="tf-color">
                              {activity.type !== "mint" &&
                              activity.type !== "list"
                                ? activity.to_user.name || "Unknown"
                                : "-/-"}
                            </span>
                          </div>
                          <div className="column">
                            {moment(activity.createdAt).format("MM/DD HH:mm")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
