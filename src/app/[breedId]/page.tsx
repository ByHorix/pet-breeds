import {allCats, allDogs, breedImages} from "@/fakeData";
import {BreedDetails} from "@/components/breedDetails/BreedDetails";
import {Breed} from "@/types/types";

export default function BreedDetailsPage({ params: {breedId} }: { params: { breedId: string } }) {
    const isCatsBreed = isNaN(Number(breedId));

    const currentBreedList = isCatsBreed ? allCats : allDogs;

    const currentBreedData = currentBreedList.find((breedData) => breedData.id == breedId) as Breed;

    return (
        <main>
            <BreedDetails photos={breedImages} breedData={currentBreedData}/>
        </main>
    );
}