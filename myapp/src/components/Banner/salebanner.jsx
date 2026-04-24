import { useEffect } from "react";

const SaleBanner = () => {
  useEffect(() => {
    //setup function
    console.log("Sale banner mounted");

    return () => {
      //cleanup function
      console.log("Unmounting sale banner");
    };
  }, []);
  return (
    <div>
      <h2>Sale is Live</h2>
    </div>
  );
};

export default SaleBanner;
