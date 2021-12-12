import Ilocalization from "./interface.localization"
export default class localizationRU implements Ilocalization {
  header = { home: 'Главная', posts: 'Посты', table: 'Таблица', about: 'О нас' }
  posts = {
    listPost: 'Список постов',
    createPost: 'Создать пост',
    sort: 'Сортировка',
    sortByTitle: 'По названию',
    sortByBody: 'По описанию',
    placeholderSearch: 'Поиск постов',
    post: {
      delete: 'Удалить',
      titlePost: 'Название',
      bodyPost: 'Описание'
    }
  }
  table = {
    title: "Люди",
    name: "Имя",
    age: "Возраст",
    position: 'Должность',
    telnumber: 'Тел. номер',
    create: "Создать"
  }
  about = {
    title: 'Какой-то текст'
  }
  dropdown = {
    menu: 'Меню',
    nightStyle: 'Ночь',
    lang: 'Язык'
  }
}


