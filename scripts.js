const main = () => {
  enableNavBar();
  enableNavButton();
  enableMenuButtons();
};

const enableNavBar = () => {
  window.onscroll = onScroll;
};

const onScroll = () => {
  const banner = document.getElementById("banner");
  const bannerHeight = banner.clientHeight;

  const navBar = document.getElementById("navbar");

  if (window.scrollY > bannerHeight - 64) {
    navBar.style.backgroundColor = "var(--secondary-color)";
    navBar.style.boxShadow = "0px 4px var(--shadow-color)";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";
  }
};

const enableNavButton = () => {
  const navButton = document.getElementById("nav-button");
  navButton.onclick = toggleNavItems;

  const navLinks = document.getElementsByClassName("nav-link");
  for (const navLink of navLinks) {
    navLink.onclick = toggleNavItems;
  }
};

const toggleNavItems = () => {
  const navBar = document.getElementById("navbar");
  navBar.style.backgroundColor = "var(--secondary-color)";
  navBar.style.boxShadow = "0px 4px var(--shadow-color)";

  if (document.body.clientWidth < 901) {
    const navItems = document.getElementById("nav-items");
    const displayStyle = navItems.style.display;

    const isHidden = displayStyle === "none" || displayStyle === "";
    navItems.style.display = isHidden ? "flex" : "none";
  }
};

const enableMenuButtons = () => {
  const daytimeMenuButton = document.getElementById("daytime-menu-button");
  daytimeMenuButton.onclick = toggleDaytimeMenu;

  const eveningMenuButton = document.getElementById("evening-menu-button");
  eveningMenuButton.onclick = toggleEveningMenu;

  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const switchoverDate = new Date();
  switchoverDate.setHours(0, 0, 0, 0); // change first number to 24-hour, i.e. 14 = 2pm
  const switchoverTime = switchoverDate.getTime();

  if (currentTime < switchoverTime) {
    toggleDaytimeMenu();
  } else {
    toggleEveningMenu();
  }
};

const toggleDaytimeMenu = () => {
  activateMenuButton("daytime-menu-button");
  deactivateMenuButton("evening-menu-button");

  showMenuHours("daytime-hours");
  hideMenuHours("evening-hours");

  showMenu("daytime-menu");
  hideMenu("evening-menu");
};

const toggleEveningMenu = () => {
  activateMenuButton("evening-menu-button");
  deactivateMenuButton("daytime-menu-button");

  showMenuHours("evening-hours");
  hideMenuHours("daytime-hours");

  showMenu("evening-menu");
  hideMenu("daytime-menu");
};

const activateMenuButton = (buttonId) => {
  const menuButton = document.getElementById(buttonId);
  menuButton.style.backgroundColor = "#285584";
  menuButton.style.color = "white";
};

const deactivateMenuButton = (buttonId) => {
  const menuButton = document.getElementById(buttonId);
  menuButton.style.backgroundColor = "white";
  menuButton.style.color = "#285584";
};

const showMenuHours = (menuHoursId) => {
  const menuHours = document.getElementById(menuHoursId);
  menuHours.style.display = "block";
};

const hideMenuHours = (menuHoursId) => {
  const menuHours = document.getElementById(menuHoursId);
  menuHours.style.display = "none";
};

const showMenu = (menuId) => {
  const menu = document.getElementById(menuId);
  menu.style.display = "flex";
};

const hideMenu = (menuId) => {
  const menu = document.getElementById(menuId);
  menu.style.display = "none";
};

main(); // code is ran here
