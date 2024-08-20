import {dogApi} from "@/axios";

export const getDogBreedsForPage = async (page: number = 0) => {
    const response = await dogApi.get('/breeds', {
        params: {
            page,
            limit: 10,
        }
    });

    return response.data;
};

export const getBreedInfo = async (id: string) => {
    const response = await dogApi.get(`/breeds/${id}`);

    return response.data;
}
