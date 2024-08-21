import {BreedDetails} from "@/components/breedDetails/BreedDetails";
import {getBreedData} from "@/services";

export default async function BreedDetailsPage({ params: {breedId} }: { params: { breedId: string } }) {
    const isCatsBreed = isNaN(Number(breedId));

    const {photos, breedData} = await getBreedData(isCatsBreed, breedId);

    return (
        <main>
            <BreedDetails photos={photos} breedData={breedData}/>
        </main>
    );
}