interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}
export declare const useCounterStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CounterState>>;
export {};
