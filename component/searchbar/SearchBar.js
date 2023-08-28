import React, { useState, useEffect } from "react";
import { SearchBarStyled } from "../../styles/searchbar/SearchBarStyled";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <SearchBarStyled className={scrollPosition > 50 ? "scrolled" : ""}>
      {scrollPosition <= 50 ? (
        <SearchInput />
      ) : (
        <SearchButton onClick={scrollToTop} />
      )}
    </SearchBarStyled>
  );
};
export default SearchBar;
