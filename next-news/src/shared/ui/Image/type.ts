export interface Props {
    className?: string;
    width?: number;
    height?: number;
    src?: string;
    alt?: string;
    quality?: number;
    loading?: 'lazy' | 'eager';
    loadingText?: boolean;
    errorText?: boolean;
}

export interface ModelReturnProps {
    handleError: () => void;
    handleLoadingComplete: () => void;
    loaded: boolean;
    error: boolean; 
}