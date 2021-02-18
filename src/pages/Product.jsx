import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavourites, removeFromFavourites } from '../redux/actions/favourites';
import  { ReactComponent as Favourite} from '../assets/icons/favourite.svg'
import  { ReactComponent as UnFavourite} from '../assets/icons/favFill.svg'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            favourite: false
        }
    }

   
    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        let fav=false;
        this.props.favourites.map((prod)=>{
            console.log("product state vs prod id")
            console.log(currentProduct.id)
            console.log(prod.id)

            if(prod.id===currentProduct.id){
                    fav=true;
            }
            return prod;
    })

        this.setState({product: currentProduct,
        favourite:fav});
    }

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
            {this.state.favourite===true?
            <UnFavourite
            onClick={
                ()=>{ 
                    this.props.removeFromFavourites(product)
                    this.setState({favourite:false});
           }
                
            }
            />
            : <Favourite
             onClick={
                // console.log("fav click")
                
                () =>{this.props.addToFavourites(product)
                    this.setState({favourite:true});
                }
                
            }
             />
            }
                            <p><span className="font-weight-bold">Tip joc</span>: {product.type}</p>
                            <p><span className="font-weight-bold">Platforma</span>: {product.platform}</p>
                            <p><span className="font-weight-bold">Rating PEGI</span>: {product.rating}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Product);