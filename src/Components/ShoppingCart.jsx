import React, { useMemo } from 'react'
import '../Styles/cart.css'
import { IoCloseOutline } from "react-icons/io5";
import { useShoppingCart } from '../Context/ShoppingCartContext';
import useFetchProducts from '../Hooks/useFetchProducts';
import CartItem from './CartItem';
import formatCurrency from '../UI/formatCurrency';


const ShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems, handleCheckout } = useShoppingCart();
    const { products } = useFetchProducts();

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const calculateTotal = (items, productList) => {
        return items.reduce((total, { id, quantity }) => {
            const productDetails = productList.find(product => product.id === id);
            return total + (productDetails?.price || 0) * quantity;
        }, 0);
    };

    const total = useMemo(() => calculateTotal(cartItems, products), [cartItems, products]);

    const onCheckoutClick = () => {
      handleCheckout(cartItems);
  };

    return (
        <div className={`offcanvas-container ${isOpen ? 'open' : ''}`}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Cart | {totalItems} items</h5>
                <button className="close-button" onClick={closeCart}>
                    <IoCloseOutline />
                </button>
            </div>

            {totalItems === 0 ? (
                <div className="empty-cart-default">
                    <h5>Your Cart is Empty</h5>
                    <a href="/shop/collection">Continue Shopping</a>
                </div>
            ) : (
                <div className="offcanvas-body">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <footer>
                        <div className="subtotal-add">
                            <h5>SUBTOTAL</h5>
                            <h5>{formatCurrency(total)}</h5>
                        </div>
                        <button type="button" onClick={onCheckoutClick}>
                            CHECKOUT
                        </button>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;






// const handleCheckout = async (cartItems) => {
     
    //     const stripe = await getStripe();

    //     const checkoutItems = cartItems.map(({ id, quantity }) => ({ id, quantity }));


    //     const response = await fetch('http://localhost:8800/create-checkout-session', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(checkoutItems),
    //     });

    //     const session = await response.json();

    //     await stripe.redirectToCheckout({ sessionId: session.id });
    // };