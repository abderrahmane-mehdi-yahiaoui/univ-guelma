import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/sidebar.css";
function Sidebar() {
  return (
    <>
      <aside id="sidebar">
        <div className="sidebar__items">
          <h4>الصفحات المتوفرة</h4>
          <ul>
            <li>
              <Link className="av-pages" to="https://univ-guelma.ga/ar">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link className="av-pages" to="/ar/view_post">
                صفحة النشر
              </Link>
            </li>
            <li>
              <Link className="av-pages" to="https://univ-guelma.ga">
                النسخة الفرنسية
              </Link>
            </li>
          </ul>
          <h4>مكتبة</h4>
          <ul>
            <li>
              <Link to="https://www.univ-guelma.dz/fr/biblioth%C3%A8que-centrale">
                المكتبة المركزية
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noreferrer"
                to="http://pmb.univ-guelma.dz/opac_css/"
              >
                البحث الببليوغرافي
              </Link>
            </li>
          </ul>

          <h4>التعلم الإلكتروني</h4>
          <ul>
            <li>
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://elearning.univ-guelma.dz/"
              >
                الدراسة على الخط
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noreferrer"
                to="http://c2in.univ-guelma.dz/"
              >
                C2I
              </Link>
            </li>
            <li>
              <Link to="http://relex.univ-guelma.dz/fr/ressources-de-l%E2%80%99agence-universitaire-de-la-francophonie">
                موارد الوكالة الجامعية للفرنكوفونية
              </Link>
            </li>
          </ul>
          <h4>دعوة للمنافسة</h4>
          <ul>
            <li>
              <Link to="http://www1.univ-guelma.dz/fr/Appel/Appel-d-offres">
                دعوة للمناقصات
              </Link>
            </li>
            <li>
              <Link to="http://www1.univ-guelma.dz/fr/Appel/consultation">
                استشارات
              </Link>
            </li>
            <li>
              <Link to="http://www1.univ-guelma.dz/fr/Appel/Resultats">
                النتائج
              </Link>
            </li>
          </ul>
          <img
            className="sidebar__items-thumbnail"
            src="https://univ-guelma.ga/ressources/images/newsp-thumbnail.jpg"
            alt="Revue de presse"
            aria-details=""
          />
          <Link
            className="sidebar__button"
            to="http://morassalat.univ-guelma.dz/"
            title="تصحف المقالات"
          >
            أقوال الصحف
          </Link>

          <img
            className="sidebar__items-thumbnail"
            src="https://univ-guelma.ga/ressources/images/faq-thumbnail.png"
            alt="FAQ"
            aria-details=""
          />
          <Link
            className="sidebar__button"
            to="http://morassalat.univ-guelma.dz/"
            title="طرح الأسئلة"
          >
            الأسئلة والأجوبة
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
