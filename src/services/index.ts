import {getDogBreedInfo, getDogBreeds, getDogsPhotoForBreed} from "@/services/dogApi";
import {getCatBreedInfo, getCatBreeds, getCatsPhotoForBreed} from "@/services/catApi";
import _ from 'lodash';
import {Breed} from "@/types/types";

export const getAllBreeds = async () => {
    const [cats, dogs] = await Promise.all([
        getDogBreeds(),
        getCatBreeds()
    ]);

    const result = [...cats, ...dogs]

    return _.sortBy(result, [function (o) {return o.name}]);
};

export const getBreedData = async (isCat: boolean, id: string) => {
    const [currentPhotoGetter, currentBreedDataGetter] = isCat
        ? [getCatsPhotoForBreed, getCatBreedInfo]
        : [getDogsPhotoForBreed, getDogBreedInfo];

    const [photos, breedData] = await Promise.all([
        currentPhotoGetter(id),
        currentBreedDataGetter(id)
    ]);

    return {photos, breedData};
}
