const minMax=(arr=[],cond)=>{
    arr.sort((a,b)=>a-b)
    if(cond=='min'){
        return arr[0]
    }else{
        return arr[arr.length-1]
    }
}
console.log(minMax([200,100,1,3,2,6],'max'))


//contoh callback
// const testcb=(bebas)=>{
//     var a=bebas()
//     return 'ini '+a    
// }
// const cb1=()=>{
//     return 'bobi'
// }const cb2=()=>{
//     return 'ragiel'
// }
