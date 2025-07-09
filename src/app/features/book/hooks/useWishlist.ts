import { useWishListStore } from "@book/stores/useWishListStore";

export const useWishList = () => {
  const wishlist = useWishListStore((state) => state.wishlist);
  const addToWishlist = useWishListStore((state) => state.addToWishlist);
  const removeToWishlist = useWishListStore((state) => state.removeToWishlist);
  const isInWishlist = useWishListStore((state) => state.isInWishlist);

  return {
    wishlist,
    addToWishlist,
    removeToWishlist,
    isInWishlist,
  };
};
