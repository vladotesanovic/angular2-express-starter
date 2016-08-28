import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiService } from "../../service/api.service";

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ /* Declare components and pipes */],
    exports:      [ /* Export them */ ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApiService
            ]
        };
    }
}
