import CategorySlider from "./component/CategorySlider";
import Deal from "./component/Deal";
import DiscountBanner from "./component/DiscountBanner";
import HeroSlider from "./component/HeroSlider";
import NewArrival from "./component/NewArrival";
import ProductStat from "./component/ProductStat";
import PromotionalProducts from "./component/PromotionalProducts";
import Services from "./component/Services";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategorySlider />
      <Deal />
      <DiscountBanner />
      <NewArrival />
      <PromotionalProducts />
      <Services />
      <ProductStat />
    </>
  );
}
