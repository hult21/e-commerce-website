import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import getStripe from '../stripe-api/getStripe';

const ShoppingCartContext = createContext();

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      }
    }, []);
  
    // Clear cart function
    const clearCart = useCallback(() => {
      setCartItems([]);
      localStorage.removeItem('cart');
    }, []);

    const cartQuantity = useMemo(() => 
        Array.isArray(cartItems) ? cartItems.reduce((quantity, item) => item.quantity + quantity, 0) : 0, [cartItems]);

    useEffect(() => {
        if (Array.isArray(cartItems)) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);

    const getItemQuantity = useCallback((id) => {
        return Array.isArray(cartItems) ? cartItems.find(item => item.id === id)?.quantity || 0 : 0;
    }, [cartItems]);

    const increaseCartQuantity = useCallback((id, name, price, photo) => {
        setCartItems(currItems => {
            if (!Array.isArray(currItems)) return [{ id, name, price, photo, quantity: 1 }];
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, name, price, photo, quantity: 1 }];
            } else {
                return currItems.map(item => 
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        });
    }, []);

    const decreaseCartQuantity = useCallback((id) => {
        setCartItems(currItems => {
            if (!Array.isArray(currItems)) return [];
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => 
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
        });
    }, []);

    const removeFromCart = useCallback((id) => {
        setCartItems(currItems => Array.isArray(currItems) ? currItems.filter(item => item.id !== id) : []);
    }, []);



    const handleCheckout = async (cartItems) => {
        if (!Array.isArray(cartItems)) {
            return;
        }
        const stripe = await getStripe();

        const checkoutItems = cartItems.map(({ id, name, price, quantity, photo }) => {
            if (isNaN(price)) {
                console.error(`Invalid price for item ${name}:`, price);
                console.error('Invalid cart item:', { id, name, price, quantity, photo }); 
                return null; 
            }
            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: name,
                    },
                    unit_amount: price, 
                },
                quantity: quantity,
            };
        }).filter(item => item !== null);

    

        if (checkoutItems.length === 0) {
            return;
        }

        try {
            const response = await fetch('http://localhost:8800/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({ items: checkoutItems }), 
            });

            if (!response.ok) {
                throw new Error(`Failed to create checkout session: ${response.statusText}`);
            }

            const session = await response.json();

            if (session && session.id) {
                await stripe.redirectToCheckout({ sessionId: session.id });
                clearCart();
            } else {
                console.error('No session ID returned from server:', session);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    const contextValue = useMemo(() => ({
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        handleCheckout,
        clearCart
    }), [cartItems, cartQuantity, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, openCart, closeCart, clearCart, handleCheckout]);

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}
