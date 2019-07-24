import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { entityConfig, defaultDataServiceConfig } from "./entity-metadata";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";

@NgModule({
  declarations: [],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 30 }),
    EntityDataModule.forRoot(entityConfig)
  ]
})
export class AppStoreModule {}
