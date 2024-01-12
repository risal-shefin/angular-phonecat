import 'zone.js'; // Without this, you'll get "Error: NG0908: In this configuration Angular requires Zone.js"
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);