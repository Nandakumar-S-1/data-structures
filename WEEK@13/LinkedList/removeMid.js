// middle(){
//     if(this.isEmpty()){
//       return null
//     }
//     let middle=Math.floor(this.size/2)
//     if(middle==0){
//       this.head=this.head.next
//     }else{
//       let prev=this.head
//       for(let i=0;i<middle-1;i++){
//         prev=prev.next
//       }
//       prev.next=prev.next.next
//     }
//     this.size--
//   }