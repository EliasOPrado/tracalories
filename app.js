// Storage Controller


// Item Controller
const ItemCtrl = (function(){
    // Item constructor
    const Item = function(id, name, calories){
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
        addItem: function(name, calories){
            let ID
            // create id
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1; // ?
            } else {
                ID = 0;
            }
            // calories to number
            calories = parseInt(calories);

            // create new item
            newItem = new Item(ID, name, calories);

            // add to items array
            data.items.push(newItem);

            return newItem;
        },
        logData: function(){
            return data;
        }
    }
})();

// UI Controller 
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
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
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories:  document.querySelector(UISelectors.itemCaloriesInput).value,

            }
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
})();


// App Controller
const App = (function(ItemCtrl, UICtrl){
    // load event listeners
    const loadEventListeners = function(){
        // get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
    }

    // add item submit
    const itemAddSubmit = function(e){
        // get form input from ui controler
        const input = UICtrl.getItemInput();
        
        // check for name and clories input
        if(input.name !== '' && input.calories !== ''){
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

        }

        e.preventDefault();
    }
    


    // Making public
    return {
        init: function(){
            console.log('Initializing App...');
            // fetch item from data structure
            const items = ItemCtrl.getItems();

            // populate list with items
            UICtrl.populateItemList(items);

            // load event listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);

// Intialize app
App.init();
