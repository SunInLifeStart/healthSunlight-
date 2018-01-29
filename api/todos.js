import fetch from './fetch'
import url from './url';


export function getTodos(data) {
  return fetch.post(url.todos, data)
}
var item = function (data) {
  this.title = data
  this.id = data
  this.checked = false
}
item.prototype.fetchData = function (data) {
  data.forEach(element => {
    element.checked=true
  });
  return data
}

export function test(data) {
  var _item = new item(data)
  
  return fetch.post(url.todos, data).then(result => {

    console.log(result);
    return _item.fetchData(result.todos)

  })

}
