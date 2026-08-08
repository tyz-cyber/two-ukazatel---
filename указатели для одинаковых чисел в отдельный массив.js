
let array = [9,6,3,7,4,8,3,7,9];
let array1 = []
for(let x = 0;x < array.length - 1;x++){
    let xy = x;
    for(let y = x+1; y < array.length; y++){
        if(array[y] === array[xy]){
           array1.push(array[xy])

        }
    
    }
    
    

}
console.log(array1)
