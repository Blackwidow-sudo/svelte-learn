import type { RoverManifest } from 'src/types';
import { writable } from 'svelte/store';

function createManifest() {
    const {subscribe, set, update} = writable()

    return {
        subscribe,
        set: (mani: RoverManifest) => set(mani),
        reset: () => set(null)
    }
}

export const ManifestStore = createManifest();
