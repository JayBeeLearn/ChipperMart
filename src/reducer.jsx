const reducer = (state, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    let wished = state.products.map((product) => {
      if (product.id === action.payload) {
        let prevWish = product.wishlist;
        return { ...product, wishlist: !prevWish };
      }
      return product;
    });
    return { ...state, products: wished };
  }

  if (action.type === "ADD_TO_CART") {
    let cart = state.products.map((product) => {
      if (product.id === action.payload) {
        return { ...product, inCart: true };
      }
      return product;
    });
    return { ...state, products: cart };
  }

  if (action.type === "INCREASE") {
    let quantity = state.products.map((product) => {
      if (product.id === action.payload) {
        let quanity = product.amount;
        return { ...product, amount: quanity + 1 };
      }
      return product;
    });
    return { ...state, products: quantity };
  }

  if (action.type === "DECREASE") {
    let quantity = state.products
      .map((product) => {
        if (product.id === action.payload) {
          let quanity = product.amount;
          return { ...product, amount: quanity - 1 };
        }
        return product;
      })
      .filter((product) => product.amount !== 0);
    return { ...state, products: quantity };
  }

  if (action.type === "GET_TOTALS") {

    let inCart = state.products.filter((product)=>product.inCart)

    let { items, total } = inCart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        const itemTotal = amount * price;
        cartTotal.total += itemTotal;
        // console.log(amount);
        cartTotal.items += amount
        return cartTotal;
      },
      {
        items: 0,
        total: 0,
      }
    );
    console.log(items, total);
    return { ...state, total, items };
  }

  return state;
};

export default reducer;
