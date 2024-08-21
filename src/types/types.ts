export type Breed = {
    "weight": {
        "imperial": string,
        "metric": string
    },
    "height": {
        "imperial": string,
        "metric": string
    },
    "id": number | string,
    "name": string,
    "life_span": string,
    "reference_image_id": string,
    "image": {
        "id": string,
        "width": number,
        "height": number,
        "url": string
    },
    "bred_for"?: string,
    "breed_group"?: string,
    "country_code"?: string,
    "temperament"?: string,
    "origin"?: string,
    "description"?: string
};

export type PhotoBasic = {
    breeds: Omit<Breed, 'image'>[],
    id: string,
    url: string,
    width: number,
    height: number,
};
