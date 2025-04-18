import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<'gb' | 'it'>('gb'); // Default to English
  language$ = this.languageSubject.asObservable();

  setLanguage(language: 'gb' | 'it') {
    this.languageSubject.next(language);
  }

  getLanguage(): 'gb' | 'it' {
    return this.languageSubject.getValue();
  }
}