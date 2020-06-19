import Header from "./Header";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}

      <p>Footer</p>
    </React.Fragment>
  );
};

export default Layout;
