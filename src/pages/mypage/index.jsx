import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import classNames from "classnames";

// components
import Layout from "@/components/layout/Layout";
import ItemCard2 from "@/components/sections/ItemCard2";
import CollectionCard1 from "@/components/sections/CollectionCard1";

// stores
import useAuthStore from "@/stores/authStore";

// styles
import styles from "./style.module.css";

export default function () {
  const [activeTab, setActiveTab] = useState("offers");
  const [items, setItems] = useState([]);
  const [collections, setCollections] = useState([]);
  const [offers, setOffers] = useState([]);

  const { user, getItems, getCollections, getOffers } = useAuthStore(
    (state) => ({
      user: {
        id: state.id,
      },
      getItems: state.getItems,
      getCollections: state.getCollections,
      getOffers: state.getOffers,
    })
  );

  useEffect(() => {
    (async () => {
      const { status, data, error } = await getItems();
      if (!status) {
        alert(error);
        return;
      }
      setItems(data);
    })();
    (async () => {
      const { status, data, error } = await getCollections();
      if (!status) {
        alert(error);
        return;
      }
      setCollections(data);
    })();
    (async () => {
      const { status, data, error } = await getOffers();
      if (!status) {
        alert(error);
        return;
      }
      setOffers(data);
    })();
  }, [getItems, getCollections, getOffers]);

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <div className="pl-2 pr-2 pl-lg-5 pr-lg-5">
        <ul className="widget-menu-tab mt-5">
          <li
            className={
              activeTab === "items" ? "item-title active" : "item-title"
            }
            onClick={() => setActiveTab("items")}
          >
            <span className="inner">Items</span>
          </li>
          <li
            className={
              activeTab === "collections" ? "item-title active" : "item-title"
            }
            onClick={() => setActiveTab("collections")}
          >
            <span className="inner">Collections</span>
          </li>
          <li
            className={
              activeTab === "offers" ? "item-title active" : "item-title"
            }
            onClick={() => setActiveTab("offers")}
          >
            <span className="inner">Offers</span>
          </li>
        </ul>
        {activeTab === "items" && (
          <div className="row">
            {items.map((item) => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={item.id}>
                <ItemCard2 item={item} />
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-12">
                <h5 className="text-center mt-5 mb-5">No Items</h5>
              </div>
            )}
          </div>
        )}
        {activeTab === "collections" && (
          <div className="row">
            {collections.map((collection) => (
              <div
                className="col-6 col-md-4 col-lg-3 col-xl-2"
                key={collection.id}
              >
                <CollectionCard1 collection={collection} />
              </div>
            ))}
            {collections.length === 0 && (
              <div className="col-12">
                <h5 className="text-center mt-5 mb-5">No Collections</h5>
              </div>
            )}
          </div>
        )}
        {activeTab === "offers" && (
          <div className={classNames("row", styles.offers)}>
            <div className="product-item offers w-100">
              <div className="content">
                <div className="table-heading">
                  <div className="column">No</div>
                  <div className="column">Item</div>
                  <div className="column">Price</div>
                  <div className="column">Send / Receive</div>
                  <div className="column">User</div>
                  <div className="column">Date</div>
                </div>
                {offers.map((offer, i) => (
                  <div className="table-item" key={offer.id}>
                    <div className="column">{i + 1}</div>
                    <div className="column">
                      <Link to={"/item/" + offer.item?.id}>
                        <img
                          src={"/" + offer.item?.image}
                          width="50px"
                          height="50px"
                          style={{
                            borderRadius: 50,
                          }}
                        />
                      </Link>
                    </div>
                    <div className="column">
                      <h6 className="price gem">{offer.price} SOL</h6>
                    </div>
                    <div className="column">
                      {offer.user_id === user.id ? "Send" : "Receive"}
                    </div>
                    <div className="column">
                      <span className="tf-color">
                        {offer.user?.name || "Unknown"}
                      </span>
                    </div>
                    <div className="column">
                      {moment(offer.createdAt).format("MM/DD HH:mm")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
