import PropTypes from "prop-types";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const Layout = ({ bannerText, bannerTitle, children }) => {
  return (
    <div>
      <Header bannerText={bannerText} bannerTitle={bannerTitle}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

Layout.propTypes = {
  /**
   * text for the banner
   */
  bannerText: PropTypes.string,

  /**
   * title of the banner
   */
  bannerTitle: PropTypes.string,

  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
