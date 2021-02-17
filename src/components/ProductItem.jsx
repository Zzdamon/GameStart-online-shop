import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import { addToFavourites, removeFromFavourites } from '../redux/actions/favourites';
import  { ReactComponent as Favourite} from '../assets/icons/favourite.svg'
import  { ReactComponent as UnFavourite} from '../assets/icons/favFill.svg'

// class ProductItem extends React.Component {
//     // const {name, price, currency, image, id} = props;

//     constructor(props){
//         super(props);
//         this.state={
//             item:{...props},
//             favourites:[],
//             fav:false
//         }}

//     //     componentDidMount(){
//     //         this.state.favourites.map(prod=>{
//     //             if(prod.id===this.state.item.id){
//     //                     this.setState({
//     //                         fav:true
//     //                     })
//     //             }
//     //     })
//     // }

//     // componentDidUpdate(){
//     //     this.state.favourites.map(prod=>{
//     //         if(prod.id===this.state.item.id){
//     //                 this.setState({
//     //                     fav:true
//     //                 })
//     //         }
//     // })
//     // }


function ProductItem(props){
        // const {name, price, currency, image, id} = this.state.item;
        const {name, price, currency, image, id} = props;
        let fav=false;
console.log("product item call")
    //   let favs= props.favourites;
        props.favourites.map((prod)=>{
            console.log(prod.id)
            console.log(id)

            if(prod.id===id){
                    fav=true;
            }
            return prod;
    })
        

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>

            {fav===true?
            <UnFavourite
            onClick={
                ()=>props.removeFromFavourites(
                    {
                  
                        id,
                        name,
                        price,
                        currency,
                        image
                    
                }
                )
            }
            />
            : <Favourite
             onClick={
                // console.log("fav click")
                () => props.addToFavourites({
                  
                        id,
                        name,
                        price,
                        currency,
                        image
                    
                })}
             />
            }
        </div>
    );
    }


function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavourites: (product) => dispatch(addToFavourites(product)),
        removeFromFavourites: (product)=>dispatch(removeFromFavourites(product))

    };
}
function mapStateToProps(state) {
    return {
      favourites:state.favourites.products
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);