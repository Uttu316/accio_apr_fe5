import Footer from "../footer";
import Header from "../header";

const PageWrapper = ({ title, className, children }) => {
  return (
    <div className={className}>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};
export default PageWrapper;
