/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
export default class Key {
  constructor(lang) {
    const {
      small, shift, keyCode, fn,
    } = lang;
    this.small = small;
    this.shift = shift;
    this.keyCode = keyCode;
    this.fn = fn;
    this.lang = lang;
  }

  init(shiftKey) {
    this.shiftKey = shiftKey;

    let out = '';
    let row = '';

    for (let i = 0; i < 5; i += 1) {
      row += `<div class='row${i} row'></div>`;
      document.querySelector('#keyboard').innerHTML = row;
    }

    if (shiftKey) {
      this.lang.map((e, i) => {
        if (e.keyCode === 'CapsLock') {
          out += `<div class='key ${e.keyCode} caps' data-key='${e.keyCode}' data-fn='${e.fn}'>${e.shift || e.small}</div>`;
        } else {
          out += `<div class='key ${e.keyCode}' data-key='${e.keyCode}' data-fn='${e.fn}'>${e.shift || e.small}</div>`;
        }

        if (i === 13) {
          document.querySelector('.row0').innerHTML = out;
          out = '';
        }
        if (i === 27) {
          document.querySelector('.row1').innerHTML = out;
          out = '';
        }
        if (i === 41) {
          document.querySelector('.row2').innerHTML = out;
          out = '';
        }
        if (i === 55) {
          document.querySelector('.row3').innerHTML = out;
          out = '';
        }
        if (i === 64) {
          document.querySelector('.row4').innerHTML = out;
          out = '';
        }
        return out;
      });
      return this;
    }

    this.lang.map((e, i) => {
      out += `<div class='key ${e.keyCode}' data-key='${e.keyCode}'  data-fn='${e.fn}'>${e.small}</div>`;
      if (i === 13) {
        document.querySelector('.row0').innerHTML = out;
        out = '';
      }
      if (i === 27) {
        document.querySelector('.row1').innerHTML = out;
        out = '';
      }
      if (i === 41) {
        document.querySelector('.row2').innerHTML = out;
        out = '';
      }
      if (i === 55) {
        document.querySelector('.row3').innerHTML = out;
        out = '';
      }
      if (i === 64) {
        document.querySelector('.row4').innerHTML = out;
        out = '';
      }
      return out;
    });
    return this;
  }

  handlerKey() {
    this.keyboard = document.querySelector('#keyboard');

    this.keyboard.addEventListener('mousedown', (event) => this.mouseDown(event));
    this.keyboard.addEventListener('mouseup', (event) => this.mouseUp(event));
    document.addEventListener('keydown', (event) => this.keyDown(event));
    document.addEventListener('keyup', (event) => this.keyUp(event));
  }

  mouseDown(event) {
    this.textarea = document.querySelector('.area');
    const fn = event.target.getAttribute('data-fn');

    if (event.target.classList.contains('key')) {
      event.target.classList.add('active');

      if (fn === 'false') {
        this.textarea.textContent += event.target.textContent;
      }
    }
  }

  mouseUp(event) {
    if (event.target.classList.contains('key')) {
      event.target.classList.remove('active');
    }

    if (event.target.dataset.key === 'CapsLock') {
      if (event.target.classList.contains('caps')) {
        this.init(false);
      } else {
        this.init(true);
      }
    }
  }

  keyDown(event) {
    this.textarea = document.querySelector('.area');
    event.preventDefault();

    document.querySelectorAll('.key').forEach((el) => {
      const fn = el.getAttribute('data-fn');

      if (el.classList.contains(`${event.code}`)) {
        el.classList.add('active');
        console.log(event.code);

        if (fn === 'false') {
          this.textarea.textContent += el.textContent;
        } else if (event.getModifierState('CapsLock') && event.shiftKey) {
          this.init(false);
        } else if (event.getModifierState('CapsLock') || event.getModifierState('Shift')) {
          this.init(true);
        } else {
          this.init(false);
        }
      }
    });
  }

  keyUp(event) {
    document.querySelectorAll('.key').forEach((el) => {
      if (el.classList.contains(`${event.code}`)) {
        el.classList.remove('active');
      }
    });

    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !event.getModifierState('CapsLock')) {
      this.init(false);
    } else if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.getModifierState('CapsLock')) {
      this.init(true);
    }
  }
}
