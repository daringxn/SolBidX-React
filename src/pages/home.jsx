// components
import Layout from "@/components/layout/Layout";
import FlatTitle1 from "@/components/sections/FlatTitle1";
import CreateSell1 from "@/components/sections/CreateSell1";
import Seller3 from "@/components/sections/Seller3";
import Seller6 from "@/components/sections/Seller6";
import Action4 from "@/components/sections/Action4";

export default function () {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
        <FlatTitle1 />
        <CreateSell1 />
        <Seller3 />
        <Seller6 />
        <Action4 />
      </Layout>
    </>
  );
}
