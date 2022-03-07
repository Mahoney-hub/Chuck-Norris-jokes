import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';

// Кастомный хук useDispatch возвращает обычный хук useDispatch, но уже с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>()
// TypedUseSelectorHook это специальный тип
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

// Весь этот код типизации для того, что в дальнейшем было комфортно работать с типами
// И typescript выдавал подсказки при вводе данных