//Разметка меню по шаблону
import menuData from './menu.json';
import menuTemplates from './templates/menu.hbs';

const menuListRef = document.querySelector('.js-menu');
const menuMarkup = menuTemplates(menuData);

menuListRef.insertAdjacentHTML('beforeend', menuMarkup);

//Переключение тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');

themeSwitcherRef.addEventListener('change', onCurrentTheme)

bodyRef.classList.add(localStorage.getItem('Theme') ? localStorage.getItem('Theme') : Theme.LIGHT);
themeSwitcherRef.checked = localStorage.getItem('Theme') === Theme.DARK;

function onCurrentTheme({ target: { checked } }) {
  checked
    ? togleTheme(Theme.DARK, Theme.LIGHT)
    : togleTheme(Theme.LIGHT, Theme.DARK)
};

function togleTheme (add, rem) {
  bodyRef.classList.add(add);
  bodyRef.classList.remove(rem);
  localStorage.setItem('Theme', add);
};