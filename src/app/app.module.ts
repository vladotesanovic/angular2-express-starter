import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { feedReducer } from './store/feed/feed.reducer';
import { FeedEffects } from './store/feed/feed.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    StoreModule.provideStore({
      feed: feedReducer
    }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    EffectsModule.run(FeedEffects),
    StoreLogMonitorModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
