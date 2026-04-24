import { useState } from "react";
import SaleBanner from "./salebanner";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <div>
      <button onClick={() => setShowBanner(!showBanner)}>
        Toggle the Sale Banner
      </button>
      {showBanner && <SaleBanner />}
    </div>
  );
};
export default Banner;
