let initialState = {
    categories: [],
    products: [],
    activeCategory: ''
};

// reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET':
            return { ...state, categories: payload.categories, products: payload.products, activeCategory: "electronics" };
        case "activeCategory":
            return { ...state, activeCategory: payload }
        case "ADDTOCART":
            return { ...state, categories: payload.categories, products: payload.products, }
        case "REMOVEFROMCART":
            return;
        case 'PUT':
            return payload;
        default:
            return state;
    }
}