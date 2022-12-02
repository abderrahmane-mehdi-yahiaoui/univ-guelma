import React from "react";
import "../assets/css/newsletter.css";
import * as utile from "./utiles.js";
export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter__container newsletter__text">
        <h3>هل تريد الحصول على آخر الأخبار؟</h3>
        <p> اشْتَرَكَ فِي رِسَالَتنا الإِخْبَارِيَة</p>
        <form action="">
          <div className="newsletter__inputs">
            <input
              type="email"
              name="EMAIL"
              className="newsletter__input border-0"
              id="mce-EMAIL"
              placeholder="البريد الإلكتروني.."
            />
            <button
              onClick={utile.unAvailable}
              type="submit"
              name="subscribe"
              id="btn-subscribe"
              className="btn-subscribe"
            >
              التسجيل
            </button>
          </div>
        </form>

        <p> أو تابعنا على Twitter</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2F127.0.0.1%3A5500%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=UnivGuelma&tw_p=followbutton"
          className="btn twitter-btn"
          data-show-count="false"
        >
          {" "}
          متابعة @UnivGuelma{" "}
        </a>
      </div>
    </div>
  );
}
