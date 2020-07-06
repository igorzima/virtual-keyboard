import Key from './key';
import ru from './ru';
import en from './en';

const keyRu = new Key(ru);
const keyEn = new Key(en);

function createTextarea() {
  const title = document.createElement('p');
  title.classList.add('title');
  title.innerText = 'Для переключения раскладки клавиатуры используйте leftShift и leftAlt';
  const textarea = document.createElement('textarea');
  textarea.classList.add('area');
  document.body.append(title, textarea);
}

function createKeyboard() {
  const div = document.createElement('div');
  div.classList.add('keyboard');
  div.id = 'keyboard';
  document.body.append(div);
}

createTextarea();
createKeyboard();

if (localStorage.lang === undefined || localStorage.lang === 'en') {
  keyEn.init(false);
  keyEn.handlerKey();
  localStorage.setItem('lang', 'en');
} else if (localStorage.lang === 'ru') {
  keyRu.init(false);
  keyRu.handlerKey();
  localStorage.setItem('lang', 'ru');
}
