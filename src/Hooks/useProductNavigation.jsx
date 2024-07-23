import { useNavigate } from "react-router-dom";
import { useRecentlyViewed } from "./useRecentlyViewed";

export const useProductNavigation = () => {
    let navigate = useNavigate();
    const { addToRecentlyViewed } = useRecentlyViewed();

    const onProductClick = (product) => {
        addToRecentlyViewed(product);
        navigate(`/shop/product/${product.id}`);
    };

    return onProductClick;
};
