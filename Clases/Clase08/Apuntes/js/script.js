// MAP
// Recibe como parametro una funcion, no altera el array original
let nums = [1,2,3,4,5,6],
    numSqrt = [];
for(let i=0; i<nums.length; i++){
    numSqrt[i] = nums[i] * nums[i];
}

nums.map(function(num){
    return num * num;
})

// FILTER
// Devuelve un array conducido con las caracteristicas especificadad

let numFiltered = [],
    j = 0;
for(let i=0; i<nums.length; i++){
    if(nums[i]>3){
        numFiltered[j] = nums[i];
        j++;
    }
}

nums.filter(function(num){
    return num>3;
})

// REDUCE
// Devuelve un valor

