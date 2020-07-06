import Layout from './layout';
import Key from './key';
import ru from './ru';
import en from './en';

const page = new Layout();

const keyRu = new Key(ru);
const keyEn = new Key(en);

page.createLayout();

if (localStorage.lang === undefined || localStorage.lang === 'en') {
  keyEn.init(false);
  keyEn.handlerKey();
  localStorage.setItem('lang', 'en');
} else if (localStorage.lang === 'ru') {
  keyRu.init(false);
  keyRu.handlerKey();
  localStorage.setItem('lang', 'ru');
}

const keys = [];

function keysPressed(e) {
  keys[e.keyCode] = true;

  if (keys[17] && keys[18] && localStorage.lang === 'en') {
    e.preventDefault();
    localStorage.setItem('lang', 'ru');
    keyRu.init(false);
  } else if (keys[17] && keys[18] && localStorage.lang === 'ru') {
    e.preventDefault();
    localStorage.setItem('lang', 'en');
    keyEn.init(false);
  }
}

function keysReleased(e) {
  keys[e.keyCode] = false;
}

document.addEventListener('keydown', keysPressed, false);
document.addEventListener('keyup', keysReleased, false);
