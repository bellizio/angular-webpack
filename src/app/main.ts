import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
