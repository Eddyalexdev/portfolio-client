import { Language } from "./language";

export interface AdminProject {
    _id: String,
    title: String,
    images: Array<String>,
}

export interface Project extends AdminProject{
    languages: Array<Language>
}