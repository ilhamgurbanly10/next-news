export interface Loading {
    start: () => void;
    stop: () => void;
    state: boolean;
}

export interface Props {
    loading: Loading;
}

