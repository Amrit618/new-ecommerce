import { login } from "../../redux/reducers/userReducer"
import createTestStore from "./utils/testStore"

let store = createTestStore()
beforeEach(()=>{
store = createTestStore()
})
describe ('test user reducer',()=>{
    test('user should login successfully', async() =>{
        await store.dispatch(login({
            email: 'amritbastakoti618@gmail.com',
            password: '123'
        }))
        expect(store.getState().userReducer.currentUser).toBeDefined()
    })
})