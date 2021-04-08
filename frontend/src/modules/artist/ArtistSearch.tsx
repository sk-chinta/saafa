import React, { Fragment, useState } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Artists } from "./Artists";
import { searchByName } from "../../services/artists";

export function ArtistSearch() {  

  const [searchResults, updateSearchResults] = useState([]);

  const searchArtists = (el: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = el.target.value
    if(value){
      searchByName(value).then((artists) => updateSearchResults(artists));
    } else {
      updateSearchResults([])
    }
  };

  return (
    <Fragment>     
      <Input placeholder="search artists" onChange={searchArtists} size="large" />
      <Artists artists={searchResults} />
    </Fragment>
  );
}
