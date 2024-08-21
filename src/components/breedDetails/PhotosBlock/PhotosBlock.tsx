import Image from "next/image";
import {PhotosBlockProps} from "@/types/props";
import "./styles.css";

export const PhotosBlock = ({photosList}: PhotosBlockProps) => {
    return (
        <div className="breed-gallery">
                {photosList.map((photo) => (
                    <div className="breed-gallery__img-wrapper">
                        <Image
                            className="breed-gallery__img"
                            src={photo.url}
                            alt={photosList[0].breeds[0].name}
                            width={photo.width}
                            height={photo.height}
                        />
                    </div>
                ))}
        </div>
    );
};
