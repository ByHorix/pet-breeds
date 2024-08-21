import "./styles.css";
import {BreedCardProps} from "@/types/props";
import Image from "next/image";
import Link from "next/link";

export const BreedCard = ({breedData}: BreedCardProps) => {

    const {image} = breedData;

    return (
        <Link href={`${breedData.id}`} className="breed-card">
            <div className="breed-card__image-wrapper">
                {breedData.image && <Image
                    className="breed-card__image"
                    src={image.url}
                    alt={breedData.name}
                    width={image.width}
                    height={image.height}
                />}
            </div>
            <div className="breed-card__text-content">
                <h4 className="breed-card__text-content-titling">{breedData.name}</h4>
                {breedData.breed_group && <p>
                    Breed group: {breedData.breed_group}
                </p>}
                {breedData.bred_for && <p>
                    {breedData.bred_for}
                </p>}
            </div>
        </Link>
    );
};
