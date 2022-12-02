import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/header.css";
import LangSwitcher from "./LangSwitcher";
import Navigation from "./Navigation";
import * as utiles from "./utiles.js";

export default class Header extends Component {
  switchLangFr = () => {
    document.documentElement.lang = "fr";
    document.body.lang = "fr";
  };
  switchLangAr = () => {
    document.documentElement.lang = "ar";
    document.body.lang = "ar";
  };
  switchLangEn = () => {
    document.documentElement.lang = "en";
    document.body.lang = "en";
  };
  constructor(props) {
    super(props);
    this.useState = { currentLang: document.documentElement.lang };
  }

  render() {
    return (
      <>
        <header className="header">
          <div id="top-menu" className="header__topMenu">
            <div className="header__topMenu__links">
              <ul>
                <li>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    to="http://dspace.univ-guelma.dz:8080/xmlui/"
                  >
                    Dspace
                  </Link>
                </li>
                <li className="have__drop">
                  <Link className="drop__btn" to="/">
                    الصفحات الشخصية
                  </Link>
                  <div className="dropdown__content">
                    <Link to="http://staff.univ-guelma.dz/ar">
                      دليل الأساتذة
                    </Link>
                    <Link to="http://doctorants.univ-guelma.dz/ar">
                      دليل طلاب الدكتوراه
                    </Link>
                  </div>
                </li>
                <li className="have__drop">
                  <Link className="drop__btn" to="/">
                    الإعلام
                  </Link>
                  <div className="dropdown__content">
                    <Link to="http://webtv.univ-guelma.dz/"> ويب Tv</Link>
                    <Link to="http://photos.univ-guelma.dz/">الصور</Link>
                  </div>
                </li>
              </ul>
            </div>
            <LangSwitcher />
            <div className="ask__hide">
              الرجاء النقر فوق علامة x لإخفاء الشريط.
            </div>
          </div>

          <div className="header__bottom">
            <div className="logo">
              <Link
                to={"/" + this.useState.currentLang}
                title="العودة إلى الصفحة الرئيسية"
                className="navbar__brand"
              >
                <img
                  src="https://univ-guelma.ga/ressources/images/logo-univ-guelma.png"
                  alt="جامعة 8 مايو 1945 قالمة"
                  aria-details="جامعة 8 مايو 1945 قالمة"
                  className="b__logo"
                />
              </Link>
            </div>
            <div
              onClick={utiles.menuToggle}
              id="menu-toggle"
              className="menu__toggle"
            >
              <FontAwesomeIcon className="icon" icon={faBars} />
            </div>
          </div>
        </header>

        <div id="mega-nav" className="menu__overlay">
          <div className="menu__container">
            <div
              onClick={utiles.menuClose}
              id="close-menu"
              className="close__menu"
            >
              <FontAwesomeIcon className="icon" icon={faTimes} />
            </div>
            <div className="logo" id="menu-logo">
              <Link
                to={"/" + this.useState.currentLang}
                title="العودة إلى الصفحة الرئيسية"
                className="navbar__brand"
              >
                <img
                  src="https://univ-guelma.ga/ressources/images/logo-univ-guelma.png"
                  alt="جامعة 8 مايو 1945 قالمة"
                  aria-details="جامعة 8 مايو 1945 قالمة"
                  className="b__logo"
                />
              </Link>
            </div>

            <Navigation />
          </div>
        </div>
      </>
    );
  }
}
