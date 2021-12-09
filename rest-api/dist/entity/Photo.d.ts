import { User } from "./User";
export declare class Photo {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
    user: User;
}
