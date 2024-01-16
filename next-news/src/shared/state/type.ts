export interface Hook {
    user: any;
    fetchUser: any;
    info: InfoAtom;
    fetchInfo: () => void;
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

