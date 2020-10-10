const refs = {
  themeCheckbox: document.querySelector('#theme-switch-toggle'),
  bodyEl: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const keyTheme = 'Theme';

setClientTheme();

refs.themeCheckbox.addEventListener('change', changeTheme);

//console.log(refs.themeCheckbox.checked);

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
