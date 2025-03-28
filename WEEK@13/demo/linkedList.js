class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    //O(1) constant
    prepend(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    // O(n)  liniar 
    append(value){
        const node =new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            let previous=this.head
            while(previous.next){
                previous=previous.next
            }
            previous.next=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('the list is currently empty');
            
        }else{
            let current=this.head
            let listValues=''
            while(current){
                listValues += `${current.value} `
                current=current.next
            }
            console.log(listValues);
        }
    }   

    insert(value,index){
        if(index<0 || index>this.size){
            return "Invalid index"
        }
        if(index==0){
             this.prepend(value)
        }else{
            const node = new Node(value)
            let prev=this.head

            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedNode
        if(index==0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }



    removeValue(value){
        if(this.isEmpty()){
            return -1
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev =this.head
            while(prev.next && prev.next.value !==value){
                prev=prev.next
            }
            if(prev.next){
                let removedNode = prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
            return null
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let index=0
        let current=this.head
        while(current){
            if(current.value==value){
                return index
            }
            current=current.next
            index++
        }
        return `${value} not found`
    }

    reverse(){
        let prev=null
        let curr=this.head
        this.tail=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }

    removeMiddle(){
        if(this.isEmpty()){
            return null
        }
        let slow=this.head
        let fast=this.head
        let prev=null

        if(fast !==null && fast.next !=null){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        if(prev==null){
            this.head=this.head.next
        }else{
            prev.next=slow.next
        }
        this.size--
        return slow.value
    }

    removeMiddleBySize(){
        if(this.isEmpty){
            return null
        }else{
            let middle =Math.floor(this.size/2)
            if(middle==0){
                this.head=this.head.next
            }
            else{
                let prev=this.head
                for(let i=0;i<middle-1;i++){
                    prev=prev.next
                }
                prev.next=prev.next.next
            }
            this.size-- 
        }
    }

}


const list=new LinkedList()
list.append(10)
list.append(20)
list.append(50)
list.append(60)
list.append(40)
list.print()
console.log(list.search(90));
list.reverse()

list.print()