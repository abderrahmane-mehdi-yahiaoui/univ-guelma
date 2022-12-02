import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <div className="nav__items">
          <li className="">
            <Link className="link" to="#رئاسة_الجامعة">
              رئاسة الجامعة
            </Link>
            <div className="sub__links">
              <Link to="/page">تاريخي</Link>
              <Link to="#">كلمة من رئيس الجامعة</Link>
              <Link to="#">خلية الجودة</Link>
              <Link to="#">اللجنة المحلية لرقمنة الإدارة</Link>
              <Link to="#">المجلس العلمي</Link>
              <Link to="#">مجلس اداري</Link>
              <Link to="#">الهيكل التنظيمي</Link>
              <Link to="#">الخرائط والوصول</Link>
              <Link to="https://univ-guelma.ga/ar/القانون-الداخلي">
                القانون الداخلي{" "}
              </Link>
            </div>
          </li>
        </div>
        <div className="nav__items">
          <li className="">
            <Link className="link" to="#تكوين">
              تكوين
            </Link>
            <div className="sub__links">
              <Link to="https://univ-guelma.ga/système-lmd">نظام ل.م.د</Link>
              <Link to="#">التسجيل في الليسانس ل م د</Link>
              <Link to="#">التسجيل في الماستر ل م د</Link>
              <Link to="#">التسجيل في الدكتوراه ل م د</Link>
              <Link to="#">الوصاية</Link>
            </div>
          </li>
        </div>
        <div className="nav__items">
          <li className="">
            <Link className="link" to="#recherche">
              البحث العلمي
            </Link>
            <div className="sub__links">
              <Link to="#">مخابر البحث</Link>
              <Link to="#">مراكز البحث</Link>
              <Link to="#">دليل البحث</Link>
              <Link to="#">مراكز البحث</Link>
              <Link to="#">الانتاج العلمي</Link>
              <Link to="#">مشاريع البحث</Link>
              <Link to="#">إحصائيات ما بعد التخرج</Link>
              <Link to="#">إحصائيات</Link>
              <Link to="#">النصوص التنظيمية</Link>
              <Link to="#">النصوص التنظيمية المنظمة للبحث</Link>
            </div>
          </li>
        </div>
        <div className="nav-items">
          <li className="">
            <Link className="link" to="الكليات#">
              الكليات{" "}
            </Link>
            <div className="sub__links">
              <Link to="#">العلوم والتكنولوجيا</Link>
              <Link to="#">الرياضيات، الإعلام الآلي و علوم المادة</Link>
              <Link to="#">علوم الطبيعة و الحياة و علوم الأرض و الكون</Link>
              <Link to="#">العلوم الاقتصادية، التجارية و علوم التسيير</Link>
              <Link to="#">الحقوق و العلوم السياسية</Link>
              <Link to="#">الآداب و اللغات</Link>
              <Link to="#">العلوم الانسانية و الاجتماعية-</Link>
            </div>
          </li>
        </div>
        <div className="nav__items">
          <li className="">
            <Link className="link" to="#الطلبة">
              الطلبة{" "}
            </Link>
            <div className="sub__links">
              <Link to="#">الخدمات الجامعية</Link>
              <Link to="#">الأنشطة العلمية والثقافية والرياضية</Link>
              <Link to="#">الأنشطة العلمية والثقافية والرياضية</Link>
            </div>
          </li>
        </div>
        <div className="nav__items">
          <li className="">
            <Link className="link" to="#التعاون ">
              التعاون{" "}
            </Link>
            <div className="sub__links">
              <Link to="#">التعاون والعلاقات الخارجية</Link>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
