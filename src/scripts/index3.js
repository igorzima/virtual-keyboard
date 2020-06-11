/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */

const keyboard = {
  keyEn: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  keyEnShift: [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'DEL'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  keyRu: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'DEL'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  keyRuShift: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'DEL'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  keyCode: [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
  ],
};

const {
  keyEn, keyEnShift, keyRu, keyRuShift, keyCode,
} = keyboard;
const key = document.getElementsByClassName('key');

function createTextarea() {
  const title = document.createElement('p');
  title.classList.add('title');
  title.innerText = 'Для переключения раскладки клавиатуры используйте leftShift и leftAlt';
  const textarea = document.createElement('textarea');
  textarea.classList.add('area');
  document.body.prepend(title, textarea);
}

function createKeyboard() {
  const div = document.createElement('div');
  div.classList.add('keyboard');
  div.id = 'keyboard';
  document.body.prepend(div);
}

function createKey(lang = keyEn) {
  this.lang = lang;
  let out = '';
  let row = '';
  for (let i = 0; i < this.lang.length; i++) {
    row += `<div id='row' class='row row${i}'></div>`;
    document.querySelector('#keyboard').innerHTML = row;
  }

  for (let i = 0; i < this.lang.length; i++) {
    this.lang[i].map((e) => {
      out += `<div class='key ${e}' data-key='${e}'>${e}</div>`;
      return out;
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  const arr = keyCode.flat(Infinity);
  const code = document.querySelectorAll('.key');
  for (i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`);
    code[i].id = arr[i];
  }

  if (lang == keyEn) {
    localStorage.setItem('lang', 'en');
  } else if (lang == keyRu) {
    localStorage.setItem('lang', 'ru');
  }
}

function backspace() {
  const text = document.querySelector('.area').value;
  document.querySelector('.area').value = text.substring(0, text.length - 1);
}

function enter() {
  const text = document.querySelector('.area').value;
  document.querySelector('.area').value = `${text}\r\n`;
}

function caps() {
  if (event.getModifierState('CapsLock') || event.getModifierState('Shift')) {
    if (document.getElementById('keyboard').classList.contains('keyboard')) {
      createKey(keyEnShift);
    } else if (document.getElementById('keyboard').classList.contains('keyboard_ru')) {
      createKey(keyRuShift);
    }
    pushMouse();
  } else {
    if (document.getElementById('keyboard').classList.contains('keyboard')) {
      createKey(keyEn);
    } else {
      createKey(keyRu);
    }
    pushMouse();
  }
}

function pushKey() {
  document.addEventListener('keydown', (event) => {
    document.querySelectorAll('.key').forEach((el) => {
      el.classList.remove('active');
    });

    const textarea = document.querySelector('.area');
    document.querySelector(`.${event.code}`).classList.add('active');

    switch (event.code) {
      case 'Backspace':
        backspace();
        break;
      case 'Tab':
        event.preventDefault();
        textarea.value += '    ';
        break;
      case 'ShiftLeft':
        if (document.getElementById('keyboard').classList.contains('keyboard')) {
          createKey(keyEnShift);
          pushMouse();
        } else {
          createKey(keyRuShift);
          pushMouse();
        }
        document.querySelector('.ShiftLeft').classList.add('active');
        break;
      case 'ShiftRight':
        if (document.getElementById('keyboard').classList.contains('keyboard')) {
          createKey(keyEnShift);
        } else {
          createKey(keyRuShift);
        }
        document.querySelector('.ShiftRight').classList.add('active');
        break;
      case 'AltLeft':
        event.preventDefault();
        break;
      case 'AltRight':
        event.preventDefault();
        break;
      case 'Enter':
        enter();
        break;
      case 'CapsLock':
        caps();
        document.querySelector('.CapsLock').classList.add('active');
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'ArrowRight':
      case 'Delete':
      case 'ControlLeft':
      case 'ControlRight':
      case 'MetaLeft':
        textarea.value += '';
        break;
      default:
        textarea.value += event.key;
    }
  });

  document.addEventListener('keyup', (event) => {
    if (document.getElementById('keyboard').classList.contains('keyboard')) {
      document.querySelectorAll('.keyboard .key').forEach((el) => {
        el.classList.remove('active');
        if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !createKey(keyEnShift)) {
          createKey(keyEn);
        }
      });
    } else if (document.getElementById('keyboard').classList.contains('keyboard_ru')) {
      document.querySelectorAll('.keyboard_ru .key').forEach((el) => {
        el.classList.remove('active');
        if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !createKey(keyRuShift)) {
          createKey(keyRu);
        }
      });
    }

    switch (event.code) {
      case 'ShiftLeft':
        pushMouse();
        break;
    }
  });
}

function pushMouse() {
  const textarea = document.querySelector('.area');
  Array.from(key).forEach((el) => {
    el.addEventListener('mousedown', (event) => {
      el.classList.add('active');
      event.preventDefault();

      switch (el.getAttribute('data-key')) {
        case 'Backspace':
          backspace();
          break;
        case 'Enter':
          enter();
          break;
        case 'Tab':
          textarea.value += '    ';
          break;
        case 'Shift':
        case 'DEL':
        case 'Ctrl':
        case 'Alt':
        case 'shift':
        case 'Win':
          textarea.value += '';
          break;
        case 'CapsLock':
          if (document.getElementById('keyboard').classList.contains('keyboard_ru')) {
            if (document.getElementById('KeyQ').dataset.key === 'й') {
              createKey(keyRuShift);
            } else if (document.getElementById('KeyQ').dataset.key === 'Й') {
              createKey(keyRu);
            }
          } else if (document.getElementById('keyboard').classList.contains('keyboard')) {
            if (document.getElementById('KeyQ').dataset.key === 'q') {
              createKey(keyEnShift);
            } else if (document.getElementById('KeyQ').dataset.key === 'Q') {
              createKey(keyEn);
            }
          }
          pushMouse();
          break;
        default:
          textarea.value += el.textContent;
      }
    });

    el.addEventListener('mouseup', () => {
      document.querySelectorAll('#keyboard .key').forEach((el) => {
        el.classList.remove('active');
      });
    });
  });
}

function runOnKeys(func, func2, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    if (document.getElementById('keyboard').classList.contains('keyboard')) {
      func();
      func2();
      document.getElementById('keyboard').classList.add('keyboard_ru');
      document.getElementById('keyboard').classList.remove('keyboard');
    } else if (document.getElementById('keyboard').classList.contains('keyboard_ru')) {
      func();
      func2();
      document.getElementById('keyboard').classList.add('keyboard');
      document.getElementById('keyboard').classList.remove('keyboard_ru');
    }
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

createKeyboard();
createTextarea();

if (localStorage.lang == undefined || localStorage.lang == 'en') {
  createKey();
  localStorage.setItem('lang', 'en');
} else if (localStorage.lang == 'ru') {
  createKey(keyRu);
  localStorage.setItem('lang', 'ru');
}

pushKey();
pushMouse();

if (document.getElementById('keyboard').classList.contains('keyboard')) {
  runOnKeys(
    createKey.bind(this, keyRu),
    pushMouse,
    'ShiftLeft',
    'AltLeft',
  );
} else if (document.getElementById('keyboard').classList.contains('keyboard_ru')) {
  runOnKeys(
    createKey.bind(this, keyEn),
    pushMouse,
    'ShiftLeft',
    'AltLeft',
  );
}
