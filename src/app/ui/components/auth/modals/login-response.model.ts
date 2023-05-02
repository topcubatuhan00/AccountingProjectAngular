import { CompanyModel } from "./company.model";
import { TokenModel } from "./token.model";

export  class LoginResponseModel{
        token: TokenModel = new TokenModel();
        email: string = "";
        userId: string  = "";
        nameLastName: string = "";
        year: number = new Date().getFullYear();
        companies: CompanyModel[] = [];
        company: CompanyModel = new CompanyModel(); 
}