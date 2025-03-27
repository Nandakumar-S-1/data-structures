// function twosum(nums,target){
//     let map={}
//     for(let i=0;i<nums.length;i++){
//         let com=target-nums[i]

//         if(com in map){
//             return [map[com],i]
//         }
//         map[nums[i]]=i
//     }
//     return []
// }
function twosum(nums,target){
    let freq={}
    for(let i=0;i<nums.length;i++){
        let c=target-nums[i]
        for(c in nums){
            return [freq[c],i]
        }
        freq[nums[i]]=i
    }
    return []
}