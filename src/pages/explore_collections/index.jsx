import { useCallback, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import InfiniteScroll from "react-infinite-scroller";

// components
import BidModal from "@/components/elements/BidModal";
import Layout from "@/components/layout/Layout";
import CollectionCard2 from "@/components/sections/CollectionCard2";
import SearchInput1 from "@/components/sections/SearchInput1/index";

// stores
import useCollectionsStore from "@/stores/collectionsStore";

// helpers
import { delay } from "@/helpers/utils";

// styles
import styles from "./style.module.css";

export default function () {
  const [isBidModal, setBidModal] = useState(false);
  const [collections, setCollections] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [loadingCollections, setLoadingCollections] = useState([]);
  const pageIndex = useRef(0);
  const loading = useRef(false);

  const navigate = useNavigate();

  const { getCollections } = useCollectionsStore();

  const handleBidModal = () => setBidModal(!isBidModal);

  const getCollectionsData = useCallback(async () => {
    const pageSize = 5;
    setLoadingCollections(Array(20).fill(null));
    await delay(100);
    const { status, data, error } = await getCollections({
      pageIndex: pageIndex.current,
      pageSize,
      searchValue,
    });
    if (!status) {
      alert(error);
      return;
    }
    setLoadingCollections([]);
    setCollections((collections) => [...collections, ...data]);
    if (data.length < pageSize) {
      setHasMore(false);
    }
    loading.current = false;
  }, [searchValue]);

  const onLoadMore = useCallback(() => {
    if (loading.current) return;
    loading.current = true;
    pageIndex.current += 1;
    getCollectionsData();
  }, [getCollectionsData]);

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <InfiniteScroll loadMore={onLoadMore} hasMore={hasMore}>
        <div className="tf-section-2 discover-item loadmore-12-item p-2 p-md-5">
          <div className="row m-0 mb-4">
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
          <div className="row m-0">
            {collections.map((collection) => (
              <div
                key={"collection_" + collection.id}
                data-wow-delay="0s"
                className="wow fadeInUp fl-item col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6 pl-1 pr-2"
              >
                <CollectionCard2
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
            {loadingCollections.map((_, index) => (
              <div
                key={"loading_collection_" + index}
                data-wow-delay="0s"
                className="wow fadeInUp fl-item col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6 pl-1 pr-2"
              >
                <CollectionCard2
                  className={styles["collection-card"]}
                  loading={true}
                />
              </div>
            ))}
            {collections.length === 0 && loadingCollections.length === 0 && (
              <div className="col-12">
                <p className="text-center">No collections</p>
              </div>
            )}
          </div>
        </div>
        <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
      </InfiniteScroll>
    </Layout>
  );
}
