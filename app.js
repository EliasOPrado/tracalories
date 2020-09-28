// Storage Controller


// Item Controller
const ItemCtrl = (function(){
    // Item constructor
    const item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.cakories = calories;
    }

    // Data Structure / State
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Egg', calories: 200}
        ],
        currentItems: null,
        totalCalories: 0
    }
    // making public
    return {
        logData: function(){
            return data;
        }
    }
})();

// UI Controller 
const UICtrl = (function(){

    return {
        
    }
})();


// App Controller
const App = (function(ItemCtrl, UICtrl){

    // Making public
    return {
        init: function(){
            console.log('Initializing App...');
        }
    }

})(ItemCtrl, UICtrl);

// Intialize app
App.init();
