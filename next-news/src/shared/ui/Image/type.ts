export interface Props {
    className?: string;
    width?: number;
    height?: number;
    src?: string;
    alt?: string;
    quality?: number;
    loading?: 'lazy' | 'eager';
}

export interface ModelReturnProps {
    handleError: () => void;
    handleLoadingComplete: () => void;
    loaded: boolean;
    error: boolean; 
}