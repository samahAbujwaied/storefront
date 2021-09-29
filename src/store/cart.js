import superagent from 'superagent';
let initialState = {
    items: [],
    totalItems: 0
};
const apiProds = 'https://appstore-a.herokuapp.com/products';
const apiCats = 'https://appstore-a.herokuapp.com/categories';

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {

        case "add":
            let newItem = { name: payload.name, quantity: 1}; 
            if (state.items.length == 0) {
                state.items.push(newItem);
                state.totalItems++;
            }
            else {
                let stateItem = state.items.reduce((acc, item) => {
                    if (item.name === payload.name) {
                        item.quantity++;
                        item.stock--;
                        state.totalItems++;
                        acc = true;
                        return acc;
                    }
                    return acc;
                }, false)
                if (!stateItem) {

                    state.items.push({ name: payload.name, quantity: 1, state: payload.stock - 1 });
                    state.totalItems++;
                }
            }

            return { ...state }

        case "remove":
            console.log('remoooooooooov',payload);
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].name == payload.name) {
                    if (state.items[i].quantity > 1)
                        state.items[i].quantity--;
                    else if (state.items[i].quantity == 1) {
                        state.items.splice(i, 1)
                    }
                    state.totalItems--;
                }
            }
            return { ...state }

        case "reset":
            return initialState;

        default:
            return { ...state };
    }

}

export const updateCardData = (activeCategory) => (dispatch) => {

    let body = {
        name:activeCategory.name,
        category:activeCategory.category,
        price:activeCategory.price,
        inStock: activeCategory.inStock - 1,
        image:activeCategory.image
    };

     superagent.put(`${apiProds}/${activeCategory.id}`)
     .send(body)
     .then((results) => {dispatch(addItem(results.body)); });

}

export const addItem = (item) => {
    return {
        type: "add",
        payload: item
    }
}

