import {Breed, PhotoBasic} from "@/types/types";
import {Dispatch, SetStateAction} from "react";

export type BreedCardProps = {
    breedData: Breed
}

export type PhotosBlockProps = {
    photosList: PhotoBasic[]
}

export type BreedDetailsProps = {
    breedData: Breed
    photos: PhotoBasic[]
}

export type TextInfoBlockProps = {
    textData: Breed
}

export type BreedsListProps = {
    breedsList: Breed[]
}

export type SearchProps = {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
    resultList: Breed[]
}
