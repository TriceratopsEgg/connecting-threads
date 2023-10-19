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