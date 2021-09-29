import superagent from 'superagent';

const apiProds = 'https://appstore-a.herokuapp.com/products';
const apiCats = 'https://appstore-a.herokuapp.com/categories';


export const getRemoteData =  (activeCategory) => (dispatch) => {

   superagent.get(apiProds).then(dataProds => {
       superagent.get(apiCats).then(dataCat => {
            return dispatch(getAction({ products: dataProds.body, 
                categories: dataCat.body,
                 activeCategory: activeCategory }))
        });
    });
}
const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}


export const removeCardData = (activeCategory) => (dispatch) => {
    // console.log('activeCategory', activeCategory[0].id);

    let body = {
        name:activeCategory[0].name,
        category:activeCategory[0].category,
        price:activeCategory[0].price,
        inStock: activeCategory[0].inStock+1,
        image:activeCategory[0].image
    };
  console.log('body ',body);
    let dara = superagent.put(`${apiProds}/${activeCategory[0].id}`).send(body)
        .then((results) => {
            console.log('resulte',results);
          dispatch(removeItem(results.body));

        });
     console.log('dara',dara);
        
}
export const removeItem = (item) => {
    // console.log('remoooove ------------->',item);
    return {
        type: "remove",
        payload: item
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


export const ADDTOCART = payload => {
    return {
        type: 'ADDTOCART',
        payload: payload
    }
}
export const changeActiveCategory = (activeCategory) => (dispatch) => {
    return dispatch(getActiveCategory(activeCategory))
}

