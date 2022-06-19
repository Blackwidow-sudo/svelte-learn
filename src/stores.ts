import { writable } from 'svelte/store';
import type { CamAbbr, DateString, RoverName, Sol } from './types';

interface OverlayMessage {
    title: string;
    message: string;
}

interface SearchFormData {
    rover: RoverName;
    date: Sol | DateString;
    camera: CamAbbr;
    page: number;
}

function createMessage() {
    const { subscribe, set, update } = writable<OverlayMessage>({
        title: '',
        message: '',
    });

    return {
        subscribe,
        show: (title: string, message: string) => {
            set({ title, message });
        },
        reset: () => set({ title: '', message: '' }),
    };
}

// TODO
function createFormData() {
    const { subscribe, set, update } = writable<SearchFormData>();

    return {
        subscribe,
        update: (val: { [key: string]: string | number }) =>
            update((fd: SearchFormData) => {
                return {
                    ...fd,
                    ...val,
                };
            }),
    };
}

export const overlayMessage = createMessage();
export const formData = createFormData();
