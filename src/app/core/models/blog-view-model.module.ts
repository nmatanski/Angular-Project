export class BlogViewModel {
    Id: string;
    Title: string;
    Description: string;
    Author: string;
    ImgSrc: string;

    constructor(id?: string, title?: string,
        description?: string, author?: string, img?: string) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Author = author;
        this.ImgSrc = img;
    }
}
