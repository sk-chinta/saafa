import React, { Fragment, useState } from "react";
import { List, Button } from 'antd';
import { IArtist } from "./Artists.interface";
import { getArtistById } from "../../services/artists";
import { ArtistView } from "./ArtistView";

export function Artists(props: any) {
  const {artists} = props  
  const [artist, setArtist] = useState({});

  const getArtist = (artist: IArtist) => {
    getArtistById(artist.id).then((artist) => {
      setArtist(artist)
    })
  }
  
  return (
    <Fragment>      
      <List
      size="large"
      bordered
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={artists}
      renderItem={(artist: IArtist) => <List.Item><Button type="link" size="small" style={{color: "#333333"}} onClick={() => getArtist(artist)} >{artist.name}</Button></List.Item>}
      />
      {Object.entries(artist).length > 0 ? <div style={{paddingTop: "20px"}}> <ArtistView artist={artist} /> </div>: ""}
    </Fragment>
  );
}

