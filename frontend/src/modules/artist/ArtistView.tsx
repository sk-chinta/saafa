import React, { Fragment, useState } from "react";
import { List, Button, Card } from "antd";
import { IAlbum, IArtist } from "./Artists.interface";
import { getArtistById } from "../../services/artists";

export function ArtistView(props: any) {
  const { artist } = props;

  return (
    <Fragment>
      <Card title={artist.name}>
        {artist.albums.map((album: IAlbum) => {
          return (
            <Card
              type="inner"
              title={`Album id: ${album.id}`}
              style={{ marginBottom: "20px" }}
            >
              {album.title}
            </Card>
          );
        })}
      </Card>
    </Fragment>
  );
}
