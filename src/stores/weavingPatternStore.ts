import { writable } from "svelte/store";

export interface WeavingPatterStoreInterface {
    shaftCount?: number,
    treadleCount?: number,
    tieUpPattern?: string,
    warpThreadCount?: number,
    weftThreadCount?: number,
    repeatingWarpColours?: boolean,
    repeatingWeftColours?: boolean,
    warpColourPattern?: [],
    weftColourPattern?: [],
}

export const weavingPatternStore = writable<WeavingPatterStoreInterface>({
    shaftCount: undefined,
    treadleCount: undefined,
    tieUpPattern: undefined,
    warpThreadCount: undefined,
    weftThreadCount: undefined,
    repeatingWarpColours: undefined,
    repeatingWeftColours: undefined,
    warpColourPattern: [],
    weftColourPattern: [],
});