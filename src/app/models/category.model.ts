export enum AccessType {
    PRIVATE = 'private',
    PUBLIC = 'public',
}

export interface Category {
    id:         number;
    name:       string;
    slug:       string;
    image:      string;
    acces: AccessType;
    createdAt: Date;
    updatedAt:  Date;
}