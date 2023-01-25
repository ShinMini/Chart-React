import {Dispatch, SetStateAction} from "react";

export type SideBarProps<T> = {
    activeChart: T;
    onClickChart: Dispatch<SetStateAction<T>>;
};
