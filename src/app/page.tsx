import {BreedsList} from "@/components/homePage/breedsList/BreedsList";
import {getAllBreeds} from "@/services";

export default async function Home() {
    const breedsList = await getAllBreeds();

    return (
        <main>
            <BreedsList breedsList={breedsList}/>
        </main>
    );
}
