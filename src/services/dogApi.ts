import {dogApi} from "@/axios";
import {Breed} from "@/types/types";

export const getDogBreeds = async () => {
    const response = await dogApi.get('/breeds');

    return response.data;
};

export const getDogBreedInfo = async (id: string) => {
    const response = await dogApi.get(`/breeds/${id}`);

    return response.data;
};

export const getDogsPhotoForBreed = async (breedId: string) => {
    const response = await dogApi.get(`/images/search`, {
        params: {
            limit: 10,
            breed_ids: breedId
        }
    });

    return response.data;
};
