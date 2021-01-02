import { createRef } from 'react';
import { createSelector } from 'reselect';


export const selectProduct = (state) => state.product;

export const selectProducts = (state) => state.products;

export const selectCategoryMap = createSelector([selectProducts], (products) => {
    const categoryMap = {};
  
    if(!products){
        return categoryMap;
    }else{
        products.forEach(product => {
            if (product.category) {
                const catName = product.category.name;
                categoryMap[catName] = {
                    ...product.category,
                    ref: createRef(),
                    products: []
                }
            }
        });
    
        products.forEach(product => {
            if (product.category) {
                const catName = product.category.name;
                const cat = categoryMap[catName];
                if (cat) {
                    cat.products.push(product); // fix me sort
                }
            }
        });
    
        return categoryMap;
    }
});