import { useEffect } from "react";
import FaqComponent from "../components/FaqComponent";

FaqComponent;

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="faq-page">
      <FaqComponent />
    </div>
  );
};

export default FaqPage;
