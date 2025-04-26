import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'theme';
  private readonly themeSubject: BehaviorSubject<'light' | 'dark'>;
  theme$; // Observable for theme changes

  constructor() {
    const initialTheme = this.loadTheme();
    this.themeSubject = new BehaviorSubject<'light' | 'dark'>(initialTheme);
    this.theme$ = this.themeSubject.asObservable();

    // Important: apply theme at initialization
    if (typeof document !== 'undefined') {
      this.applyTheme(initialTheme);
    }
  }

  private loadTheme(): 'light' | 'dark' {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(this.themeKey);
      return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light';
    }
    return 'light';
  }

  private applyTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme); // <- aggiungiamo anche su body (opzionale ma consigliato)
  }

  setTheme(theme: 'light' | 'dark') {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.themeKey, theme);
      this.applyTheme(theme);
    }
    this.themeSubject.next(theme);
  }

  getTheme(): 'light' | 'dark' {
    return this.themeSubject.getValue();
  }
}
