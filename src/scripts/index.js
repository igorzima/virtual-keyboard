import Layout from './layout';
import Key from './key';
import ru from './ru';
import en from './en';

const page = new Layout();

const keyRu = new Key(ru);
const keyEn = new Key(en);

const keyboardLanguageEn = 'en';
const keyboardLanguageRu = 'ru';

page.createLayout();

if (localStorage.lang === undefined || localStorage.lang === keyboardLanguageEn) {
  keyEn.init(false);
  keyEn.handlerKey();
  localStorage.setItem('lang', keyboardLanguageEn);
} else if (localStorage.lang === keyboardLanguageRu) {
  keyRu.init(false);
  keyRu.handlerKey();
  localStorage.setItem('lang', keyboardLanguageRu);
}

const keys = [];

function keysPressed(e) {
  keys[e.keyCode] = true;

  if (keys[17] && keys[18] && localStorage.lang === keyboardLanguageEn) {
    e.preventDefault();
    localStorage.setItem('lang', keyboardLanguageRu);
    keyRu.init(false);
  } else if (keys[17] && keys[18] && localStorage.lang === keyboardLanguageRu) {
    e.preventDefault();
    localStorage.setItem('lang', keyboardLanguageEn);
    keyEn.init(false);
  }
}

function keysReleased(e) {
  keys[e.keyCode] = false;
}

document.addEventListener('keydown', keysPressed, false);
document.addEventListener('keyup', keysReleased, false);
