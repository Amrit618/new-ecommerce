import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import {AppDispatch, RootState} from '../redux/reducers/store' 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()