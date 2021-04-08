import PropTypes from "prop-types";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";

export const Header = ({ bannerText, bannerTitle }) => {
  return (
    <header>
      {bannerText && bannerTitle ? (
        <Banner siteTitle={bannerTitle} headline={bannerText} />
      ) : null}
    </header>
  );
};

Header.propTypes = {
  /**
   * text for the banner
   */
  bannerText: PropTypes.string,

  /**
   * title of the banner
   */
  bannerTitle: PropTypes.string,
};
