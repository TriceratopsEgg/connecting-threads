import { ColorPattern, ThreadTreadOrder, TieUpTypes } from "$lib/weaving";
import { writable } from "svelte/store";

export interface WeavingPatterStoreInterface {
    designName: string,
    sharePublic: boolean,
    shaftCount: number,
    treadleCount: number,
    tieUpPattern: TieUpTypes,
    tieUp: boolean[][],
    warpThreadCount: number,
    warpColorPattern: ColorPattern,
    warpColorPalette: string[],
    warpColorOrder: string[],
    threadingOrder: ThreadTreadOrder,
    threadingPattern: number[],
    weftThreadCount: number,
    weftColorPattern: ColorPattern,
    weftColorPalette: string[],
    weftColorOrder: string[],
    treadleOrder: ThreadTreadOrder,
    treadlingPattern: number[],
}

export const weavingPatternStore = writable<WeavingPatterStoreInterface>({
    designName: '',
    sharePublic: false,
    shaftCount: 4,
    treadleCount: 4,
    tieUpPattern: TieUpTypes.Default,
    tieUp: [],
    warpThreadCount: 20,
    warpColorPattern: ColorPattern.Custom,
    warpColorPalette: [],
    warpColorOrder: [],
    threadingOrder: ThreadTreadOrder.Custom,
    threadingPattern: [],
    weftThreadCount: 20,
    weftColorPattern:  ColorPattern.Custom,
    weftColorPalette: [],
    weftColorOrder: [],
    treadleOrder: ThreadTreadOrder.Custom,
    treadlingPattern: [],
});