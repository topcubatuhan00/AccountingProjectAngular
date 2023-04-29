import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";

bootstrapApplication(AppComponent,{
    providers: [
        importProvidersFrom(
            BrowserModule,
            RouterModule.forRoot([
                {
                path: "",
                loadComponent: () => import("./app/ui/components/layouts/layouts.component").then(c => c.LayoutsComponent),
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