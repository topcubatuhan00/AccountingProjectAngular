import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from 'src/app/common/components/blank/blank.component';
import { SectionComponent } from 'src/app/common/components/blank/section/section.component';
import { NavModel } from 'src/app/common/components/blank/models/nav.model';
import { UcafService } from './services/ucaf.service';
import { UcafModel } from './models/ucaf.model';
import { UcafPipe } from './pipes/ucaf.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidInputDirective } from 'src/app/common/directives/valid-input.directive';
import { LoadingButtonComponent } from 'src/app/common/components/loading-button/loading-button.component';
import { ToastrService, ToastrType } from '../auth/services/toastr.service';
import { CreateUcafModel } from './models/create-ucaf.model';

@Component({
  selector: 'app-ucafs',
  standalone: true,
  imports: [CommonModule, BlankComponent, SectionComponent, UcafPipe, FormsModule,ValidInputDirective, FormsModule, LoadingButtonComponent],
  templateUrl: './ucafs.component.html',
  styleUrls: ['./ucafs.component.css']
})
export class UcafsComponent implements OnInit{
  navs: NavModel[] = [
    {
      routerLink: "/",
      class: "",
      name: "Ana Sayfa"
    }, {
      routerLink: "/ucafs",
      class: "active",
      name: "Hesap Planı"
    }
  ]
  ucafs: UcafModel[] = [];
  filterText: string = "";

  isAddForm: boolean = false;

  ucaftype: string  ="M";

  /* loading button settings */
  isLoading: boolean = false;

  constructor(
    private _ucaf:UcafService,
    private _toastr: ToastrService
  ){}

    ngOnInit(): void {
      this.getAll();
    }

  getAll(){
    this._ucaf.getAll(res => {this.ucafs = res.data; console.log(res)});
    
  }

  showAddForm(){
    this.isAddForm = true;
  }

  add(form: NgForm) {
    if (form.valid) {      
      let model = new CreateUcafModel();
      model.code = form.controls["code"].value;
      model.type = form.controls["type"].value;
      model.name = form.controls["name"].value.toUpperCase();
      console.log(model)
      this._ucaf.add(model, (res) => {
        form.controls["code"].setValue("");
        form.controls["name"].setValue("");
        this.ucaftype = "M";

        this.getAll();        
        this._toastr.toast(ToastrType.Success, res.message, "Başarılı!");
      });
    }
  }
}
