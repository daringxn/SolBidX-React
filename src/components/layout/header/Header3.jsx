import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

// components
import MobileMenu from "../MobileMenu";

// stores
import useAuthStore from "@/stores/authStore";

// helpers
import { simplifyWalletAddress } from "@/helpers/utils";

export default function ({ scroll, isMobileMenu, handleMobileMenu }) {
  const location = useLocation();

  const { user, signin, updateInfo } = useAuthStore((state) => ({
    user: { wallet_address: state.wallet_address },
    signin: state.signin,
    updateInfo: state.updateInfo,
  }));

  const connectWallect = useCallback(() => {
    return {
      wallet_name: "Phantom",
      wallet_address: "GkpXEwtTuwgTdBWRDrwu2xNb3jbXWXhoMs5CQzKLrDZs",
    };
  }, []);

  const onWallectConnectButtonClicked = useCallback(async () => {
    const { wallet_address: walletAddress } = connectWallect();
    const { status, data } = await signin(walletAddress);
    if (status) {
      updateInfo(data);
    }
  }, [signin, updateInfo]);

  return (
    <>
      <header
        id="header_main"
        className={`header_1 header-fixed header-full ${
          scroll ? "is-fixed is-small" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo">
                    <div id="site-logo-inner">
                      <Link to="/home" rel="home" className="main-logo">
                        <img
                          id="logo_header"
                          src="/assets/images/logo/logo.png"
                          data-retina="assets/images/logo/logo@2x.png"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* logo */}
                  <div className="mobile-button" onClick={handleMobileMenu}>
                    <span />
                  </div>
                  {/* /.mobile-button */}
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li
                        className={classNames([
                          "menu-item",
                          {
                            "current-menu-item":
                              location.pathname === "/explore/collections",
                          },
                        ])}
                      >
                        <Link to="/explore/collections">Collections</Link>
                      </li>
                    </ul>
                  </nav>
                  {/* /#main-nav */}
                  <div className="flat-wallet flex">
                    <div className="widget-search">
                      <form
                        action="#"
                        method="get"
                        role="search"
                        className="search-form relative"
                      >
                        <input
                          type="search"
                          id="search"
                          className="search-field"
                          placeholder="Search By Keywork..."
                          name="s"
                          title="Search for"
                          required
                        />
                        <button
                          className="search search-submit"
                          type="submit"
                          title="Search"
                        >
                          <i className="icon-search" />
                        </button>
                      </form>
                    </div>
                    <div id="wallet-header">
                      <a
                        href="#"
                        id="connectbtn"
                        className="tf-button style-1"
                        onClick={
                          !user.wallet_address
                            ? onWallectConnectButtonClicked
                            : undefined
                        }
                      >
                        {user.wallet_address && (
                          <span>
                            {simplifyWalletAddress(user.wallet_address)}
                          </span>
                        )}
                        {!user.wallet_address && (
                          <>
                            <span>Wallet connect</span>
                            <i className="icon-wa" />
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-nav-wrap ${isMobileMenu ? "active" : ""}`}>
          <div className="overlay-mobile-nav" onClick={handleMobileMenu} />
          <div className="inner-mobile-nav">
            <Link to="/" rel="home" className="main-logo">
              <img
                id="mobile-logo_header"
                src="assets/images/logo/logo.png"
                data-retina="assets/images/logo/logo-dark@2x.png"
              />
            </Link>
            <div className="mobile-nav-close" onClick={handleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="white"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 122.878 122.88"
                enableBackground="new 0 0 122.878 122.88"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                </g>
              </svg>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
