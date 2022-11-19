// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
// import { addProduct, addProductToApi, fetchAllProducts, sortByCategory, sortByPriceAsc } from "../../../redux/reducers/productReducer"
// import createTestStore from "./testStore"
// import {products} from '../fixtures/testProduct'

// const handler = [
//     rest.post('https://api.escuelajs.co/api/v1/products/',(req, res, ctx) => {
//         return res(
//             ctx.json(
//                 req.body
//             ),
//             ctx.delay(150)
//         )
//     } )
// ]

// const server = setupServer (...handler)


// let store = createTestStore()
// beforeEach(()=>{
// store = createTestStore()
// server.listen()
// })
// afterEach(() => server.resetHandlers())
// afterAll (()=> server.close())
// describe ('test product reducer',() => {
//     test ('fetch all products from api',async () =>{
//         await store.dispatch(fetchAllProducts())
//         expect (store.getState().productReducer.productList.length).toBeGreaterThan(0)
//     })
//     test ('should add', () => {
//         products.map(product => store.dispatch(addProduct(product)))
//         expect(store.getState().productReducer.productList.length).tobe(3)

//     })
//     test ('should sort', () => {
//     products.map(product => store.dispatch(addProduct(product)))
//     store.dispatch(sortByCategory('Clothes'))
//     expect (store.getState().productReducer.sortedList.length).tobe(1) 
//     store.dispatch(sortByPriceAsc) 
//     expect (store.getState().productReducer.sortedList[0].price).toBe(603)
//     })
//     // test ('add product to be api should add to store also', async() => {
//     //     await store.dispatch(addProductToApi({
//     // title: "New Title",
//     // price: 1345,
//     // description: "New Description",
//     // categoryId:1,
//     // images:[
//     //         "https://api.lorem.space/image/shoes?w=640&h=480&r=9794",
//     //         "https://api.lorem.space/image/shoes?w=640&h=480&r=4855",
//     //         "https://api.lorem.space/image/shoes?w=640&h=480&r=8952"
//     //         ]
//     //     })) 
//     //     expect (store.getState().productReducer.productList.length).toBe(1)
//     // })
// })
export{}