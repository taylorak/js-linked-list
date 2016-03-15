function doublyCircularLinkedListGenerator() {
  var _head = null;

  var getHead = function() {
    return _head;
  }

  var getTail = function() {
    if(_head === null) {
      return _head;
    } else {
      return _head.prev;
    }
  }

  var add = function(value) {
    var newNode = node(value, null, null);

    if(_head === null) {
      _head = newNode;
      _head.next = _head;
      _head.prev = _head;
    } else {
      newNode.next = _head;
      newNode.prev = _head.prev;
      _head.prev.next = newNode;
      _head.prev = newNode;
    }
  }

  var get = function(number) {
    if(_head === null || number < 0) {
      return false;
    }

    current = _head;

    for(var i = 0; i < number; i++){
      if(current.next === _head) {
        return false;
      }
      current = current.next;
    }
    return current;
  }

  var remove = function(number) {
    var current = get(number);

    if(current === false) {
      return false;
    }

    if(current === _head) {
        if(current.prev === _head) {
            _head = null;
        } else {
            _head = current.next;
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
    } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

  }

  var insert = function(value, number) {
    var current = get(number);
    if(current === false) {
      return false;
    }

    var newNode = node(value, current.prev, current);
    current.prev.next = newNode;
    current.prev = newNode;

    if(current === _head) {
      _head = newNode;
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

function node(value, prev, next) {
  return {
    value: value,
    prev: prev,
    next: next
  }
}