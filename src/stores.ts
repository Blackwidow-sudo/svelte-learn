import type { RoverManifest } from 'src/types';
import { writable } from 'svelte/store';

function createManifest() {
    const { subscribe, set, update } = writable();

    return {
        subscribe,
        set: (mani: RoverManifest) => set(mani),
        reset: () => set(null),
    };
}

function createMessage() {
    const { subscribe, set, update } = writable('');

    return {
        subscribe,
        show: (msg: string) => set(msg),
        reset: () => set(''),
    };
}

export const ManifestStore = createManifest();
export const infoMsg = createMessage();
