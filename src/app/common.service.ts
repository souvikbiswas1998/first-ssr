import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private meta: Meta, private title: Title) { }

  updateMetaInfo(title: string, description: string, image?: string) {
    this.meta.updateTag({ property: "og:title", content: title });
    this.meta.updateTag({ property: "og:description", content: description });
    if (image) this.meta.updateTag({ property: "og:image", content: image });

    this.meta.updateTag({ name: "title", content: title });
    this.title.setTitle(title);
    this.meta.updateTag({ name: "description", content: description });
    if (image) this.meta.updateTag({ itemprop: "image", content: image });
    console.log(title, description, image, "fyg");
  }
}
