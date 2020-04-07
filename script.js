let keyboard = {
  keyArrEn: [
    ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", 'DEL', ],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", `\\`, 'Enter'],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyArrEnShift: [
    ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", 'DEL', ],
    ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', `|`, 'Enter'],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyArrRu: [
    ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `\\`, 'Enter'],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  keyArrRuShift: [
    ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `/`, 'Enter'],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"],
  ],
  arrCode: [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Delete"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight" ],
    ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
  ],
};


let {keyArrEn, keyArrEnShift, keyArrRu, keyArrRuShift, arrCode} = keyboard;
let textarea = document.createElement('textarea');
let div = document.createElement('div');
let divArea = document.createElement('div');
divArea.classList.add('wrapper');
textarea.classList.add('area');
div.classList.add('keyboard');
document.querySelector('body').innerHTML = '<main></main>';
document.querySelector('main').append(divArea, div);
document.querySelector('div').append(textarea);



function init() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyArrEn.length; i++) {
    row += `<div class='row row${i}'></div>`;
    document.querySelector('.keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyArrEn.length; i++) {
    keyArrEn[i].map((e) => {
      out += `<div class='key ${e}' data='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  let arr = arrCode.flat(Infinity);
  let code = document.querySelectorAll('.key');
  for(i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`)
  }
}

function initEnShift() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyArrEnShift.length; i++) {
    row += `<div class='row row${i}'></div>`;
    document.querySelector('.keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyArrEnShift.length; i++) {
    keyArrEnShift[i].map((e) => {
      out += `<div class='key ${e}' data='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }

  let arr = arrCode.flat(Infinity);
  let code = document.querySelectorAll('.key');
  for(i = 0; i < arr.length; i++) {
    code[i].classList.add(`${arr[i]}`)
  }
}

init();

document.addEventListener('keydown', (event) => {
  document.querySelectorAll('.keyboard .key').forEach(el => {
    el.classList.remove('active');
  })
  if(event.getModifierState('CapsLock') || event.getModifierState('Shift')) {
    initEnShift();
  } else {
    init();
  }
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
    case 'Delete':
      document.querySelector('.Delete').classList.add('active');
      break
    case 'Quote':
      document.querySelector('.Quote').classList.add('active');
      break
    case 'Backslash':
      document.querySelector('.Backslash').classList.add('active');
      break
    case 'CapsLock':
      document.querySelector('.CapsLock').classList.add('active');
      textarea.value += ''
      break
    case 'ShiftLeft':
      initEnShift();
      document.querySelector('.ShiftLeft').classList.add('active');
      break;
    case 'ShiftRight':
      document.querySelector('.ShiftRight').classList.add('active');
      break
    case 'ControlLeft':
      document.querySelector('.ControlLeft').classList.add('active');
      break
    case 'ControlRight':
      document.querySelector('.ControlRight').classList.add('active');
      break
    case 'MetaLeft':
      document.querySelector('.MetaLeft').classList.add('active');
      break
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
    default:
      document.querySelector(`.${event.code}`).classList.add('active');
      textarea.value += event.key;
  }
})

document.addEventListener('keyup', (event) => {
  document.querySelectorAll('.keyboard .key').forEach(el => {
    el.classList.remove('active');
    if(event.code === 'ShiftLeft' && !initEnShift()) {
      init()
    }
  })
})

function backspace () {
  let text = document.querySelector('.area').value;
  document.querySelector('.area').value = text.substring(0,text.length -1);
}


function enter() {
  let text = document.querySelector('.area').value;
  document.querySelector('.area').value = text + '\r\n';
}

let arr = arrCode.flat(Infinity);
let code = document.querySelectorAll('.key');
for(i = 0; i < arr.length; i++) {
  code[i].classList.add(`${arr[i]}`)
}



document.querySelectorAll('.keyboard .key').forEach(el => {
  el.addEventListener('mousedown', () => {
    el.classList.add('active');

    switch(el.getAttribute('data')) {
      case 'Backspace':
        backspace ()
        break
      case 'Enter':
        enter()
        break
      case 'Tab':
        event.preventDefault();
        textarea.value += '    ';
        break
      case 'Shift':
      case 'DEL':
      case 'Ctrl':
      case 'Alt':
      case 'CapsLock':
      case 'shift':
        textarea.value += '';
        break
      default: 
        textarea.value += el.getAttribute('data');
    }
  })

  el.addEventListener('mouseup', () => {
    document.querySelectorAll('.keyboard .key').forEach(el => {
      el.classList.remove('active');
    })
  })
})

function initRu() {
  let out = '';
  let row = '';
  for(let i = 0; i < keyArrRu.length; i++) {
    row += `<div class='row row${i}'></div>`;
    document.querySelector('.keyboard').innerHTML = row;
  }
    
  for(let i = 0; i < keyArrRu.length; i++) {
    keyArrRu[i].map((e) => {
      out += `<div class='key ${e}' data='${e}'>${e}</div>`;
      return out
    });
    document.querySelector(`.row${i}`).innerHTML = out;
    out = '';
  }
}

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}

runOnKeys(
  initRu,
  "ShiftLeft",
  "AltLeft"
);