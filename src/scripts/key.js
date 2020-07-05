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
        out += `<div class='key ${e.keyCode}' data-key='${e.keyCode}' data-fn='${e.fn}'>${e.shift || e.small}</div>`;
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

    this.keyboard.addEventListener('mousedown', this.clickOnKey);
    this.keyboard.addEventListener('mouseup', this.removeClickOnKey);
    document.addEventListener('keydown', this.pushKey);
    document.addEventListener('keyup', this.removePushKey);
  }

  clickOnKey(event) {
    this.textarea = document.querySelector('.area');
    const fn = event.target.getAttribute('data-fn');

    if (event.target.classList.contains('key')) {
      event.target.classList.add('active');

      if (fn === 'false') {
        this.textarea.textContent += event.target.textContent;
      }
    }
  }

  removeClickOnKey(event) {
    if (event.target.classList.contains('key')) {
      event.target.classList.remove('active');
    }
  }

  pushKey(event) {
    this.textarea = document.querySelector('.area');
    const fn = event.target.getAttribute('data-fn');

    document.querySelectorAll('.key').forEach((el) => {
      if (el.classList.contains(`${event.code}`)) {
        el.classList.add('active');

        if (fn === 'false') {
          this.textarea.textContent += el.textContent;
        }
      }
      return el;
    });
  }

  removePushKey(event) {
    document.querySelectorAll('.key').forEach((el) => {
      if (el.classList.contains(`${event.code}`)) {
        el.classList.remove('active');
      }
      return el;
    });
  }
}
