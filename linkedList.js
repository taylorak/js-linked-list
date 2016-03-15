/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var _head = null;
  var _tail = null;

  var getHead = function() {
    return _head;
  }

  var getTail = function() {
    return _tail;
  }

  var add = function (value) {
    var newNode = node(value, null);

    if(_head === null) {
      _head = newNode;
      _tail = newNode;
    } else {
      _tail.next = newNode;
      _tail = newNode;
    }
    return _tail;
  }

  var get = function(number) {

    if(_head === null || number < 0) {
      return false;
    }

    var current = _head;
    for(var i = 0; i < number; i++){
      if(current.next === null) {
        return false;
      }
      current = current.next;
    }
    return current;
  }

  var remove = function(number) {

    var prevNode = get(number - 1);
    var currentNode = get(number);

    if(currentNode === false) {
      return false;
    } else if(prevNode === false) {
      if(currentNode.next === null) {
        _head = null;
        _tail = null;
      } else {
        _head = currentNode.next;
      }
    } else if(currentNode.next === null) {
      prevNode.next = null;
      _tail = prevNode;
    } else {
      prevNode.next = currentNode.next;
    }
  }

  var insert = function(value, number) {
    var prevNode = get(number -1);
    var currentNode = get(number);

    if(currentNode === false) {
      return false;
    } else if(prevNode === false) {
      var newNode = node(value, currentNode);
      _head = newNode;
    } else {
      var newNode = node(value, currentNode);
      prevNode.next = newNode;
    }

  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }
}

function node(value, next) {
  return {
    value: value,
    next: next
  }
}