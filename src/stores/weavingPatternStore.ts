import type { TieUpTypes } from "$lib/weaving";
import { writable } from "svelte/store";

export interface WeavingPatterStoreInterface {
    shaftCount?: number,
    treadleCount?: number,
    tieUpPattern?: TieUpTypes,
    warpThreadCount?: number,
    weftThreadCount?: number,
    repeatingWarpColours?: boolean,
    repeatingWeftColours?: boolean,
    warpColorPalette?: string[],
    weftColorPalette?: string[],
    warpColorOrder?: string[],
    weftColorOrder?: string[],
}

export const weavingPatternStore = writable<WeavingPatterStoreInterface>({
    shaftCount: undefined,
    treadleCount: undefined,
    tieUpPattern: undefined,
    warpThreadCount: undefined,
    weftThreadCount: undefined,
    repeatingWarpColours: undefined,
    repeatingWeftColours: undefined,
    warpColorPalette: [],
    weftColorPalette: [],
    warpColorOrder: [],
    weftColorOrder: [],
});