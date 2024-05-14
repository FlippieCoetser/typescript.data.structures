export class Benchmark {
    static Performance(action, args) {
        const start = performance.now();
        const result = action(args);
        const end = performance.now();
        setSpecProperty("performance", { time: end - start });
        return result;
    }
    static Memory(action, args) {
        const start = performance.memory.usedJSHeapSize;
        const result = action(args);
        const end = performance.memory.usedJSHeapSize;
        setSpecProperty("memory", { size: end - start });
        return result;
    }
}
//# sourceMappingURL=Benchmark.js.map