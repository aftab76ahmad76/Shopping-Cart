import { act } from "react-dom/cjs/react-dom-test-utils.development"

const initialState = {
    catogries: [
        {
            id: 0,
            name: 'All',
            food: [
                {
                    id: 0,
                    name: 'Apple Juice',
                    desc: '',
                    price: 2.99,
                    catogrie: 'Juice',
                },
                {
                    id: 1,
                    name: 'Baklawa',
                    desc: 'Two pieces with scoop of vanilla bean ice cream.',
                    price: 7.99,
                    catogrie: 'Ice Cream',
                },
                {
                    id: 2,
                    name: 'Chicken Vegitable Soup',
                    desc: 'Free range chicken with no antibiotics, potatoes, onions, carrots, tomatoes, celery and parsely.',
                    price: 3.99,
                    catogrie: 'Soups',
                },
                {
                    id: 3,
                    name: 'Green Lentil Soup',
                    desc: 'Organic lentils, tomatoes, oil, garlic, red onion, parsely, mint and crushed pepper.',
                    price: 2.99,
                    catogrie: 'Soups',
                },
                {
                    id: 4,
                    name: 'Beef Koobideh Kabob',
                    desc: 'Skewer(s) of charbroiled seasoned ground sirloin, with a skewer of grilled vegetables, basmati rice, brown rice or bulgur wheat pilaf and choice of salad.',
                    price: 12.99,
                    catogrie: 'Entrees',
                },
                {
                    id: 5,
                    name: 'Charbroiled Chicken Shish Kabob',
                    desc: 'Charbroiled chicken tenders served with basmati rice, brown rice, or bulgur pilaf.',
                    price: 15.99,
                    catogrie: 'Entrees',
                },
                {
                    id: 6,
                    name: 'Orange Juice',
                    desc: '',
                    price: 2.99,
                    catogrie: 'Juice',
                },
                {
                    id: 7,
                    name: 'Jambo Shake',
                    desc: 'A mixture of different shakes with cream and almonds',
                    price: 5.99,
                    catogrie: 'Juice',
                },
            ],
        },
        {
            id: 1,
            name: 'Soups',
            food: [
                {
                    id: 2,
                    name: 'Chicken Vegitable Soup',
                    desc: 'Free range chicken with no antibiotics, potatoes, onions, carrots, tomatoes, celery and parsely.',
                    price: 3.99,
                    catogrie: 'Soups',
                },
                {
                    id: 3,
                    name: 'Green Lentil Soup',
                    desc: 'Organic lentils, tomatoes, oil, garlic, red onion, parsely, mint and crushed pepper.',
                    price: 2.99,
                    catogrie: 'Soups',
                },
            ]
        },

        {
            id: 2,
            name: 'Ice Cream',
            food: [
                {
                    id: 1,
                    name: 'Baklawa',
                    desc: 'Two pieces with scoop of vanilla bean ice cream.',
                    price: 7.99,
                    catogrie: 'Ice Cream',
                },
            ]
        },
        {
            id: 3,
            name: 'Enterees',
            food: [
                {
                    id: 4,
                    name: 'Beef Koobideh Kabob',
                    desc: 'Skewer(s) of charbroiled seasoned ground sirloin, with a skewer of grilled vegetables, basmati rice, brown rice or bulgur wheat pilaf and choice of salad.',
                    price: 12.99,
                    catogrie: 'Entrees',
                },
                {
                    id: 5,
                    name: 'Charbroiled Chicken Shish Kabob',
                    desc: 'Charbroiled chicken tenders served with basmati rice, brown rice, or bulgur pilaf.',
                    price: 15.99,
                    catogrie: 'Entrees',
                },
            ]
        },
        {
            id: 4,
            name: 'Juice',
            food: [
                {
                    id: 0,
                    name: 'Apple Juice',
                    desc: '',
                    price: 2.99,
                    catogrie: 'Juice',
                },
                {
                    id: 6,
                    name: 'Orange Juice',
                    desc: '',
                    price: 2.99,
                    catogrie: 'Juice',
                },
                {
                    id: 7,
                    name: 'Jambo Shake',
                    desc: 'A mixture of different shakes with cream and almonds',
                    price: 5.99,
                    catogrie: 'Juice',
                },
            ]
        },
    ],
    noOfProducts: 0,
    purchasedProducts: [],
    totalPrice: 0
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'addProduct':
            const newProduct = {
                productId: action.payload.id,
                quantity: 1,
                totalPrice: action.payload.price
            }
            const newTotalPrice = state.totalPrice + action.payload.price
            const newPurchasedProducts = [...state.purchasedProducts, newProduct]
            return { ...state, purchasedProducts: newPurchasedProducts, noOfProducts: state.noOfProducts + 1, totalPrice: newTotalPrice }
        case 'doIncrement':
            const newState = { ...state }
            const index = newState.purchasedProducts.findIndex(i => i.productId === action.payload.id)
            newState.purchasedProducts[index].quantity++
            newState.purchasedProducts[index].totalPrice = newState.purchasedProducts[index].totalPrice + action.payload.price
            newState.noOfProducts++
            newState.totalPrice = newState.totalPrice + action.payload.price
            return newState
        case 'doDecrement':
            const newState2 = { ...state }
            const index2 = newState2.purchasedProducts.findIndex(i => i.productId === action.payload.id)
            newState2.purchasedProducts[index2].quantity--
            newState2.purchasedProducts[index2].totalPrice = newState2.purchasedProducts[index2].totalPrice - action.payload.price
            newState2.noOfProducts--
            newState2.totalPrice = newState2.totalPrice - action.payload.price
            if (newState2.totalPrice < 0) {
                newState2.totalPrice = 0
            }
            return newState2
        case 'remove':
            const newState3 = { ...state }
            newState3.purchasedProducts = state.purchasedProducts.filter(i => i.productId !== action.payload.productId)
            newState3.totalPrice = newState3.totalPrice - action.payload.totalPrice
            newState3.noOfProducts = newState3.noOfProducts - action.payload.quantity
            return newState3
        case 'removeAll':
            console.log('::::::::::', action.payload);
            const newState4 = { ...state }
            newState4.purchasedProducts.length = 0
            newState4.totalPrice = 0
            newState4.noOfProducts = 0
            return newState4
        default: return state
    }
}