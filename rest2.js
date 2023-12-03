function sum(...num) {
    let tSum= 0;
    for(let i=0; i<num.length;i++){
        
      tSum= num[i]+tSum;
    }
    
    return tSum;
}

console.log(sum(1, 2, 3, 4, 5));