
const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png' },
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5,
          image:'https://www.seekpng.com/png/full/8-81351_old-tv-cartoon-png-tv-psd.png' },
        { name: 'Telephone', category: 'electronics', price: 599.00, inStock: 7,
        image:'https://www.pngplay.com/wp-content/uploads/8/Real-Telephone-Background-PNG-Image.png' },
        { name: 'T-Shirt', category: 'clothing', price: 9.00, inStock: 25,
        image: 'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png' },
      { name: 'Suit', category: 'clothing', price: 12.00, inStock: 10,
        image:'https://i.pinimg.com/originals/92/f4/a1/92f4a1a0c9e932810c6b749c3d4f3fb2.png' },
        { name: 'Jacket', category: 'clothing', price: 12.00, inStock: 10,
        image:'https://pngimg.com/uploads/leather_jacket/leather_jacket_PNG44.png' },
      { name: 'Apples', category: 'food', price: .99, inStock: 500,
        image:'https://www.freepnglogos.com/uploads/apple-png/apple-fruit-png-transparent-images-png-only-19.png' },
      { name: 'banana', category: 'food', price: 2.99, inStock: 120,
        image:'https://yourpng.com/download/aG1iLV2ocdsLJeePLSgQIDtM73e3gvAPD6BP0JXOT1DEpdiiixJHg0Vn1aVWy0etz6YqRxDGH5oepgzMXhIDYPIJhqz8iaUpgIcTCwnPsNJSvBNmKJOmZl3dedF1bVAWUvqFmdDpLHsUQzEMvgJ70hZJEkTLEBmNaRc4PI9zI7gGSuQbyZpaoBa2sH2GxiUIT5Eyf0aG/large' },
      { name: 'strawberry', category: 'food', price: 3.9, inStock: 100,
        image:'https://www.pngall.com/wp-content/uploads/2016/05/Strawberry-Download-PNG.png' },
        { name: 'orange', category: 'food', price: 3.9, inStock: 100,
        image:'https://cdn.yourpng.com/uploads/preview/real-orange-png-images-download-64-11618157884t0ltauzq6w.png' },
        { name: 'watermelon', category: 'food', price: 3.9, inStock: 100,
        image:'https://freepngimg.com/thumb/watermelon/2-2-watermelon-free-download-png.png' },
        { name: 'Tomato', category: 'food', price: 3.9, inStock: 100,
        image:'https://lh3.googleusercontent.com/proxy/qJmaSPyLBgExI9pp3juCvrjif7ridkR7r6zW6OB2hT0reB_wU83OzdJh0KUeq6GnHBY94Jtgax09b36YUIHFI6F9KWtxXHK_qTLP0acW9KaRlgEUxU3B2A' },
   
    ],
    activeCategory: 'electronics',
  };
  
  export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "catigories":
            if (payload.toLowerCase() == "electronics" || payload.toLowerCase() == "clothing" || payload.toLowerCase() == "food")
                return { ...state, activeCategory: payload }; 
        default:
            return {...state};
    }

}
  
export const sendActiveCat = (activeCategory) => {
    console.log("activecaaaat >>>>", activeCategory)
    return {
        // this object will be passed to the reducer 
        type: "catigories",
        payload: activeCategory
    }
}