import { writable } from 'svelte/store';

export const PAGE_ORDER = ['/', '/about', '/skills', '/projects', '/contact'];

export const navDirection = writable(1);

export function getPageIndex(path) {
    const idx = PAGE_ORDER.indexOf(path);
    return idx === -1 ? 0 : idx;
}
