import { useCallback, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import InfiniteScroll from "react-infinite-scroller";

// components
import BidModal from "@/components/elements/BidModal";
import Layout from "@/components/layout/Layout";
import CollectionCard1 from "@/components/sections/CollectionCard1";
import SearchInput1 from "@/components/sections/SearchInput1/index";

// stores
import useCollectionsStore from "@/stores/collectionsStore";

// styles
import styles from "./style.module.css";

export default function () {
  const [isBidModal, setBidModal] = useState(false);
  const [collections, setCollections] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const pageIndex = useRef(0);

  const navigate = useNavigate();

  const { getCollections } = useCollectionsStore();

  const handleBidModal = () => setBidModal(!isBidModal);

  const getCollectionsData = useCallback(async () => {
    const pageSize = 20;
    const response = await getCollections({
      pageIndex: pageIndex.current,
      pageSize,
      searchValue,
    });
    if (!response.status) {
      alert(response.error);
      return;
    }
    setCollections((collections) => [...collections, ...response.data]);
    if (response.data.length < pageSize) {
      setHasMore(false);
    }
  }, [searchValue]);

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <InfiniteScroll
        loadMore={() => {
          pageIndex.current += 1;
          getCollectionsData();
        }}
        hasMore={hasMore}
        loader={
          <div className="d-flex justify-content-center">
            <img
              src="/assets/images/loading.gif"
              alt="loading..."
              className={styles.loading}
            />
          </div>
        }
      >
        <div className="flat-title-page">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-12">
                <h1 className="heading text-center">Collections</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-section-2 discover-item loadmore-12-item">
          <div className="themesflat-container w1490">
            <div className="row">
              <div className="col-md-12 pb-30">
                <div className="tf-soft flex items-center justify-end">
                  <SearchInput1
                    value={searchValue}
                    onChange={setSearchValue}
                    className={styles["search-input"]}
                    placeholder={"Search By Collection Name"}
                    onSearch={() => {
                      pageIndex.current = 0;
                      setCollections([]);
                      setHasMore(true);
                    }}
                  />
                </div>
              </div>
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  data-wow-delay="0s"
                  className="wow fadeInUp fl-item col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6"
                >
                  <CollectionCard1
                    className={styles["collection-card"]}
                    collection={collection}
                    onImageClicked={() => {
                      navigate(
                        "/explore/collections/" + collection.id + "/items"
                      );
                    }}
                  />
                </div>
              ))}
              {collections.length === 0 && (
                <div className="col-12">
                  <p className="text-center">No collections</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
      </InfiniteScroll>
    </Layout>
  );
}
