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
