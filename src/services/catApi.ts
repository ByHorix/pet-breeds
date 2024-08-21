import {catApi} from "@/axios";

export const getCatBreeds = async () => {
    const response = await catApi.get('/breeds');

    return response.data;
};

export const getCatBreedInfo = async (id: string) => {
    const response = await catApi.get(`/breeds/${id}`);

    return response.data;
};

export const getCatsPhotoForBreed = async (breedId: string) => {
    const response = await catApi.get(`/images/search`, {
        params: {
            limit: 10,
            breed_ids: breedId
        }
    });

    return response.data;
};
