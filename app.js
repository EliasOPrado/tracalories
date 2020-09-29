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
        // making data public
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();

// UI Controller 
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list'
    }

    return {
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item){
                html += `
                <li id="item-${item.id}" class="collection-item">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="" class="secondary-content">
                     <i class="edit-item fa fa-pencil"></i>
                 </a>
             </li>
                `;
            });

            // insert list items
            // will change the html id by the UISelectors that has the class
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();


// App Controller
const App = (function(ItemCtrl, UICtrl){

    // Making public
    return {
        init: function(){
            console.log('Initializing App...');
            // fetch item from data structure
            const items = ItemCtrl.getItems();

            // populate list with items
            UICtrl.populateItemList(items);
        }
    }

})(ItemCtrl, UICtrl);

// Intialize app
App.init();
