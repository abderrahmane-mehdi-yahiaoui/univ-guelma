import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Post from "../components/Post";
import { Helmet } from "react-helmet";
import websiteData from "../components/Helper";

export default function Home() {
  return (
    <div className="home__container">
      <Helmet>
        <title>{websiteData.websiteName}</title>
      </Helmet>
      <div className="card__zone">
        <h4>الإعلانات</h4>
        <Post />
      </div>
    </div>
  );
}
