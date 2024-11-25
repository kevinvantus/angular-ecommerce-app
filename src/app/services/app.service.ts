import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  #currentLang = signal('en');

  get currentLang() {
    return this.#currentLang();
  }

  set currentLang(lang: string) {
    this.#currentLang.set(lang);
  }
}
