import React from 'react'
import ProductItem from '../components/ProductItem';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


function Favourites(props) {
        
    return (

        <Layout>
            <div className="fav-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
            
            {props.favourites.length>0
            ?<div>
                <h3>Produsele tale favorite:</h3>
                <div className="container-fluid d-flex flex-wrap" >
            {
             props.favourites.map(product=>
                <ProductItem
                {...product}
                key={product.id}/>)
            }
                </div>
            </div>
            :<div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
            </div>
}
</div>
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