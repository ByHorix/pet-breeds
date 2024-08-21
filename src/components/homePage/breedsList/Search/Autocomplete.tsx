"use client";

import {SearchProps} from "@/types/props";
import {useEffect, useRef, useState} from "react";
import cn from 'classnames';

export const Autocomplete = ({resultList, setSearchValue, searchValue}: SearchProps) => {
    const [isActive, setIsActive] = useState(searchValue !== '');

    useEffect(() => {
        setIsActive(searchValue !== '');
    }, [searchValue]);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', onClickOutside);

        return () => {
            document.removeEventListener('click', onClickOutside)
        }
    }, []);

    return (
        <div
            className={cn(
                "search-block__autocomplete",
                {active: isActive}
            )}
            ref={ref}
        >
            {searchValue !== '' && <ul className="autocomplete-list">
                {
                    resultList.map((resultItem) => (
                        <li
                            key={resultItem.id}
                            onClick={() => {
                                Promise.resolve()
                                    .then(() => {
                                        setSearchValue(resultItem.name)
                                    })
                                    .then(() => {
                                        setIsActive(false)
                                    })
                            }}
                            className="autocomplete-item"
                        >
                            {resultItem.name}
                        </li>
                    ))
                }
            </ul>}
        </div>
    )
}
