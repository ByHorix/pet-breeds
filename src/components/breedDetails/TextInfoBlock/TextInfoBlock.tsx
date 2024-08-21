import {TextInfoBlockProps} from "@/types/props";
import "./styles.css";
import {DescriptionTitles} from "@/types/Enums";

export const TextInfoBlock = ({textData}: TextInfoBlockProps) => {
    const {
        height,
        weight,
        name,
        life_span,
        bred_for,
        breed_group,
        temperament,
        description
    } = textData;

    const restSpecifications = Object.entries({
        life_span,
        bred_for,
        breed_group,
        temperament,
        description
    }).reduce((acc, [specKey, specValue]) => {
            return !!specValue ? {...acc, [specKey]: specValue} : acc
        }, {} as Record<string, string>
    );

    return (
        <div className="text-block">
            <h2 className="text-block__title">{name}</h2>
            <div className="text-block__sizes">
                {height && <div className="text-block__sizes-block">
                    <h4 className="text-block__subtitle">Height</h4>
                    <div>
                        <h5 className="text-block__subtitle">Imperial: </h5>
                        <span>{height.imperial}</span>
                    </div>
                    <div>
                        <h5 className="text-block__subtitle">Metric: </h5>
                        <span>{height.metric}</span>
                    </div>
                </div>}
                <div className="text-block__sizes-block">
                    <h4 className="text-block__subtitle">Weight</h4>
                    <div>
                        <h5 className="text-block__subtitle">Imperial: </h5>
                        <span>{weight.imperial}</span>
                    </div>
                    <div>
                        <h5 className="text-block__subtitle">Metric: </h5>
                        <span>{weight.metric}</span>
                    </div>
                </div>
            </div>
            {Object.keys(restSpecifications).map((specKey) => (
                <div className="text-block__specification" key={specKey}>
                    <h5 className="text-block__subtitle">
                        {DescriptionTitles[specKey as keyof typeof DescriptionTitles]}:{' '}
                    </h5>
                    <span>{restSpecifications[specKey]}</span>
                </div>
            ))}
        </div>
    )
}