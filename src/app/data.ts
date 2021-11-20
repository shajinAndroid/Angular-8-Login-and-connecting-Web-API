export interface Datum {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
}

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export interface Data {
    current_page: number;
    data: Datum[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}

// Generated by https://quicktype.io

export interface Templerature {
    date:         string;
    temperatureC: number;
    temperatureF: number;
    summary:      string;
}

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}