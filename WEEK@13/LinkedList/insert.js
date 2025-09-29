class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class LL{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            return 'list is empty'
        }else{
            let curr=this.head
            let list=``
            while(curr){
                list+=`${curr.val}=>`
                curr=curr.next
            }
            return list
        }
    }
    prepend(val){
        let node=new Node(val)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(val){
        let node=new Node(val)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    insertAtIndex(val,ind){
        if(ind<0 || ind>this.getSize()){
            console.log('invalid index')
            return
        }
        if(ind===0){
            this.prepend(val)
        }else{
            let node=new Node(val)
            let prev=this.head
            for(let i=0;i<ind-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    insertAfterIndex(val,ind){
        if(ind<0||ind>this.getSize()){
            console.log('invalid index')
            return
        }else{
            let node=new Node(val)
            let curr=this.head
            for(let i=0;i<ind;i++){
                curr=curr.next
            }
            node.next=curr.next
            curr.next=node
            this.size++
        }
    }
    insertBeforeInd(val,ind){
        if(ind<0||ind>this.getSize()){
            console.log('invalid index')
            return
        }
        if(ind===0){
            this.prepend(val)
        }else{
            let node=new Node(val)
            let prev=this.head
            for(let i=0;i<ind-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    insertAfterVal(val,target){
        if(this.isEmpty()){
            console.log(`list is empty`)
            return
        }else{
            let curr=this.head
            while(curr){
                if(curr.val===target){
                    let node=new Node(val)
                    node.next=curr.next
                    curr.next=node
                    this.size++
                    return
                }
                curr=curr.next
            }
        }
        console.log('value not found in ll')
        return
    }
}
let ll = new LL()

let i=1
while(i<=5){
    ll.prepend(i)
    ll.append(i+1)
    i++
}

console.log('base list\n',ll.print())
// ll.insertAtIndex(15,8)
// console.log('insertAtIndex\n',ll.print())

// ll.insertAfterIndex(20,2)
// console.log('insertAfterIndex\n',ll.print())

// ll.insertBeforeInd(30,2)
// console.log('insertBeforeInd\n',ll.print())

// ll.insertAfterVal(70,44)
// console.log('insertAfterVal\n',ll.print())










