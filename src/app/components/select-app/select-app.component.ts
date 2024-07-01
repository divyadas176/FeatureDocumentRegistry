import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-app',
  templateUrl: './select-app.component.html',
  styleUrls: ['./select-app.component.css']
})
export class SelectAppComponent {
    applications = ["LSREv2", "SSDC", "SABRE"]
    selectedValue:string=''

    constructor(private router: Router){}

    onSelectChange(app:any){
      console.log("app: ", app)
      switch (app.target.value) {
      case 'LSREv2':
        console.log("hi; ",this.router.navigate(['lsrev2']))
        this.router.navigate(['featureDocReg','lsrev2']);
        break;
      case 'SSDC':
        this.router.navigate(['featureDocReg','ssdc']);
        break;
      case 'SABRE':
          this.router.navigate(['featureDocReg','sabre']);
          break;
      default:
        break;
    }
       
    
  }
}
