import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {SharedModule} from './shared.module';
import { SwSandboxComponent } from './sw-sandbox/sw-sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SwSandboxComponent
  ],
  imports: [
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
