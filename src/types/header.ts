import {Dispatch, SetStateAction} from 'react'

export type HeaderProps<T> = {
    activeChart: T;
    onClickChart: Dispatch<SetStateAction<T>>;
};
