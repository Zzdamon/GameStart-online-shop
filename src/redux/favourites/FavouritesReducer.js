import * as FavConstants from './FavConstants'

const initialState = {
    products: []
}


export function favouritesReducer(state = initialState, action) {
    switch (action.type) {
        case FavConstants.add:
            // const updatedProducts = state.favourites.map(product => {
            // if (product.id !== action.payload.product.id)
            //         return product;
                
            // })

           
           
                return Object.assign({}, state, {
                    products:[...state.products, action.payload] 
                })
            

        case FavConstants.rm:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default:
            return state;
    }
}

