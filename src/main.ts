import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./app/ui/components/auth/guards/auth.guard";
import { provideHttpClient } from "@angular/common/http"

bootstrapApplication(AppComponent,{
    providers: [
        provideHttpClient(),
        importProvidersFrom(
            BrowserModule,
            RouterModule.forRoot([
                {
                path: "",
                loadComponent: () => import("./app/ui/components/layouts/layouts.component").then(c => c.LayoutsComponent),
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: "",
                        loadComponent: () => import("./app/ui/components/blank/blank.component").then(c => c.BlankComponent)
                    }
                ]
                },
                {
                    path: "login",
                    loadComponent: () => import("./app/ui/components/auth/login/login.component").then(c => c.LoginComponent)
                }
        ])
        )
    ]
})