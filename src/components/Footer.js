import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="top__footer">
        <div className="footer-inner contact">
          <div className="footer-elem">
            <h4>اتصل</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span dir="ltr"> قالمة - جامعة 8 ماي 1945 </span>
            </li>
            <li>
              <Link dir="ltr" to="tel:+213 37 10 05 53" title="اتصل بنا">
                +213 37 10 05 53<span> :الهاتف</span>
              </Link>
            </li>
            <li>
              <Link dir="ltr" to="fax:+213 37 10 05 55" title="أرسل لنا فاكس">
                +213 37 10 05 55<span> :الفاكس</span>
              </Link>
            </li>
            <li>
              <Link dir="auto" title="Notre adresse" to="#map">
                BP 401 GUELMA 24000 - ALGERIE{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-inner rapid-links">
          <div className="footer-elem">
            <h4>روابط سريعة</h4>
          </div>
          <ul className="footer-links">
            <li>
              <Link to="/">المراسلة</Link>
            </li>
            <li>
              <Link to="/">طلب الدبلوم النهائي</Link>
            </li>
            <li>
              <Link to="/">سجل الأطروحات </Link>
            </li>
            <li>
              <Link to="/">مخابر البحث</Link>
            </li>
            <li>
              <Link to="http://relex.univ-guelma.dz/fr/programme-erasmus">
                +برنامج ايراسموس{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-inner useful-links">
          <div className="footer-elem">
            <h4>روابط مفيدة</h4>
          </div>
          <ul className="footer-links">
            <li>
              <Link target="_blank" to="http://atrst.dz/">
                وكالة البحوث المواضيعية في العلوم والتكنولوجيا
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.mesrs.dz/accueil">
                وزارة التعليم العالي والبحث العلمي
              </Link>
            </li>
            <li>
              <Link to="/">SNDL</Link>
            </li>
          </ul>
        </div>
        <div className="footer-inner commun-services">
          <div className="footer-elem">
            <h4>الخدمات المشتركة</h4>
          </div>
          <ul className="footer-links">
            <li>
              <Link to="/">
                المركز المشترك لشبكات وأنظمة المعلومات والاتصالات
              </Link>
            </li>
            <li>
              <Link target="_blank" to="http://ceil.univ-guelma.dz/">
                مركز تعليم اللغات المكثف
              </Link>
            </li>
            <li>
              <Link to="/">قسم النشر الأكاديمي</Link>
            </li>
            <li>
              <Link to="/">مرصد العلاقات ومراقبة اندماج الخريجين</Link>
            </li>
            <li>
              <Link to="/">بتوجيه من الأنشطة العلمية والثقافية والرياضية</Link>
            </li>
            <li>
              <Link to="/">إدارة الموظفين</Link>
            </li>
            <li>
              <Link to="/">وحدات الطب الوقائي</Link>
            </li>
            <li>
              <Link to="/">وحدة الاتصالات</Link>
            </li>
          </ul>
        </div>

        <div className="footer-inner map">
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3209.2514230431393!2d7.421092985980261!3d36.45147979495348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sdz!4v1602256567801!5m2!1sar!2sdz"
            title="map"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
      <div className="sub-footer-social">
        <ul className="social-links">
          <li>
            <Link
              target="_blank"
              title="الفيسبوك"
              to="https://www.facebook.com/univ8mai45guelma/"
            >
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              title="انستغرام"
              to="https://www.instagram.com/unversite8mai1945guelma/"
            >
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              title="YouTube"
              to="https://www.youtube.com/channel/UClkpE_bg6wQTQz0Z1SssP7g"
            >
              <FontAwesomeIcon className="icon" icon={faYoutube} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              title="Twitter"
              to="https://twitter.com/UnivGuelma"
            >
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              title="linkedin"
              to="http://www.linkedin.com/school/universit%C3%A9-du-8-mai-1945-guelma/"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </Link>
          </li>
        </ul>
      </div>

      <div id="crdcopy">
        <p id="copytext">&copy; جامعة 8 ماي 1945 قالمة.</p>
        <p id="credtext">
          {" "}
          موقع مصمم من طرف
          <a
            style={{ marginRight: ".3em" }}
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Y_mehdi_a"
            title=" الملف الشخصي على Twitter"
            aria-details="Website author"
          >
            <img
              className="star-icon"
              src="https://univ-guelma.ga/ressources/images/icons8-star-64.png"
              alt=""
            />
            يحياوي مهدي عبد الرحمان
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
