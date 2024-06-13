import ButtonShared from "./ui/Button";

export const add = (a: number, b: number) => {
  return a + b;
};
export const shared = "Hallo from shared!";

export { useCounterStore } from "./stores/counterStore";
export default ButtonShared;
