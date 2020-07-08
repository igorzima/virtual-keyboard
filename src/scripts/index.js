import Layout from './layout';
import Key from './key';
import ru from './ru';
import en from './en';

const page = new Layout();

const keyRu = new Key(ru);
const keyEn = new Key(en);

const keyboardLanguageEn = 'en';
const keyboardLanguageRu = 'ru';

const localStorageKeyLanguage = 'language';

page.createLayout();

if (localStorage.language === undefined || localStorage.language === keyboardLanguageEn) {
  keyEn.init(false);
  keyEn.handlerKey();
  localStorage.setItem(localStorageKeyLanguage, keyboardLanguageEn);
} else if (localStorage.language === keyboardLanguageRu) {
  keyRu.init(false);
  keyRu.handlerKey();
  localStorage.setItem(localStorageKeyLanguage, keyboardLanguageRu);
}

const keys = [];

function keysPressed(e) {
  keys[e.keyCode] = true;

  if (keys[17] && keys[18] && localStorage.language === keyboardLanguageEn) {
    e.preventDefault();
    localStorage.setItem(localStorageKeyLanguage, keyboardLanguageRu);
    keyRu.init(false);
  } else if (keys[17] && keys[18] && localStorage.language === keyboardLanguageRu) {
    e.preventDefault();
    localStorage.setItem(localStorageKeyLanguage, keyboardLanguageEn);
    keyEn.init(false);
  }
}

function keysReleased(e) {
  keys[e.keyCode] = false;
}

document.addEventListener('keydown', keysPressed, false);
document.addEventListener('keyup', keysReleased, false);
