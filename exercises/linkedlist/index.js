// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size += 1;
      node = node.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while(node.next.next) {
      node = node.next;
    }
    node.next = null;
  }
  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next
      counter += 1;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    let counter = 1;
    let prev = this.head;
    let node = this.head.next;
    while (node) {
      if (counter = index) {
        prev.next = node.next;
        return;
      }
      prev = node;
      node = node.next;
      counter += 1;
    }
    return null;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let node = this.getAt(index-1);
    if (!node) {
      this.insertLast(data);
      return;
    }
    node.next = new Node(data, node.next);
  }
  forEach(fn) {
    if (!this.head) {
      return;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      fn(node, counter);
      counter += 1;
      node = node.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
