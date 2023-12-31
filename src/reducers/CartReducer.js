const initialState = {
    product: [],
    addres: [],
    descount: 0,
    delivery: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            let products = [...state.products]
            let id = action.payload.id;
            let index = products.findIndex(item => item.id == id)
            
            if(index > -1) {
                products[index].qt += action.payload.qt
            } else {
                products.push ({
                    ...action.payload.data,
                    qt: action.payload.qt
                })
            }

        break;
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
    }

    return state;
}