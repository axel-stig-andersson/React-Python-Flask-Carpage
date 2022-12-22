import { atom } from "recoil";
import { Car } from "./model";

export const cars = atom({
    key:'cars',
    default: [] as Car[] 
})