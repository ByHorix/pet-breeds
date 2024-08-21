import {SearchProps} from "@/types/props";
import {ChangeEvent} from "react";

export const SearchInput = ({searchValue, setSearchValue,}: Omit<SearchProps, 'resultList'>) => {
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <input
            className="search-block__input"
            value={searchValue}
            onChange={onChangeSearch}
            placeholder="search"
        />
    );
};
