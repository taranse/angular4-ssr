import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  product(image: string, options?: { title?: string, alt?: string, alias?: { factory?: string, series?: string, id? } }) {
    return `<img src="src/assets/img/catalog/${options.alias.factory}/${options.alias.series}/${options.alias.id}/${image}" alt="${options.alt}" title="${options.title}">`;
  }

  banner(image: string, options?: { title?: string, alt?: string }) {
    return `<img src="src/assets/img/banners/${image}" alt="${options.alt}" title="${options.title}">`;
  }

  factory(image: string, options?: { title?: string, alt?: string, factory?: string }) {
    return `<img src="src/assets/img/catalog/${options.factory}/${image}" alt="${options.alt}" title="${options.title}">`;
  }

}
