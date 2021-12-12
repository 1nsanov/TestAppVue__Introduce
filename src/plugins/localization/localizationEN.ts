import Ilocalization from "./interface.localization"
export default class localizationEN implements Ilocalization {
  header = { home: 'Home', posts: 'Posts', table: 'Table', about: 'About' }
  posts = {
    listPost: 'List posts',
    createPost: 'Create post',
    sort: 'Sort',
    sortByTitle: 'By name',
    sortByBody: 'By description',
    placeholderSearch: 'Seatch posts',
    post: {
      delete: 'Delete',
      titlePost: 'Name',
      bodyPost: 'Description'
    }
  }
  table = {
    title: "People",
    name: "Name",
    age: "Age",
    position: 'Position',
    telnumber: 'Tel number',
    create: "Create"
  }
  about = {
    title: 'Something text'
  }
  dropdown = {
    menu: 'Menu',
    nightStyle: 'Night',
    lang: 'Language'
  }
}



