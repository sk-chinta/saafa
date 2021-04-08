import React from "react";
import { ArtistSearch } from "../artist/ArtistSearch";
import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#fff" }}>
      <Header style={{ backgroundColor: "#fcc700" }}>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "50px 100px" }}>
        <ArtistSearch />
      </Content>
    </Layout>
  );
}

export default App;
