import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly languageKey = 'language';
  private readonly languageSubject: BehaviorSubject<'gb' | 'it'>;
  language$; // declare only

  constructor() {
    const initialLanguage = this.loadLanguage();
    this.languageSubject = new BehaviorSubject<'gb' | 'it'>(initialLanguage);
    this.language$ = this.languageSubject.asObservable(); // initialize here
  }

  private loadLanguage(): 'gb' | 'it' {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem(this.languageKey);
      return (savedLanguage === 'gb' || savedLanguage === 'it') ? savedLanguage : 'gb';
    }
    return 'gb';
  }

  setLanguage(language: 'gb' | 'it') {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.languageKey, language);
    }
    this.languageSubject.next(language);
  }

  getLanguage(): 'gb' | 'it' {
    return this.languageSubject.getValue();
  }
}
