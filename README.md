<!-- # Lab 06: Products

Today we will be starting a new project, with basic elements of
an e-commerce site including a product page and shopping cart. Decide your product domain and follow repository setup guide, giving your repository a relevant name related to the product.

## Topic

Pick a real or fictitious product, up to you. You will ultimately need to come up with (at least) the following for each product:

Property | Description
---|---
`id` | a unique string that identifies this product
`name` | user friendly name of the product
`image` | image file name for this image (should live in `assets`)
`description` | a longer description of the product
`category` | the category this product belongs to, limit to one
`price` | the price the user will pay

## Pages

The primary focus today is the product page (`products`). However, you should slot in a simple home page (`index.html`), which should have a link to the product page.

You should also have `common/main.css` used by all pages, as well as a page-specific css page (like `products/products.css`).

## Product Page

The goal for today is to generate a list of products from product data.

### Step 1: Design List

Work out the static design for one product in your list. This will help you to flush out what data will be needed. Make sure to include an "Add" button whose value is the product `id`.

**git add, commit, push!**

### Step 2: Product Data

In a new JavaScript file, named by the domain (class example was `fruits.js`):

1. Write out object literals for each product, storing in a variable with same name as product `id`. These objects are key/value pairs whose values uniquely describe each product. All products should have _exactly_ the same keys!
2. Create a variable that is an array of all of your products
3. Export this array.

**git add, commit, push!**

### Step 3: TDD DOM Render Function

Write a test that passes a product to a function and asserts that the return dom with `.toOuterHTML` matches your static html example:
1. Copy html from the page
1. You will need to remove extraneous whitespace. Don't worry, you can adjust the test as need
1. Copy the object product data for the one that corresponds to the example, and use as your input to your function
1. Using the DOM API, create your static example _programmatically_
using JavaScript. Start by creating the top level element (`<li>` for the product list)
1. Make the test pass! (Again, you may need to adjust html syntax - pay close attention to test details)

**git add, commit, push!**

### Step 4: Generate Product List

In your `products.js`, you will need to:
1. import your data and your DOM generation function
2. locate the list element where your products will go
3. loop through your data
    1. Create a variable that is the singular of your domain list and assign based on the current array index. For example, `const fruit = fruits[i];`
    1. Pass to your DOM generation function and capture result in variable
    1. Append to the top-level list element

**git add, commit, push!**

---

## Points Break Down

Looking For | Points (10)
:--|--:
Hosted on GitHub with URL in About section, Product HTML works and uses good Semantic Element choices  | 2 
CSS used consciously and correctly | 1
Products Object Literals and Array of all Products | 2
TDD DOM Render Function | 3
Correctly orchestrate product generation in `products.js` using a for loop and your render function | 2 

# Class 07: Find, Math and Calculations

### Warm-up: Increment function

## Agenda

1) Data modeling the cart
1) Find by Id
1) `renderTableRow`

## Warm up: `findById`

## Data modeling

- Yesterday, we modeled data for a piece of fruit, coming up with just the right list of key/value pairs (not too many, not too few) to represent a piece of fruit, as it pertains to our app. 
- Here is a model for a shopping cart, which is an array of abstract ShoppingCartItems. Try and figure out what the data model is trying to represent.

```js
const cart = [{
    id: 'apple',
    quantity: 2
}, {
    id: 'banana',
    quantity: 5
}, {
    id: 'mango',
    quantity: 1
}, {
    id: 'orange',
    quantity: 10
}];

```

## findById and relational data

-Our cart item model is pretty thin: it tells us nothing about the price of an apple, for example.

-So how do we find the price of an apple? We use the id!
- Becuase our data model includes IDs, we can look at our fruits array in order to find the missing piece of the puzzle.
- Here is an example of us using a shopping cart item to find more information:

```js
// our cart item doesn't have a price, just an id and quantity
const cartItem = {
    id: 'mango',
    quantity: 1
};

// that means we need to loop through the fruits
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    // and find a matching id
    if (fruit.id === cartItem) {
        // if we want to know the price of a mango
        console.log('a mango costs this much: ', fruit.price);
    }
}
```

Because we need more than one model to get the whole picture, this data is called **'relational'**. Cart items 'have' a fruit that they are 'related' to.

## HTML Tables

Consider the following table:

```js
<table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Subtotal</th>
  </tr>
  <tr>    
    <td>Apple</td>
    <td>$1.50</td>
    <td>3</td>
    <td>$4.50</td>
  </tr>
  <tr>
    <td>Banana</td>
    <td>$1</td>
    <td>2</td>
    <td>$2</td>
  </tr>
</table>
```

Consider: 
    - If we wanted to loop over all of our cart items and make a table row for each cart item, what HTML elements would we want to create for each cart item? 
    - Since our cart doesn't have access to the price, how are we supposed to find the price?

