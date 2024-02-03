import { sloganState } from "@/shared/state/atoms";

export const initializeState = ({ set, slogan }): void => {
    set(sloganState, slogan);
};