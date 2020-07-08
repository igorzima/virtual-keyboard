export default class Layout {
  createLayout() {
    this.title = document.createElement('p');
    this.title.classList.add('title');
    this.title.innerText = 'To switch the language use Ctrl and Alt';
    const textarea = document.createElement('textarea');
    textarea.classList.add('area');

    this.div = document.createElement('div');
    this.div.classList.add('keyboard');
    this.div.id = 'keyboard';

    document.body.append(this.title, textarea, this.div);
  }
}