**Demo**

# Lab 07: Shopping Cart

## Goal

Add a new Shopping Cart page to the e-commerce app. It uses an HTML table to show `cart` data including lookup of product info and calculation of line item and order totals

---

## Learning Objectives
- Plan and implement a data model for a shopping cart
- Use a for loop to get access a particular item in an array, given an `id`
- Write, test, and use a function that takes an array and an id, and returns the item in the array with the matching id.
- Write, test, and use a function that takes a shopping cart item, and returns a `<tr>` for a table.
- Write, test, and use a function that takes in a shopping cart item and calculates the total price of a single item in the cart, based on its quantity.
- Write, test, and use a function that takes an array of shoppinfg cart items and calculates the total price of all the items in the cart.
- Munge together two relational data models (cart items and products)

---

## Shopping Cart

The shopping cart data is an array where each object contains the `id` of the product and quantity ordered.

Property | Description
---|---
`id` | product that this line item refers to
`quantity` | how many of the product are being ordered

## Shopping Cart Page

The goal for today is to generate a table with the quantity, product name, and line item total, plus an overall order total for all products in the cart.

### Step 1: Design Cart

Work out the static design for the cart table. It should show the quantity, product name and line item total on each row. The footer should have the order total.

Also add a "Place Order" button on the page.

**git add, commit, push!**

### Step 2: Cart Data

In a new JavaScript file, `/data/cart.js`:

1. Write out an array literal that contains object literals for a few items ordered in the cart (see in class example).
3. Export this array.

**git add, commit, push!**

### Step 3: TDD `findById` Function

TDD for a function that lives in `/utils.js` called `findById`. This function takes an array and an id, and returns the first item found that has an `.id` property that matches the passed in id. It can return `null` if no match is found.

z

### Step 5: TDD DOM Render Function

TDD for a function that lives in `/shopping-cart/render-line-items.js`. This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example:
1. Copy html from the page
1. You will need to remove extraneous whitespace. Don't worry, you can
adjust the test as need
1. Copy the cart line item data for the one that corresponds to the example, and either copy the product or use your `findById` function to locate the product and use as your input to your function
1. Using the DOM API, create your static example _programmatically_
using JavaScript. Start by creating the top level element (`<tr>` for the line item)
1. Make the test pass! (Again, you may need to adjust html syntax - pay close attention to test details)

**git add, commit, push!**

### Step 4: Generate Shopping Cart

In your `/shopping-cart/shopping-cart.js`, you will need to:
1. Import your data (both cart and products), DOM generation function, and any needed utility functions
2. locate the `tbody` element where your line items will go
3. loop through your data
    1. Create a variable based on the current array index.
    1. Use your `findById` function to find the corresponding product for this line item
    1. Pass these to your DOM generation function and capture result in variable
    1. Append to the table body (`tbody`)

**git add, commit, push!** -->

<!-- ### Step 5: TDD CalcOrderTotal

TDD for a function that lives in `/utils.js` called `calcOrderItem`. This function takes the cart array and products array. Calculate the total of your cart data as the expected value.

In the function:
1. Create a variable to hold the order total. 
1. Loop the line items and use the `calcLineItem` function to calculate each line item and add it to the order total. 
1. Return the order total
1. Note: you may need to round the order total to 
get your test to pass like you did with the line item total

### Step 6: Add Order Total to Table

In `/shopping-cart/shopping-cart.js`:

1. import the `calcOrderTotal` function
1. Use the function to calculate the cart total and
display the result in the appropriate element.

---

## Points Break Down

Looking For | Points (10)
:--|--:
Hosted on GitHub with URL in About section, Product HTML works and uses good Semantic Element choices  | 2 
CSS used consciously and correctly | 1
TDD `calcCaertItemTotal` and `calcOrderTotal` | 2
TDD DOM Render Function | 3
Correctly orchestrate product row generation in `shopping-cart.js` | 2  -->

<!-- # Lab 08: Data Persistence

## Goal

Today we are going to save our data and share it between our product page and our shopping cart page.

We won't be adding much new presentation, this will largely be "under the hood" JavaScript work.

---

## Learning Objectives
- Use localStorage to share data 1) persistently and 2) between different pages
- Use `JSON.parse` and `JSON.stringify` to manage localStorage data
- Use localStorage instead of hard-coded JSON to store your cart data
- Manage the complexity of initializing data in the cart if it doesn't yet exist in localStorage
- Manage the complexity of initizaling a cart item in the array if it doesn't exist in the array
- Manage the complexity of adding a _second instance of the same product_ to the cart array
- Dynamically create event listeners on the product page that add items to local storage

--

## New Branch

Make sure to work on a new branch!

