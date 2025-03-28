class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      return "the list is empty";
    }
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.value} `;
      curr = curr.next;
    }
    return list;
  }
  reverse() {
    let prev = null;
    let next = null;
    let curr = this.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  
}
