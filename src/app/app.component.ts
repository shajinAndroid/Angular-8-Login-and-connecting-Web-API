import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { ConfigServiceService } from './config-service.service';
import { Data, Templerature } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fist Test API';

  catBreads: any | undefined;
  tempCatBreads: any | undefined;
  temperature: any | undefined;
  color = 'cyan';

  constructor(public configService: ConfigServiceService,  private authenticationService: AuthenticationService, private router: Router){}

  ngOnInit(){
    this.showConfig();
    this.showTemperature();
  }
  showTemperature() {
  
    this.configService.getTemperature()
    // clone the data object, using its known Config shape
    .subscribe((data: Templerature) => {
      this.temperature = data;
      console.log(this.temperature);
    });
  }

  add(name: string){

    console.log(name);
  }

  logout(){

this.authenticationService.logout();
this.router.navigate(['/root1']);
  }

  search(name: any){
    this.catBreads = this.tempCatBreads.filter(item => item.breed.toLowerCase().trim().indexOf(name)!=-1);
    console.log(name);
  }

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Data) => {
        this.catBreads = data.data;
        this.tempCatBreads = data.data;
        console.log(this.catBreads);
      });
      
    }
}
