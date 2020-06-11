/* eslint-disable no-console */
export default class Key {
  constructor(lang) {
    const { small, shift, keyCode } = lang;
    this.small = small;
    this.shift = shift;
    this.keyCode = keyCode;
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
      this.lang.map((e) => {
        out += `<div class='key ${e.keyCode}' data-key='${e.keyCode}'>${e.shift || e.small}</div>`;
        return out;
      });
      document.querySelector('#keyboard').innerHTML = out;
      return this;
    }

    this.lang.map((e, i) => {
      out += `<div class='key ${e.keyCode}' data-key='${e.keyCode}'>${e.small}</div>`;
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
}
