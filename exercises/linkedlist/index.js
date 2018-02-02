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
}

module.exports = { Node, LinkedList };
