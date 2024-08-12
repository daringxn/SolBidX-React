import Helmet from "react-helmet";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Helmet>
        <title>{headTitle ? headTitle : "SOLBIDX | NFT Marketplace"}</title>
      </Helmet>
    </>
  );
};

export default PageHead;
