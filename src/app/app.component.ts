import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';
  selectedLanguage: 'gb' | 'it' = 'gb';
  selectedTheme: 'light' | 'dark' = 'light';

  languageMap: { [key: string]: string } = {
    'gb': 'English',
    'it': 'Italiano'
  };

  constructor(
    @Inject(TranslateService) private readonly translate: TranslateService, 
    @Inject(ThemeService) private readonly themeService: ThemeService, 
    @Inject(LanguageService) private readonly languageService: LanguageService
  ) {
    this.selectedTheme = this.themeService.getTheme();
    this.selectedLanguage = this.languageService.getLanguage();
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  selectLanguage(language: 'gb' | 'it') {
    this.selectedLanguage = language;
    this.languageService.setLanguage(language);
    this.translate.use(language);
  }

  getLanguageName(): string {
    return this.languageMap[this.selectedLanguage];
  }

  toggleTheme() {
    this.selectedTheme = this.selectedTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
    this.themeService.setTheme(this.selectedTheme);
  }
}