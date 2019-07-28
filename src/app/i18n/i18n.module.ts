import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function loadTranslationsFactory(
  translateService: TranslateService,
  httpClient: HttpClient) {
  return () => httpClient.get('assets/config.json')
      .pipe(map((config: any) => translateService.use(config.language)))
      .toPromise();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [],
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadTranslationsFactory, deps: [TranslateService, HttpClient], multi: true },
  ],
  exports: [
    TranslateModule
  ]
})
export class I18NModule {
  constructor(@Optional() @SkipSelf() parentModule: I18NModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been imported!`);
    }
  }
}
