import {Breed, PhotoBasic} from "@/types/types";

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
