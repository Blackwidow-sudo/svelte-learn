import type { CamAbbr, DateString, Photo, RoverManifest } from '../types';
import { cameraDescriptions } from '../globals';

function isManifest(mani: unknown): mani is RoverManifest {
    return (mani as RoverManifest).launch_date !== undefined;
}

function isPhoto(photo: unknown): photo is Photo {
    return (photo as Photo).img_src !== undefined;
}

function isCamAbbr(str: unknown): str is CamAbbr {
    if (typeof str !== 'string') {
        return false;
    }
    if (cameraDescriptions.hasOwnProperty(str.toUpperCase())) {
        return true;
    } else return false;
}

function isArrOfPhotos(arr: unknown): arr is Photo[] {
    if (!Array.isArray(arr)) {
        return false;
    }
    if (arr.length === 0) {
        return false;
    }
    return isPhoto(arr[0]);
}

function isArrayOfCameras(arr: unknown): arr is CamAbbr[] {
    if (!Array.isArray(arr)) {
        return false;
    }
    arr.forEach((str) => {
        if (!isCamAbbr(str)) {
            return false;
        }
    });
    return true;
}

function isDateString(date: string): date is DateString {
    return isNaN(Date.parse(date));
}

export { isManifest, isPhoto, isCamAbbr, isArrOfPhotos, isArrayOfCameras, isDateString };
