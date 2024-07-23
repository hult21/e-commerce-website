import { useEffect, useState } from "react";

export function useRecentlyViewed() {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        const viewed = localStorage.getItem("recentlyViewed");
        if (viewed) {
            setRecentlyViewed(JSON.parse(viewed));
        }
    }, []);

    const addToRecentlyViewed = (item) => {
        const existingItems = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        const updatedItems = [item, ...existingItems.filter((i) => i.id !== item.id)].slice(0, 5);
        localStorage.setItem("recentlyViewed", JSON.stringify(updatedItems));
        setRecentlyViewed(updatedItems);
    };

    return { recentlyViewed, addToRecentlyViewed };
}
