import {PhotosBlock} from "@/components/breedDetails/PhotosBlock/PhotosBlock";
import {TextInfoBlock} from "@/components/breedDetails/TextInfoBlock/TextInfoBlock";
import {BreedDetailsProps} from "@/types/props";
import "./styles.css";

export const BreedDetails = ({photos, breedData}: BreedDetailsProps) => {
    return (
        <div className="breed-details">
            <div className="breed-details__text">
                <TextInfoBlock textData={breedData}/>
            </div>
            <div className="breed-details__gallery">
                <PhotosBlock photosList={photos}/>
            </div>
        </div>
    )
}