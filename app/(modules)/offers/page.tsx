import CustomizeBar from "@/app/component/CustomizeBar";
import ProductListing from "@/app/component/ProductListing";
import PromotionalProducts from "@/app/component/PromotionalProducts";

const page = () => {
  return (
    <>
      <PromotionalProducts />
      <CustomizeBar />
      <ProductListing />
    </>
  );
};

export default page;
