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

refs.themeCheckbox.addEventListener('change', changeTheme);

const menuItemsMarkup = createMenuItems(menuItems);

refs.menuEl.insertAdjacentHTML('beforeend', menuItemsMarkup);

console.log(menuItemsMarkup);

function changeTheme() {
  if (localStorage?.getItem(keyTheme) === Theme.DARK) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function setLightTheme() {
  refs.bodyEl.classList.remove(Theme.DARK);
  refs.bodyEl.classList.add(Theme.LIGHT);
  localStorage.setItem(keyTheme, Theme.LIGHT);
}

function setDarkTheme() {
  refs.bodyEl.classList.remove(Theme.LIGHT);
  refs.bodyEl.classList.add(Theme.DARK);
  localStorage.setItem(keyTheme, Theme.DARK);
}

function setClientTheme() {
  if (localStorage?.getItem(keyTheme)) {
    refs.bodyEl.classList.add(localStorage.getItem(keyTheme));
    if (localStorage.getItem(keyTheme) === Theme.DARK) {
      refs.themeCheckbox.checked = true;
    }
  }
}

function createMenuItems(menuItems) {
  return menuItemTemplate(menuItems);
}
