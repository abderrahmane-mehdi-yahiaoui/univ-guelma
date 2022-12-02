import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Posts from "../components/Helper";
import websiteData from "../components/Helper";
import "../assets/css/singlePost.css";

const SinglePost = ({ match, location }) => {
  const {
    params: { PostId },
  } = match;

  return (
    <div className="singlePost__container">
      <Helmet>
        <title>{Posts[PostId].title + websiteData.websiteName} </title>
      </Helmet>
      <h2 className="post__title">{Posts[PostId].title}</h2>
      <div className="post__thumbnail">
        <img
          className="post__thumbnail"
          src={Posts[PostId].image}
          alt={Posts[PostId].title}
        />
      </div>
      <div className="singlePost__bottom">
        <h5 className="post__tag">
          تاڨ:
          <Link className="post__link" to="/" style={{ marginRight: ".5em" }}>
            {" "}
            {Posts[PostId].tag}{" "}
          </Link>
        </h5>
        <h5 className="post__time"> {Posts[PostId].time}</h5>
        <p className="post__content">{Posts[PostId].content}</p>
      </div>
    </div>
  );
};
export default SinglePost;
