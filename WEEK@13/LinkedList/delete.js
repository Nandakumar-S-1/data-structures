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
  
  print() {
    if (this.isEmpty()) {
      return "List is empty";
    }
    let curr = this.head;
    let listVals = "";

    while (curr) {
      listVals += `${curr.value} `;
      curr = curr.next;
    }
    return listVals;
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

// return removed
  deleteByIndex(index) {
    if (index < 0 || index >= this.size) {
      return "invalid index";
    }
    let rem;
    if (index == 0) {
      rem = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      rem = prev.next;
      prev.next = rem.next;
    }
    this.size--;
    return rem.value;
  }

  deleteByValue(value){
    if(this.isEmpty()){
        return "list is empty"
    }
    if(this.head.value==value){
        this.head=this.head.next
        this.size--
        return value
    }else{
        let prev=this.head
        while(prev.next && prev.next.value !== value){
            prev=prev.next
        }
        if(prev.next){
            let rem=prev.next
            prev.next=rem.next
            this.size--
            return rem.value
        }
        return "value not found"
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
        return "Invalid index";
    }
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
}

// Delete element by value (first occurrence)
// deleteByValue(value) {
//     if (this.isEmpty()) {
//         return "List is empty";
//     }
//     if (this.head.value === value) {
//         this.head = this.head.next;
//         this.size--;
//         return;
//     }
//     let curr = this.head;
//     while (curr.next && curr.next.value !== value) {
//         curr = curr.next;
//     }
//     if (!curr.next) {
//         return "Value not found";
//     }
//     curr.next = curr.next.next;
//     this.size--;
// }
    // Remove nth node from the end
removeNthFromEnd(n) {
      if (n <= 0 || n > this.size) {
          return "Invalid n";
      }
      let fast = this.head;
      let slow = this.head;
      for (let i = 0; i < n; i++) {
          fast = fast.next;
      }
      if (!fast) {
          this.head = this.head.next;
          this.size--;
          return;
      }
      while (fast.next) {
          slow = slow.next;
          fast = fast.next;
      }
      slow.next = slow.next.next;
      this.size--;
  }
  // Remove duplicates from an unsorted linked list
  removeDuplicates() {
      if (this.isEmpty()) return;
      let seen = new Set();
      let curr = this.head;
      let prev = null;
      while (curr) {
          if (seen.has(curr.value)) {
              prev.next = curr.next;
              this.size--;
          } else {
              seen.add(curr.value);
              prev = curr;
          }
          curr = curr.next;
      }
  }

  middle(){
    if(this.isEmpty()){
      return null
    }
    let middle=Math.floor(this.size/2)
    if(middle==0){
      this.head=this.head.next
    }else{
      let prev=this.head
      for(let i=0;i<middle-1;i++){
        prev=prev.next
      }
      prev.next=prev.next.next
    }
    this.size--
  }

}

let list = new LinkedList();

for (let i = 0; i <= 10; i++) {
  list.append(i);
}
console.log(list.print());
list.middle();
console.log(list.print());
