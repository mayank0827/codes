function Count () {
   let Arr = [0,2,1,3,4,0,4,5,1,7]
   let countZero = 0
   let countOne = 0

   for(let i=0 ; i<=Arr.length ; i++)
   if(Arr[i] === 0 ){
    countZero++
   }else if(Arr[i] === 1){
    countOne++
   }
}

export default Count;