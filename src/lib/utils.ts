import type { RoverManifest, RoverName } from 'src/types';
import { isArrayOfCameras, isManifest } from './typeGuards';
import { cameraDescriptions, availableCams } from '../globals';

function getRoverCams(name: RoverName): { [camAbbr: string]: string } {
    const err = new Error('No Cams available for the given RoverName.');
    const roverCams = {};
    const availCams = availableCams[name.toLowerCase()];

    if (!isArrayOfCameras(availCams)) {
        throw err;
    }

    availCams.forEach((cam) => {
        roverCams[cam] = cameraDescriptions[cam];
    });

    if (Object.keys(roverCams).length === 0) {
        throw err;
    }

    return roverCams;
}

function capitalize(str: string) {
    if (str.length === 0) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

class SessionStore {
    public static get(name: RoverName): RoverManifest | null {
        const storedData = window.sessionStorage.getItem(
            `${name.toLowerCase()}-manifest`
        );
        let manifest: RoverManifest;

        if (!storedData) {
            return null;
        }

        manifest = JSON.parse(storedData);

        if (!isManifest(manifest)) {
            throw new Error('Data in sessionStorage is not of type RoverManifest.');
        }

        return manifest;
    }

    public static set(manifest: RoverManifest): void {
        if (!isManifest(manifest)) {
            throw new TypeError('Argument is not of type RoverManifest.');
        }

        const dataString = JSON.stringify(manifest);

        window.sessionStorage.setItem(
            `${manifest.name.toLowerCase()}-manifest`,
            dataString
        );
    }
}

export { capitalize, SessionStore, getRoverCams };
