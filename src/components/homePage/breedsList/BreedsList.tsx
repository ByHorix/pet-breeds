"use client";

import "./styles.css";
import {BreedCard} from "@/components/homePage/breedsList/breedCard/BreedCard";
import {BreedsListProps} from "@/types/props";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Search} from "@/components/homePage/breedsList/Search/Search";

export const BreedsList = ({breedsList}: BreedsListProps) => {
    const [searchInput, setSearchInput] = useState('');

    const [filteredBreedsList, setFilteredBreedsList] = useState(breedsList);

    const filterList = useCallback((searchValue: string) => {
        setFilteredBreedsList((prevState) => searchValue === ''
            ? breedsList
            : breedsList.filter((breedData) =>
                breedData.name.toLowerCase().includes(searchValue.toLowerCase()))
        );
    }, [searchInput]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            filterList(searchInput);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [searchInput]);

    return (
        <div>
            <div className="breeds-list-header">
                <h1 className="title">Breeds List:</h1>
                <Search
                    searchValue={searchInput}
                    setSearchValue={setSearchInput}
                    resultList={filteredBreedsList}
                />
            </div>
            <div className="breeds-list">
                {filteredBreedsList.map((breed) => (<BreedCard key={breed.id} breedData={breed}/>))}
                {filteredBreedsList.length === 0 && searchInput !== '' && "No results"}
            </div>
        </div>
    )
}