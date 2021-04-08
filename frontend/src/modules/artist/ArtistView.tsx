import React, { Fragment } from "react";
import { Card } from "antd";
import { IAlbum } from "./Artists.interface";

export function ArtistView(props: any) {
  const { artist } = props;

  return (
    <Fragment>
      <Card title={artist.name}>
        {artist.albums.map((album: IAlbum) => {
          return (
            <Card
              key={album.id}
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
