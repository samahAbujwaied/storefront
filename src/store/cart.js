
let initialState = {
    items: [],
    totalItems: 0
};

export default (state = initialState, action) => {
    console.log('totalItems  5555555555555555555    ',state.items);
    let { type, payload } = action;
    switch (type) {

        case "add":
            let newItem = { name: payload.name, quantity: 1,stock:payload.stock-1 };
            console.log('newItem------------',newItem);
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
                   
                    state.items.push({ name: payload.name, quantity: 1 ,state:payload.stock-1 });
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


export const addItem = (item,stock) => {
    let data = {
        name:item,
        stock:stock

    }
    return {
        type: "add",
        payload: data
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
