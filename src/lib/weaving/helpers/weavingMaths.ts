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