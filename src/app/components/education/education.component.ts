import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit, OnDestroy {
  selectedTheme: 'light' | 'dark' = 'light';
  events: Array<any> = [];
  private themeSubscription: Subscription | null = null;

  constructor(
    private readonly translate: TranslateService,
    @Inject(ThemeService) private readonly themeService: ThemeService
  ) { }

  ngOnInit() {
    // Sottoscrivi agli eventi di cambio tema
    this.themeSubscription = this.themeService.theme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });

    // Carica gli eventi iniziali
    this.loadEvents();

    // Ricarica gli eventi al cambio della lingua
    this.translate.onLangChange.subscribe(() => {
      this.loadEvents();
    });
  }

  ngOnDestroy() {
    // Annulla la sottoscrizione per evitare memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  private async loadEvents() {
    const translations = await this.getTranslations();

    this.events = [
      this.createMasterEvent(translations),
      this.createBachelorEvent(translations),
      this.createHighSchoolEvent(translations),
    ];
  }

  private async getTranslations(): Promise<any> {
    return firstValueFrom(
      this.translate.get([
        'EDUCATION_SECTION.MASTER',
        'EDUCATION_SECTION.BACHELOR',
        'EDUCATION_SECTION.HIGH_SCHOOL',
        'EDUCATION_SECTION.BACHELOR_INFO',
        'EDUCATION_SECTION.MASTER_INFO',
        'EDUCATION_SECTION.APRIL',
        'EDUCATION_SECTION.SEPTEMBER',
        'EDUCATION_SECTION.JUNE',
        'EDUCATION_SECTION.DECEMBER',
        'EDUCATION_SECTION.MASTER_THESIS',
        'EDUCATION_SECTION.BACHELOR_THESIS',
        'EDUCATION_SECTION.DATA_SCIENCE',
        'EDUCATION_SECTION.TSR',
        'EDUCATION_SECTION.ARCHITETTURE',
        'EDUCATION_SECTION.INFORMATION_SYSTEMS',
        'EDUCATION_SECTION.WEB_APP',
        'EDUCATION_SECTION.SOFTWARE_ENGINEERING',
        'EDUCATION_SECTION.FORMAL_LANGUAGES',
        'EDUCATION_SECTION.PDS',
        'EDUCATION_SECTION.SICUREZZA',
        'EDUCATION_SECTION.SOFTWARE_ENGINEERING_2',
        'EDUCATION_SECTION.BIG_DATA',
        'EDUCATION_SECTION.HUMAN_COMPUTER_INTERACTION',
        'EDUCATION_SECTION.MOBILE_APP',
        'EDUCATION_SECTION.ANALISI_MATEMATICA',
        'EDUCATION_SECTION.INFORMATICA',
        'EDUCATION_SECTION.CHIMICA',
        'EDUCATION_SECTION.STRUMENTI_I40',
        'EDUCATION_SECTION.ALGEBRA',
        'EDUCATION_SECTION.FISICA',
        'EDUCATION_SECTION.BASI_DI_DATI',
        'EDUCATION_SECTION.STATISTICA',
        'EDUCATION_SECTION.ANALISI_MATEMATICA_2',
        'EDUCATION_SECTION.RICERCA_OPERATIVA',
        'EDUCATION_SECTION.ECONOMIA',
        'EDUCATION_SECTION.SISTEMI_DI_PRODUZIONE',
        'EDUCATION_SECTION.SISTEMI_ELETTRICI_INDUSTRIALI',
        'EDUCATION_SECTION.FISICA_2',
        'EDUCATION_SECTION.PGP',
        'EDUCATION_SECTION.PROGRAMMAZIONE_OGGETTI',
        'EDUCATION_SECTION.DIRITTO_PRIVATO',
        'EDUCATION_SECTION.SISTEMI_TELEMATICI',
        'EDUCATION_SECTION.PROGETTAZIONE_SERVIZI_WEB',
        'EDUCATION_SECTION.TECNICHE_DI_PROGRAMMAZIONE',
        'EDUCATION_SECTION.AFFIDABILITA',
      ])
    );
  }

  private createMasterEvent(translations: any): any {
    return {
      startYear: '2022',
      startMonth: translations['EDUCATION_SECTION.DECEMBER'],
      endYear: '2025',
      endMonth: translations['EDUCATION_SECTION.APRIL'],
      title: translations['EDUCATION_SECTION.MASTER'],
      location: 'Politecnico di Torino',
      description: translations['EDUCATION_SECTION.MASTER_INFO'],
      logoBlack: 'logos/polito.png',
      logoWhite: 'logos/polito_white.png',
      grade: '107/110',
      thesis: translations['EDUCATION_SECTION.MASTER_THESIS'],
      thesisLink: 'https://webthesis.biblio.polito.it/35445/',
      courses: [
        translations['EDUCATION_SECTION.DATA_SCIENCE'],
        translations['EDUCATION_SECTION.TSR'],
        translations['EDUCATION_SECTION.ARCHITETTURE'],
        translations['EDUCATION_SECTION.INFORMATION_SYSTEMS'],
        translations['EDUCATION_SECTION.WEB_APP'],
        translations['EDUCATION_SECTION.SOFTWARE_ENGINEERING'],
        translations['EDUCATION_SECTION.FORMAL_LANGUAGES'],
        translations['EDUCATION_SECTION.PDS'],
        translations['EDUCATION_SECTION.SICUREZZA'],
        translations['EDUCATION_SECTION.SOFTWARE_ENGINEERING_2'],
        translations['EDUCATION_SECTION.BIG_DATA'],
        translations['EDUCATION_SECTION.HUMAN_COMPUTER_INTERACTION'],
        translations['EDUCATION_SECTION.MOBILE_APP'],
      ],
    };
  }

  private createBachelorEvent(translations: any): any {
    return {
      startYear: '2019',
      startMonth: translations['EDUCATION_SECTION.SEPTEMBER'],
      endYear: '2022',
      endMonth: translations['EDUCATION_SECTION.DECEMBER'],
      title: translations['EDUCATION_SECTION.BACHELOR'],
      location: 'Politecnico di Torino',
      description: translations['EDUCATION_SECTION.BACHELOR_INFO'],
      logoBlack: 'logos/polito.png',
      logoWhite: 'logos/polito_white.png',
      grade: '96/110',
      thesis: translations['EDUCATION_SECTION.BACHELOR_THESIS'],
      courses: [
        translations['EDUCATION_SECTION.ANALISI_MATEMATICA'],
        translations['EDUCATION_SECTION.INFORMATICA'],
        translations['EDUCATION_SECTION.CHIMICA'],
        translations['EDUCATION_SECTION.STRUMENTI_I40'],
        translations['EDUCATION_SECTION.ALGEBRA'],
        translations['EDUCATION_SECTION.FISICA'],
        translations['EDUCATION_SECTION.BASI_DI_DATI'],
        translations['EDUCATION_SECTION.STATISTICA'],
        translations['EDUCATION_SECTION.ANALISI_MATEMATICA_2'],
        translations['EDUCATION_SECTION.RICERCA_OPERATIVA'],
        translations['EDUCATION_SECTION.ECONOMIA'],
        translations['EDUCATION_SECTION.SISTEMI_DI_PRODUZIONE'],
        translations['EDUCATION_SECTION.SISTEMI_ELETTRICI_INDUSTRIALI'],
        translations['EDUCATION_SECTION.FISICA_2'],
        translations['EDUCATION_SECTION.PGP'],
        translations['EDUCATION_SECTION.PROGRAMMAZIONE_OGGETTI'],
        translations['EDUCATION_SECTION.DIRITTO_PRIVATO'],
        translations['EDUCATION_SECTION.SISTEMI_TELEMATICI'],
        translations['EDUCATION_SECTION.PROGETTAZIONE_SERVIZI_WEB'],
        translations['EDUCATION_SECTION.TECNICHE_DI_PROGRAMMAZIONE'],
        translations['EDUCATION_SECTION.AFFIDABILITA'],
      ],
    };
  }

  private createHighSchoolEvent(translations: any): any {
    return {
      startYear: '2014',
      startMonth: translations['EDUCATION_SECTION.SEPTEMBER'],
      endYear: '2019',
      endMonth: translations['EDUCATION_SECTION.JUNE'],
      title: translations['EDUCATION_SECTION.HIGH_SCHOOL'],
      location: 'Liceo Scientifico Statale A. Volta',
      logoBlack: 'logos/volta.png',
      logoWhite: 'logos/volta_white.png',
      grade: '90/100',
    };
  }
}