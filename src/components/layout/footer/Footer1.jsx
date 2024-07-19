import { Link } from "react-router-dom";

export default function Footer1() {
  return (
    <>
      <footer id="footer">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-content flex flex-grow">
                <div className="widget-logo flex-grow">
                  <div className="logo-footer" id="logo-footer">
                    <Link to="/">
                      <img
                        id="logo_footer"
                        src="/assets/images/logo/logo.png"
                        data-retina="assets/images/logo/logo@2x.png"
                      />
                    </Link>
                  </div>
                </div>
                <div className="widget widget-menu style-1">
                  <h5 className="title-widget">Marketplace</h5>
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">All NFTs</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Virtual worlds</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Domain names</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Photography</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Digital art</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Music</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-menu style-2">
                  <h5 className="title-widget">Resource</h5>
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">Help center</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Platform status</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Partners</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Discount community</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Live auctions</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Discover</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-menu style-3">
                  <h5 className="title-widget">Account</h5>
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">Authors</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">My Collection</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Author Profile</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Go to dashboard</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Collection</Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0)">Create Collection</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget-last">
                  <div className="widget-menu style-4">
                    <h5 className="title-widget">Company</h5>
                    <ul>
                      <li>
                        <Link href="javascript:void(0)">Help center</Link>
                      </li>
                      <li>
                        <Link href="javascript:void(0)">Platform status</Link>
                      </li>
                    </ul>
                  </div>
                  <h5 className="title-widget mt-30">Join the community</h5>
                  <div className="widget-social">
                    <ul className="flex">
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-facebook"
                        />
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-twitter"
                        />
                      </li>
                      <li>
                        <Link href="javascript:void(0)" className="icon-vt" />
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-tiktok"
                        />
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-youtube"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} OpeN9 - Made By Themesflat</p>
            <ul className="flex">
              <li>
                <Link href="javascript:void(0)">Privacy Policy</Link>
              </li>
              <li>
                <Link href="javascript:void(0)">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
