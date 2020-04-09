let keyboard = {
  keyEn: [
    ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", 'DEL', ],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", `\\`, 'Enter'],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyEnShift: [
    ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", 'DEL', ],
    ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', `|`, 'Enter'],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyRu: [
    ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `\\`, 'Enter'],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyRuShift: [
    ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", 'DEL', ],
    ['CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", `/`, 'Enter'],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyCode: [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Delete"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight" ],
    ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
  ],
};

let {keyEn, keyEnShift, keyRu, keyRuShift, keyCode} = keyboard;
let key = document.getElementsByClassName('key');

class Keyboard {
  constructor(textarea, keyboard, keyEn, keyRu, pushKey, pushMouse, caps) {
    this.textarea = textarea;
    this.keyboard = keyboard;
    this.keyEn = keyEn;
    this.keyRu = keyRu;
    this.pushKey = pushKey;
    this.pushMouse = pushMouse;
    this.caps = caps;
  }
}


function createTextarea() {
  let textarea = document.createElement('textarea');
  textarea.classList.add('area');
  document.body.prepend(textarea)
}

function createKeyboard() {
  let div = document.createElement('div');
  div.classList.add('keyboard');
  div.id = 'keyboard'
  document.body.prepend(div);
}

function createEnKey() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyEn.length; i++) {
    row += `<div id='row' class='row row${i}'></div>`;
    document.querySelector('#keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyEn.length; i++) {
    keyEn[i].map((e) => {
      out += `<div class='key ${e}' data-key='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  let arr = keyCode.flat(Infinity);
  let code = document.querySelectorAll('.key');
  for(i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`);
    code[i].id = arr[i]
  }
}

function createEnShift() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyEnShift.length; i++) {
    row += `<div id='row'  class='row row${i}'></div>`;
    document.querySelector('#keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyEnShift.length; i++) {
    keyEnShift[i].map((e) => {
      out += `<div class='key ${e}' data-key='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  let arr = keyCode.flat(Infinity);
  let code = document.querySelectorAll('.key');
  for(i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`);
    code[i].id = arr[i];
  }
}

function createRuKey() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyRu.length; i++) {
    row += `<div id='row' class='row row${i}'></div>`;
    document.querySelector('#keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyRu.length; i++) {
    keyRu[i].map((e) => {
      out += `<div class='key ${e}' data-key='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  let arr = keyCode.flat(Infinity);
  let code = document.querySelectorAll('.key');
  for(i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`);
    code[i].id = arr[i];
  }
}

function createRuShift() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyRuShift.length; i++) {
    row += `<div id='row' class='row row${i}'></div>`;
    document.querySelector('#keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyRuShift.length; i++) {
    keyRuShift[i].map((e) => {
      out += `<div class='key ${e}' data-key='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  let arr = keyCode.flat(Infinity);
  let code = document.querySelectorAll('.key');
  for(i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`);
    code[i].id = arr[i];
  }
}

function backspace () {
  let text = document.querySelector('.area').value;
  document.querySelector('.area').value = text.substring(0,text.length -1);
}


function enter() {
  let text = document.querySelector('.area').value;
  document.querySelector('.area').value = text + '\r\n';
}

function caps() {
  if(event.getModifierState('CapsLock') || event.getModifierState('Shift')) {
    if(document.getElementById('keyboard').classList.contains('keyboard')) {
      createEnShift();
    } else if(document.getElementById('keyboard').classList.contains('keyboard_ru')) {
      createRuShift();
    }
    pushMouse();
  } else {
    if(document.getElementById('keyboard').classList.contains('keyboard')) {
      page.keyEn();
    } else {
      page.keyRu();
    }
    pushMouse();
  }
}

function pushKey() {
  document.addEventListener('keydown', (event) => {
    document.querySelectorAll('.key').forEach(el => {
      el.classList.remove('active');
    })
    
    let textarea = document.querySelector('.area');
  
    switch(event.code) {
      case 'Backspace':
        document.querySelector('.Backspace').classList.add('active');
        backspace();
        break
      case 'Tab':
        event.preventDefault();
        document.querySelector('.Tab').classList.add('active');
        textarea.value += '    ';
        break
      case 'ShiftLeft':
        if(document.getElementById('keyboard').classList.contains('keyboard')) {
          createEnShift();
          pushMouse();
        } else {
          createRuShift();
          pushMouse();
        }
        document.querySelector('.ShiftLeft').classList.add('active');
        break;
      case 'ShiftRight':
        if(document.getElementById('keyboard').classList.contains('keyboard')) {
          createEnShift();
        } else {
          createRuShift();
        }
        document.querySelector('.ShiftRight').classList.add('active');
        break;
      case 'AltLeft':
        event.preventDefault();
        document.querySelector('.AltLeft').classList.add('active');
        break 
      case 'AltRight':
        event.preventDefault();
        document.querySelector('.AltRight').classList.add('active');
        break
      case 'ArrowUp':
        document.querySelector('.ArrowUp').classList.add('active');
        break
      case 'ArrowLeft':
        document.querySelector('.ArrowLeft').classList.add('active');
        break
      case 'ArrowDown':
        document.querySelector('.ArrowDown').classList.add('active');
        break
      case 'ArrowRight':
        document.querySelector('.ArrowRight').classList.add('active');
        break
      case 'Enter':
        document.querySelector(`.Enter`).classList.add('active');
        enter()
        break
      case 'Delete':
      case 'CapsLock':
        caps();
        break
      case 'ControlLeft':
      case 'ControlRight':
      case 'MetaLeft':
        document.querySelector(`.${event.code}`).classList.add('active');
        textarea.value += ''
        break
      default:
        document.querySelector(`.${event.code}`).classList.add('active');
        textarea.value += event.key;
    }
  })

  document.addEventListener('keyup', (event) => {
    if(document.getElementById('keyboard').classList.contains('keyboard')) {
      document.querySelectorAll('.keyboard .key').forEach(el => {
        el.classList.remove('active');
        if((event.code === 'ShiftLeft' || event.code === 'ShiftRight')  && !createEnShift()) {
          createEnKey();
        }
      })
    } else if(document.getElementById('keyboard').classList.contains('keyboard_ru')) {
      document.querySelectorAll('.keyboard_ru .key').forEach(el => {
        el.classList.remove('active');
        if((event.code === 'ShiftLeft' || event.code === 'ShiftRight')  && !createRuShift()) {
          createRuKey();
        }
      })
    }

    switch(event.code) {
      case 'ShiftLeft':
        pushMouse();
        break
    }
  })
}

function pushMouse() {
  let textarea = document.querySelector('.area');
  Array.from(key).forEach((el) => {
    el.addEventListener('mousedown', (event) => {
    el.classList.add('active');
    event.preventDefault();

    switch(el.getAttribute( 'data-key')) {
      case 'Backspace':
        backspace();
        break
      case 'Enter':
        enter();
        break
      case 'Tab':
        textarea.value += '    ';
        break
      case 'Shift':
      case 'DEL':
      case 'Ctrl':
      case 'Alt':
      case 'shift':
      case 'Win':
        textarea.value += '';
        break
      case 'CapsLock':
        if(document.getElementById('keyboard').classList.contains('keyboard_ru')) {
          if(document.getElementById('KeyQ').dataset.key === 'й') {
            createRuShift();
          } else if(document.getElementById('KeyQ').dataset.key === 'Й') {
            createRuKey();
          }
        } else if (document.getElementById('keyboard').classList.contains('keyboard')) {
          if(document.getElementById('KeyQ').dataset.key === 'q') {
            createEnShift();
          } else if(document.getElementById('KeyQ').dataset.key === 'Q') {
            createEnKey();
          }
        }
        pushMouse();
        break
      default: 
        textarea.value += el.textContent;
      }
    })
  
    el.addEventListener('mouseup', () => {
      document.querySelectorAll('#keyboard .key').forEach(el => {
        el.classList.remove('active');
      })

      switch(el.getAttribute( 'data')) {
        case 'CapsLock':
          break
      }
    })
  })
}


function runOnKeys(func, func2, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    
    pressed.clear();
    
    if(document.getElementById('keyboard').classList.contains('keyboard')) {
      func();
      func2();
      document.getElementById('keyboard').classList.add('keyboard_ru')
      document.getElementById('keyboard').classList.remove('keyboard')
    } else if(document.getElementById('keyboard').classList.contains('keyboard_ru')) {
      func();
      func2();
      document.getElementById('keyboard').classList.add('keyboard')
      document.getElementById('keyboard').classList.remove('keyboard_ru')
    }
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}


const page = new Keyboard(createTextarea, createKeyboard, createEnKey, createRuKey, pushKey, pushMouse);


page.keyboard();
page.textarea();
page.keyEn();
page.pushKey();
page.pushMouse();




if(document.getElementById('keyboard').classList.contains('keyboard')) {
  runOnKeys(
    page.keyRu,
    page.pushMouse,
    "ShiftLeft",
    "AltLeft"
  );
} else if(document.getElementById('keyboard').classList.contains('keyboard_ru')) {
  runOnKeys(
    page.keyEn,
    page.pushMouse,
    "ShiftLeft",
    "AltLeft"
  );
}