export interface Hook {
    user: any;
    fetchUser: any;
}

export interface User {
}

export interface UserAtom {
    data: User;
    error: boolean;
    loading: boolean;
}

