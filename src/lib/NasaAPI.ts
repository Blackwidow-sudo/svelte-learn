import type { CamAbbr, Photo, RoverManifest, RoverName } from '../types';
import { isArrOfPhotos, isManifest } from './typeGuards';

export default class NasaAPI {
    private static _demoApiKey = 'DEMO_KEY';
    private static _baseURL = new URL('https://api.nasa.gov');

    public static async fetchManifest(
        roverName: RoverName,
        apiKey: string = this._demoApiKey
    ): Promise<RoverManifest> {
        const url = new URL(`mars-photos/api/v1/manifests/${roverName}`, this._baseURL);

        url.searchParams.append('api_key', apiKey);

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!isManifest(data.photo_manifest)) {
                throw new Error("NASA-API didn't return a Manifest.");
            }

            return data.photo_manifest as RoverManifest;
        } catch (err: unknown) {
            throw err;
        }
    }

    public static async fetchPhotos(
        roverName: RoverName,
        cam: CamAbbr,
        solOrDate: number | string,
        page: number = 1,
        apiKey: string = this._demoApiKey
    ): Promise<Photo[] | undefined> {
        const url = new URL(
            `mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos`,
            this._baseURL
        );

        url.searchParams.append('api_key', apiKey);
        url.searchParams.append('camera', cam);
        url.searchParams.append('page', page.toString());

        if (typeof solOrDate === 'number') {
            url.searchParams.append('sol', solOrDate.toString());
        } else if (!isNaN(Date.parse(solOrDate))) {
            url.searchParams.append('earth_date', solOrDate);
        } else {
            throw new Error('The given Sol/Date is not valid.');
        }

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Doesn't work as intended: Errors when API responds with no images
            if (!isArrOfPhotos(data.photos)) {
                console.warn('No Photos found.');
                // throw new Error("NASA-API didn't return an Array of Photos.");
            }

            return data.photos as Photo[];
        } catch (err: unknown) {
            throw err;
        }
    }
}
