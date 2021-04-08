import React, { Fragment, useState } from "react";
import { Input } from "antd";
import { Artists } from "./Artists";
import { searchByName } from "../../services/artists";

export function ArtistSearch() {
  const [searchResults, updateSearchResults] = useState([]);
  const [isSearchEmpty, updateIsSearchEmpty] = useState(true);

  const searchArtists = (el: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = el.target.value;
    if (value) {
      searchByName(value).then((artists) => {
        updateSearchResults(artists);
        updateIsSearchEmpty(false);
      });
    } else {
      updateSearchResults([]);
      updateIsSearchEmpty(true);
    }
  };

  return (
    <Fragment>
      <Input
        placeholder="search artists"
        onChange={searchArtists}
        size="large"
      />
      <Artists artists={searchResults} isSearchEmpty={isSearchEmpty} />
    </Fragment>
  );
}
