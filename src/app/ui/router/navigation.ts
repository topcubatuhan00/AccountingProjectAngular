export class Navigation{
    routerLink: string = "";
    name: string =  "";
    icon: string = "";
}

export const Navigations: Navigation[] = [
    {
        routerLink: "/",
        name: "Ana Sayfa",
        icon: "fa fa-home text"
    },
    {
        routerLink: "/ucafs",
        name: "Hesap Planı",
        icon: "far fa-circle text"
    }
]