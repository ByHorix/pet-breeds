"use client";

import "./styles.css";
import {BreedCard} from "@/components/homePage/breedsList/breedCard/BreedCard";
import {BreedsListProps} from "@/types/props";

export const BreedsList = ({breedsList}: BreedsListProps) => {

    return (
        <div>
            <h1 className="title">Breeds List:</h1>
            <div className="breeds-list">
                {breedsList.map((breed) => (<BreedCard key={breed.id} breedData={breed}/>))}
            </div>
        </div>
    )
}