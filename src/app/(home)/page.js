import OurServices from "@/components/ourServices/OurServices";
import Slider from "@/components/slider/Slider";
import Clients from "./clients/Clients";
import Offers from "./offers/Offers";
import FormSection from "@/components/formSection/FormSection";

export const metadata = {
  title: "Home | Top It",
  description: "Your best Online Top It",
};

const HomePage = () => {
  return (
    <div>
      <Slider />
      <OurServices />
      <Clients />
      <Offers />
      <FormSection />
    </div>
  );
};
export default HomePage;
