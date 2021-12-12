import localizationRU from "./localizationRU"
import localizationEN from "./localizationEN"
export default class localizationDefault {
  langRu = true;
  langEn = false;
  default = new localizationRU()
  private Default = 'Русский'

  constructor() {
    Object.assign(this, this.default);
  }

  switchState() {
    this.langRu = !this.langRu;
    this.langEn = !this.langEn;
  }

  setLangRu() {
    this.default = new localizationRU();
  }
  setLangEn() {
    this.default = new localizationEN();
  }

  switchLang() {
    this.switchState();
    if (this.langRu) {
      this.setLangRu()
    } else if (this.langEn) {
      this.setLangEn()
    }
  }

  switchLangSelect(lang: string) {
    if (lang == 'ru') {
      this.setLangRu()
    }
    else if (lang == 'en') [
      this.setLangEn()
    ]
  }
}


