import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
    exports:      [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
