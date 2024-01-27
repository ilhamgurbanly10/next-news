export interface Hook {
    user: any;
    fetchUser: any;
    info: InfoAtom;
    fetchInfo: () => void;
    topCategories: TopCategories;
}

export interface User {
}

export interface UserAtom {
    data: User;
    error: boolean;
    loading: boolean;
}

export interface Info {
    title: string;
    images: string[];
}

export interface InfoAtom {
    data: Info | null;
    error: boolean;
    loading: boolean;
}

export interface TopCategory {
    src: string;
    label: string;
    href: string;
}

export interface TopCategories {
    data: TopCategory[];
    error: boolean;
    loading: boolean;
}

