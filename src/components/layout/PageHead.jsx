import Helmet from "react-helmet";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Helmet>
        <title>
          {headTitle ? headTitle : "Open9 | NFT Marketplace Nextjs Template"}
        </title>
      </Helmet>
    </>
  );
};

export default PageHead;
