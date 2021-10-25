import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/reducer/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
