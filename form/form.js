import { addProduct } from '../utils.js';

const newProductForm = document.getElementById('new-product-form');

newProductForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const myFormData = new FormData(newProductForm);
    
    const product = {
        id: myFormData.get('id'),
        title: myFormData.get('title'),
        publisher: myFormData.get('publisher'),
        price: myFormData.get('price'),
        description: myFormData.get('description')
    };

    addProduct(product);

});