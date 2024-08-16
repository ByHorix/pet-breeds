import "./styles.css";
import {BreedCardProps} from "@/types/props";
import Image from "next/image";

export const BreedCard = ({breedData}: BreedCardProps) => {

    const {image} = breedData;

    return (
        <div className="breed-card">
            <div className="breed-card__image-wrapper">
                <Image
                    className="breed-card__image"
                    src={image.url}
                    alt={breedData.name}
                    width={image.width}
                    height={image.height}
                />
            </div>
            <div className="breed-card__text-content">
                <h4 className="breed-card__text-content-titling">{breedData.name}</h4>
                <p>
                    Breed group: {breedData.breed_group}
                </p>
                <p>
                    {breedData.bred_for}
                </p>
            </div>
        </div>
    );
};
