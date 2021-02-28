
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if (matrix == undefined || matrix.length == 0) return [];

   let resultArr = [];
   
   for( let index in matrix){
       if(index % 2 == 0){
           for(let item of matrix[index]){
               resultArr.push(item);
           }
       } else{
           matrix[index].reverse();

           for(let item of matrix[index]){
               resultArr.push(item);
           }
       }
   }
   return resultArr;
}
