class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      return "List is empty";
    } else {
      let curr = this.head;
      let listVals = "";
      while (curr) {
        listVals += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listVals);
    }
  }
  
  removeFront() {
    if (this.isEmpty()) {
        return null
    }
    else{
        let value=this.head.value
        this.head=this.head.next
        this.size--
        return value
    }
  }

  removeBack(){
    if(this.isEmpty()){
        return null
    }
    
    let value=this.tail.value
    if(this.size==1){
        this.head=null
        this.tail=null
    }
    else{
        this.tail=this.tail.prev
        this.tail.next=null
    }
    this.size--
    return value
  }

  reverse(){
    let curr=this.head
    let temp=null

    while(curr){
        temp=curr.prev
        curr.prev=curr.next
        curr.next=temp
        curr=curr.prev
    }
    if(temp){
        this.tail=this.head
        this.head=temp.prev
    }
  }

}

let list = new DoublyLinkedList();
list.append(5);
list.prepend(8);
list.append(50);
list.prepend(80);
list.append(500);
list.prepend(800);
console.log(list.getSize());
list.print();
list.removeFront()
list.print()
console.log(list.getSize());
list.removeBack()
list.print()
console.log(list.getSize());