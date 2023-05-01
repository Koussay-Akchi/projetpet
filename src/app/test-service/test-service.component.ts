import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent {

  animal: any;

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}


  ngOnInit() {
    var id_animal= this.dataService.id_animal;

    this.http.get<any[]>(`http://localhost:3005/animals/${id_animal}`)
      .subscribe((data) => {
        this.animal = data;
        console.log(this.animal)
      });
      
  }

}
