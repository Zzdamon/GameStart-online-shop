import React from 'react'
import ProductItem from '../components/ProductItem';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

function Favourites(props) {
        
    return (
        <Layout>{
    props.favourites.map(product=>
    <ProductItem
    {...product}
    key={product.id}/>)
}        
</Layout>

    )
}


// function mapDispatchToProps(dispatch) {
//     return {
//         addToCart: (product) => dispatch(addToCart(product)),
//         addToFavourites: (product) => dispatch(addToFavourites(product)),
//         removeFromFavourites: (product)=>dispatch(removeFromFavourites(product))

//     };
// }
function mapStateToProps(state) {
    return {
      favourites:state.favourites.products
    }
}

export default connect(mapStateToProps)(Favourites);