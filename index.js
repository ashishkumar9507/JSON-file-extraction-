const arr = require('./food.json');

//list all the food items
function show(arr){
    arr.forEach(element => {
        console.log(element);
    });
}

//list all the food items with category vegetables
function vegetables(arr){
    const result= arr.filter(item => 
        item.category == 'Vegetable'
    );
    console.log(result);
}

// list all the food items with category fruit

function fruits(arr){
    const result= arr.filter(item => 
        item.category == 'Fruit'
    );
    console.log(result);
}

//list all the food items with category protien

function protein(arr){
    const result= arr.filter(item => 
        item.category == 'Protein'
    );
    console.log(result);
}

//list all the food items with category nuts
function nuts(arr){
    const result= arr.filter(item => 
        item.category == 'Nuts'
    );
    console.log(result);
}


//list all the food items with category grains

function grains(arr){
    const result= arr.filter(item => 
        item.category == 'Grain'
    );
    console.log(result);
}

//list all the food items with category dairy
function dairy(arr){
    const result= arr.filter(item => 
        item.category == 'Dairy'
    );
    console.log(result);
}

//list all the food items with calorie above 100
function calAbv100(arr){
    const result= arr.filter(item => 
        item.calorie > 100
    );
    console.log(result);
}

//list all the food items with calorie below 100
function calBlw100(arr){
    const result= arr.filter(item => 
        item.calorie < 100
    );
    console.log(result);
}

//list all the food items with highest protien content to lowest
function proteinDesc(arr){
    const newArr= arr.sort(function(a,b){
        return b.protiens - a.protiens
    })
    console.log(newArr);
}

//list all the food items with lowest cab content to highest
function proteinAsc(arr){
    const newArr= arr.sort(function(a,b){
        return a.cab - b.cab
    })
    console.log(newArr);
}
