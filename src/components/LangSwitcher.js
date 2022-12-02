import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
export default class LangSwitcher extends Component {
  switchLangFr = () => {
    document.documentElement.lang = "fr";
    document.body.lang = "fr";
    document.documentElement.dir = "ltr";
    console.log(window.location.pathname);
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
    if (this.useState.currentLang === "fr") {
      this.useState = { lang: "français" };
    } else if (this.useState.currentLang === "ar") {
      this.useState = { lang: "عربية" };
    }
  }
  render() {
    return (
      <div id="lang-switcher" className="lang__switch">
        <div className="active__lang">
          <Link
            onClick={this.switchLangAr}
            id={"lang-" + this.useState.currentLang}
            className={"lang__link ar"}
            title="اللغة الحالية"
            to={this.useState.currentLang}
          >
            <img
              src="https://univ-guelma.ga/ressources/images/icons/icons8-algeria-30.png"
              alt=""
              srcSet=""
            />
            <span>{this.useState.lang}</span>
          </Link>
        </div>
        <div id="languages-dropdown" className="dropdown__lang">
          <ul className="drop__lang__links">
            <li>
              <Link
                onClick={this.switchLangFr}
                id="lang-fr"
                className="lang__link fr"
                to="/fr"
                title="تغيير اللغة"
              >
                <img
                  src="https://univ-guelma.ga/ressources/images/icons/icons8-france-30.png"
                  alt=""
                  srcSet=""
                />
                <span>فرنسية</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={this.switchLangEn}
                id="lang-en"
                className="lang__link en"
                to="/en"
                title="غير متوفر حاليا"
              >
                <img
                  src="https://univ-guelma.ga/ressources/images/icons/icons8-england-30.png"
                  alt=""
                  srcSet=""
                />
                <span>إنجليزية</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
