import type { TieUp } from "../../../stores/weavingPatternStore";
import { TieUpTypes } from "../enums/terminology";

export function RepeatColorPattern(
    threadCount: number,
    basePattern: string[],
): string[] {
    let colorOrder: string[] = [];
    for(let i = 0; i < threadCount / basePattern.length; i++) {
        colorOrder = [...colorOrder, ...basePattern];
    }
    for(let i = 0; i < threadCount % basePattern.length; i++) {
        colorOrder = [...colorOrder, basePattern[i]];
    }
    return colorOrder;
}

export function RepeatThreadOrder(
    threadCount: number,
    basePattern: number[],
): number[] {
    let threadOrder: number[] = [];
    for(let i = 0; i < threadCount / basePattern.length; i++) {
        threadOrder = [...threadOrder, ...basePattern];
    }
    for(let i = 0; i < threadCount % basePattern.length; i++) {
        threadOrder = [...threadOrder, basePattern[i]];
    }
    return threadOrder;
}

export function DetermineTieUpDraft(
    tieUpPattern: TieUpTypes,
    shaftCount: number,
    treadleCount: number,
): boolean[][]
{
    let tieUpDraft: boolean[][] = [];
		if (tieUpPattern === TieUpTypes.Default || tieUpPattern === TieUpTypes.Alternative) {
			let midPoint = shaftCount / 2;
			for (let i = 0; i < shaftCount; i++) {
				let tieUpRow: boolean[] = [];
				for (let j = 0; j < treadleCount; j++) {
					let comparison = shaftCount - i - midPoint;
					if (j - comparison >= shaftCount) {
						tieUpRow = [...tieUpRow, tieUpPattern === TieUpTypes.Default ? true : false];
					} else {
						tieUpRow = [
							...tieUpRow,
							tieUpPattern === TieUpTypes.Default
								? !(j < comparison || j - comparison >= midPoint)
								: j < comparison || j - comparison >= midPoint
						];
					}
				}
				tieUpDraft = [...tieUpDraft, tieUpRow];
			}
		}
    return tieUpDraft;
}

export function DetermineTieUpDraftForStore(
    tieUpPattern: TieUpTypes,
    shaftCount: number,
    treadleCount: number,
): TieUp[]
{
    let tieUpDraft = DetermineTieUpDraft(tieUpPattern, shaftCount, treadleCount);
    let tieUpDraftForStore: TieUp[] = tieUpDraft.map((value, index) => ({ order: index, tieUpPattern: value }));
    return tieUpDraftForStore;
}

export function FlattenTieUpDraftFromStore(
    TieUpFromStore: TieUp[]
): boolean[][]
{
    let tieUpDraft: boolean[][] = [];
    TieUpFromStore.forEach(tieUp => {
        tieUpDraft = [...tieUpDraft, tieUp.tieUpPattern];
    });
    return tieUpDraft;
}