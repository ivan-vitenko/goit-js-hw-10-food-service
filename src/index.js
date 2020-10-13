import menuItemTemplate from './templates/menu-items.hbs';
import menuItems from './menu.json';
import './styles.css';

const refs = {
  themeCheckbox: document.querySelector('#theme-switch-toggle'),
  bodyEl: document.querySelector('body'),
  menuEl: document.querySelector('.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const keyTheme = 'Theme';

setClientTheme();

let currentTheme;
let newTheme;
setStatusOfThemes();

refs.themeCheckbox.addEventListener('change', changeTheme);

const menuItemsMarkup = createMenuItems(menuItems);

refs.menuEl.insertAdjacentHTML('beforeend', menuItemsMarkup);

function changeTheme() {
  refs.bodyEl.classList.remove(currentTheme);
  refs.bodyEl.classList.add(newTheme);
  localStorage.setItem(keyTheme, newTheme);

  setStatusOfThemes();
}

function setClientTheme() {
  const clientTheme = localStorage.getItem(keyTheme);

  refs.bodyEl.classList.add(clientTheme);

  if (clientTheme === Theme.DARK) {
    refs.themeCheckbox.checked = true;
  } else {
    refs.bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem(keyTheme, Theme.LIGHT);
  }
}

function setStatusOfThemes() {
  currentTheme = localStorage.getItem(keyTheme);
  newTheme = currentTheme !== Theme.LIGHT ? Theme.LIGHT : Theme.DARK;
}

function createMenuItems(menuItems) {
  return menuItemTemplate(menuItems);
}
