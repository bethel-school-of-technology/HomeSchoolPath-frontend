import Header from "./Header";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
    <div className="bg">
      <Header />
      {children}
      </div> 
      <div className="pt-60px">
      <Footer />
      </div>
      
    </React.Fragment>
  );
};

export default Layout;
