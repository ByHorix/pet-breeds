"use client";

import {SearchProps} from "@/types/props";
import "./styles.css";
import {SearchInput} from "@/components/homePage/breedsList/Search/SearchInput";
import {Autocomplete} from "@/components/homePage/breedsList/Search/Autocomplete";

export const Search = (props: SearchProps) => {

    return (
        <div className="search-block">
            <SearchInput searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
            <Autocomplete {...props}/>
        </div>
    );
}