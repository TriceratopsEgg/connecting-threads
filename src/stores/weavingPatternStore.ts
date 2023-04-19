import { writable } from "svelte/store";

export const weavingPatternStore = writable<{
    numberOfShafts?: number,
    tieUpPattern?: string,
    numberOfWarpThreads?: number,
    numberOfWeftThreads?: number,
    repeatingWarpColours?: boolean,
    repeatingWeftColours?: boolean,
    warpColourPattern?: [],
    weftColourPattern?: [],
}>({
    numberOfShafts: undefined,
    tieUpPattern: undefined,
    numberOfWarpThreads: undefined,
    numberOfWeftThreads: undefined,
    repeatingWarpColours: undefined,
    repeatingWeftColours: undefined,
    warpColourPattern: [],
    weftColourPattern: [],
});

export const weavingStepsStore = writable<{
    currentStep: number
}>({
    currentStep: 1
})