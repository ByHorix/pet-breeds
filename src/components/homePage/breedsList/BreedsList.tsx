"use client";

import "./styles.css";
import {BreedCard} from "@/components/homePage/breedsList/breedCard/BreedCard";
import {useEffect} from "react";
import {breeds} from "@/fakeData";

export const BreedsList = () => {
    useEffect(() => {
    }, []);

    return (
        <div>
            <h1 className="title">Breeds List:</h1>
            <div className="breeds-list">
                {breeds.map((breed, index) => (<BreedCard key={index} breedData={breed}/>))}
            </div>
        </div>
    )
}