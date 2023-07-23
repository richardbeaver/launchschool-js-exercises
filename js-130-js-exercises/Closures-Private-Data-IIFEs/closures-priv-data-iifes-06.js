// Mini Inventory Management System

// In this exercise, you'll build a simple inventory management system. The
// system is composed of an item creator, an items manager, and a reports
// manager. The item creator makes sure that all necessary information are
// present and valid. The item manager is responsible for creating items,
// updating information about items, deleting items, and querying information
// about the items. Finally, the report manager generates reports for a
// specific item or ALL items. Reports for specific items are generated
// from report objects created from the report manager. The report manager
// is responsible for reports for all items.

// Component Specifications

// Here's all the required information for an item:

// - SKU code: This is the unique identifier for a product. It consists of the
//   first 3 letters of the item and the first 2 letters of the category. If
//   the item name consists of two words and the first word consists of two
//   letters only, the next letter is taken from the next word.
// - Item name: This is the name of the item. It must consist of a minimum of
//   5 characters. Spaces are not counted as characters.
// - Category: This is the category that the item belongs to. It must consist
//   of a minimum of 5 characters and be only one word.
// - Quantity: This is the quantity in stock of an item. This must not be blank.
//   You may assume that a valid number will be provided.

// The following are the methods that the items manager can perform:

// - create: This method creates a new item. Returns false if creation is not
//   successful.
// - update: This method accepts an SKU Code and an object as an argument and
//   updates any of the information on an item. You may assume valid values
//   will be provided.
// - delete: This method accepts an SKU Code and deletes the item from the list.
//   You may assume a valid SKU code is provided.
// - inStock: This method list all the items that have a quantity greater
//   than 0.
// - itemsInCategory: This method list all the items for a given category
// - items: This property contains a list of all the items.

// The following are the methods on the reports managers:

// - init: This method accepts the ItemManager object as an argument and
//   assigns it to the items property.
// - createReporter: This method accepts an SKU code as an argument and
//   returns an object.
//   - The returned object has one method, itemInfo. It logs to the console
//     all the properties of an object as "key:value" pairs (one pair per line).
//     There are no other properties or methods on the returned object (except
//     for properties/methods inherited from Object.prototype).
// - reportInStock: Logs to the console the item names of all the items that
//   are in stock as a comma separated values.

// Notes:

// - There's no need to add the ability to validate the uniqueness of the SKU
//   code. Given the current description, it's possible that a duplicate will
//   exist.
// - Each required piece of information for an item corresponds to one property.
// - If any of the required information provided is not valid, the item creator
//   returns an object with a notValid property with a value of true.
// - The created item objects should not have any methods/properties on them
//   other than the required information above and those inherited from
//   Object.prototype.
// - You may add methods to the item manager as you deem necessary.

// Here is a sample run that you can use as a reference:

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from
// the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

//

const ItemCreator = (function() {
  function removeSpaces(string) {
    return string.split('').filter((char) => char !== ' ').join('');
  }

  function itemNameValid(itemName) {
    return removeSpaces(itemName).length >= 5;
  }

  function categoryValid(category) {
    return category.length >= 5 && category.split(' ').length === 1;
  }

  function quantityProvided(quantity) {
    return quantity !== undefined;
  }

  function generateSKUCode(itemName, category) {
    return (removeSpaces(itemName).slice(0, 3).toUpperCase() +
            removeSpaces(category).slice(0, 2).toUpperCase());
  }

  // When using `ItemCreator` with the `new` keyword, we use this function as
  // a constructor
  return function(itemName, category, quantity) {
    if (
      !itemNameValid(itemName)
      || !categoryValid(category)
      || !quantityProvided(quantity)
    ) {
      return { notValid: true };
    }

    this.skuCode = generateSKUCode(itemName, category);
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
  };
})();

//

const ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    }
    this.items.push(item);
  },

  update(skuCode, itemInfoObject) {
    let item = this.getItem(skuCode);
    Object.assign(item, itemInfoObject);
  },

  delete(skuCode) {
    let index = this.items.indexOf(this.getItem(skuCode));
    this.items.splice(index, 1);
  },

  inStock() {
    return this.items.filter((item) => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter((item) => item.category === category);
  },

  getItem(skuCode) {
    return this.items.find((item) => item.skuCode === skuCode);
  },
};

//

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.entries(item).forEach((entry) => {
          let [ key, value ] = entry;
          console.log(`${key}: ${value}`);
        });
      },
    };
  },

  reportInStock() {
    let itemNames = this.items.inStock().map((item) => item.itemName);
    console.log(itemNames.join(', '));
  },
};
