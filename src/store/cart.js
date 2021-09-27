
let initialState = {
    items: [],
    totalItems: 0
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {

        case "add":
            let newItem = { name: payload, quantity: 1 };
            if (state.items.length == 0) {
                state.items.push(newItem);
                state.totalItems++;
            }
            else {
                let stateItem = state.items.reduce((acc, item) => {
                    if (item.name === payload) {
                        item.quantity++;
                        state.totalItems++;
                        acc = true;
                        return acc;
                    }
                    return acc;
                }, false)
                if (!stateItem) {
                    state.items.push({ name: payload, quantity: 1 });
                    state.totalItems++;
                }
            }

            return { ...state }

        case "remove":
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].name == payload) {
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


export const addItem = (item) => {
    return {
        type: "add",
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: "remove",
        payload: item
    }
}

export const resetCart = () => {
    return {
        type: "reset",
    }
}
