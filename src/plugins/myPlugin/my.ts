export default class my {
  colors = {
    white: '#eee',
    darkGray: '#1a1a22ef',
  }

  darkTheme = {
    mainTextColor: this.colors.white,
    mainBgColor: this.colors.darkGray,
    postBgColor: this.colors.white,
    postTextColor: '#413c3c'
  }
  lightTheme = {
    mainTextColor: this.colors.darkGray,
    mainBgColor: this.colors.white,
    postBgColor: '#413c3c',
    postTextColor: this.colors.white,
  }

  theme = true;
  getTheme() {
    if (this.theme) {
      return this.darkTheme
    }
    return this.lightTheme
  }
  changeTheme() {
    this.theme = !this.theme;
  }

  changeTitle(title: string) {
    console.log(title);
  }
}