## Goal

The goal is to have the "Add" button on each product add an instance of that product to the shopping cart. The shopping cart will be saved and retrieved from local storage.

### Step 1: Add Product to Shopping Cart

In the code the renders a product, add an event listener to the "Add" button.

This event handler will need to handle the following tasks:

1. Retrieve the existing shopping cart from localStorage
    1. If there is no cart in data in localStorage, use an empty array: `[]`
    1. If there is cart data in localStorage, turn into array using `JSON.parse`
1. Check if the shopping cart already has the line item for this product. You can reuse your `findById` function for this taks.
    1. If it does exist, increment the quantity.
    1. If it does not exist create a new line item with the following format:
        ```js
        const lineItem = {
            id: <product-id>,
            quantity: 1
        };
        ```
1. Save the modified cart array back to localStorage, remembering to serialize with `JSON.stringify` before saving

### Step 2: Get Shopping Cart from localStorage on Shopping Cart Page

Instead importing a hard-coded cart data, retrieve the shopping cart from localStorage (don't forget to `JSON.parse`!) and use it in rendering the table.

### Step 3: Place Order 

1. If there are no line items in the cart, disable the "Place Order" button.
1. Add an event handler to the "Place Order" button that:
    1. Displays an `alert` with the contents of the cart (hint: `JSON.stringify(cart, true, 2)` will give you nicely formatted `JSON`)
    1. Remove the cart from localStorage (`.removeItem`)
    1. Redirect the user back to the home page

### STRETCH: Add Quantity of Products

Add a quantity drop-down to the rendered product. When the "Add" button is clicked, add the indicated amount of product to the quantity.

### STRETCH: Move Data Work to Function

Create a module called `cart-api.js`. Export a function for each of the specific data tasks below. You already have the correct code, remove it into these functions and change existing code to import and use these new functions instead:

1. `getCart`
1. `addToCart`
1. `clearCart`

---

## Points Break Down

Looking For | Points (10)
:--|--:
Hosted on GitHub with URL in About section | 1
Add product to cart (addEventListener in render product) | 4
Load cart on shopping cart page | 3
Place order with alert, remove cart, and redirect | 2
Add Quantity to product page | +1
TDD `getCart`, `clearCart`, and `setCart` functions for `cart-api.js` | +1 -->

# Lab 09: Product Entry

## Goal

Add a new page that allows entry of a new product.

---

## Learning Objectives
- Use localStorage instead of hard-coded JSON to store and access your product data (but still initialize localStorage from hard coded JSON)
- Write impure functions to manage the complexity of getting and setting data in localStorage
- Use `new FormData(formElement)` in a submit handler to easily manage multiple input fields as once.
- Use `event.target` and `event.preventDefault` in an event handler callback

---

## New Branch

Make sure to work on a new branch!

## Feature

This lab is an exercise in following similar patterns from prior days labs. Plus the addition of
using an HTML Form.

### Step 1: Design Product Entry Page

This `product-entry.html` page should have a form with all the necessary data for adding a product.

Because this is not a list of data, you can place the form statically on the page and give the form
an id.

Also, add links to all pages (and on all pages) in the header so it's easy to navigate your site.

### Step 2: TDD API Method for Add Product

Add a new, tested function `addProduct` as a util function. It takes a product object as a parameter and puts the product into the correct place in localStorage.
Your test should add a product, then retrieve all the products and assert deep Equal the last item
in the array and the supplied new product.

Your function will need to:

1. Retrieve the existing products array
1. Push the new product into the array
1. Re-save the products array into localStorage

Your test will:
1. Add the product using your function
1. Examine the PRODUCT notch in localStorage. Use deepEqual to check that the product is now in localStorage.

### Step 3: Form Submit Event

In your `product-entry.js`:

1. Get a reference to the form
1. Subscribe to the `submit` event
1. Don't forget to call `event.preventDefault()`!
1. Create a `new FormData` object passing in the form
1. Make a new product object from the formData (i.e. `form.get`)
1. Call your new store `addProduct` function with the object.
1. Reset the form

### STRETCH Step 4: Remove a Product

1. On the product entry page, also render a list of products with a remove button by each one.
1. Add a function `removeProduct` that takes a product code. In that method, find the product and remove from the product array.
1. Use this funtion to remove an item on an appropriate click;

BONUS: When adding a product, also renderer a new list items add it to the list of products.

---

## Points Break Down

Looking For | Points (+12)
:--|--:
Hoested on Github Pages and overall functionality is correct -- smooth user experience (links in header) |  2
TDD Add Product function | 2
Wire-up form submit with prevent default | 2
Use `new FormData` to create new product object | 2
New item shows up on product page, and and shows up in cart when added to cart | 2
Remove Product | +1