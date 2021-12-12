interface Ilocalization {
  header: { home: string, posts: string, table: string, about: string },
  posts: {
    listPost: string
    createPost: string
    sort: string
    sortByTitle: string
    sortByBody: string
    placeholderSearch: string
    post: {
      delete: string
      titlePost: string
      bodyPost: string
    }
  }
  table: {
    title: string,
    name: string,
    age: string,
    position: string,
    telnumber: string
    create: string
  }
  about: {
    title: string
  }
  dropdown:{
    menu: string,
    nightStyle: string,
    lang: string
  }
}
export default Ilocalization