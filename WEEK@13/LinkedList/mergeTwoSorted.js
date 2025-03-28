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
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      return "List is Empty";
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      return listValues.trim();
    }
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  merge(l1,l2){
    let mergeList=new LinkedList()
    let c1=l1.head
    let c2=l2.head

    while(c1 && c2){
        if(c1.value<c2.value){
            mergeList.append(c1.value)
            c1=c1.next
        }else{
            mergeList.append(c2.value)
            c2=c2.next
        }
    }
    while(c1){
        mergeList.append(c1.value)
        c1=c1.next
    }
    while(c2){
        mergeList.append(c2.value)
        c2=c2.next
    }
    return mergeList
  }

}
