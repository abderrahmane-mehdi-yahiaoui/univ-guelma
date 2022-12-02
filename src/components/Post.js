import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "./Helper";
import "../assets/css/post.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as utiles from "./utiles.js";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.useState = { currentLang: document.documentElement.lang };
  }
  render() {
    return (
      <div className="card__group">
        <div className="card__zone">
          <div className="card__group">
            {Posts.slice(0, 9).map((post, index) => (
              <div className="card" key={index}>
                <img
                  className="card__thumbnail"
                  src={post.image}
                  alt={post.title}
                />
                <div className="card__wrapper">
                  <p className="card__title">{post.title}</p>
                  <Link
                    className="read-more"
                    to={this.useState.currentLang + `/post/${index}`}
                  >
                    اقرأ المزيد
                    <span>
                      <FontAwesomeIcon
                        className="icon__arrowLeft"
                        icon={faArrowLeft}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
