import { atom } from "recoil";
export const customerState = atom({
  key: "customerState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
