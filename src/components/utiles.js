export function language() {
  const currentLang = document.documentElement.lang;
}

export function menuToggle() {
  const megaNav = document.getElementById("mega-nav");
  if (megaNav.classList.contains("active")) {
    megaNav.classList.remove("active");
  } else {
    document.getElementById("mega-nav").classList.add("active");
  }
}
export function menuClose() {
  const megaNav = document.getElementById("mega-nav");
  megaNav.classList.remove("active");
}
export function unAvailable(e) {
  alert("نعتذر ، هذه الميزة غير متوفرة.");
  e.preventDefault();
  return false;
}
