import { writable } from "svelte/store";

export interface StepsStoreInterface {
    currentStep: number;
    maxSteps: number;
}

export const stepsStore = writable<StepsStoreInterface>({
    currentStep: 1,
    maxSteps: 1,
});