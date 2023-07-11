// Buggy Code 2

// A grocery store uses a JavaScript function to calculate discounts on
// various items. They are testing out various percentage discounts but are
// getting unexpected results. Go over the code, and identify the reason
// why they aren't getting the expected discounted prices from the function.
// Then, modify the code so that it produces the correct results.

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    this.price -= discount;

    return this.price;
  },
};

// > item.discount(20)   // should return 40
// = 40
// > item.discount(50)   // should return 25
// = 20
// > item.discount(25)   // should return 37.5
// = 15

//

/*

The `disount` method is modifying the object's `price` property every time
it is called. `this.price -= discount;` modifies the object, and this
change is reflected the next time we access the `price` property in the next
`discount` method call.

We should change this method so that it does not modify the object's price:
*/

function discountItem(item, percent) {
  let discount = item.price * percent / 100;
  return item.price - discount;
}

/* eslint no-unused-vars: */
