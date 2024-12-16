import Breadcum from "@/app/component/Breadcum";
import CategorySlider from "@/app/component/CategorySlider";
import CustomizeBar from "@/app/component/CustomizeBar";
import ProductListing from "@/app/component/ProductListing";

const page = () => {
  return (
    <div>
      <Breadcum />
      <CategorySlider />
      <CustomizeBar />
      <ProductListing />
      
    </div>
  );
};

export default page;
