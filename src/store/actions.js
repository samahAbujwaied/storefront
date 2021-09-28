import superagent from 'superagent';

const apiProds = 'https://appstore-a.herokuapp.com/products';
const apiCats = 'https://appstore-a.herokuapp.com/categories';

export const getRemoteData =  (activeCategory) => (dispatch) => {
    console.log('activeCategory-----------------',activeCategory);
   superagent.get(apiProds).then(dataProds => {
       superagent.get(apiCats).then(dataCat => {
            return dispatch(getAction({ products: dataProds.body, 
                categories: dataCat.body,
                 activeCategory: activeCategory }))
        });
    });
}
// export const putRemoteData = () => async (activeCategory) =>async (dispatch) => {

//    return superagent.put(apiProds).send({stock: inStock--}).then(res=> {
//        console.log('update------------',res.body);
//         dispatch(putAction(res.body));
//     });
// }

export const removeItem = (item) => {
    return {
        type: "remove",
        payload: item
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

export const changeActiveCategory = (activeCategory) => (dispatch) => {
    return dispatch(getActiveCategory(activeCategory))
}


const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}


const getActiveCategory = payload => {
    return {
        type: "activeCategory",
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}
