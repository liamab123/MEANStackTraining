import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskTrackerService {

  constructor(public http:HttpClient) { }
  storeTask(task:any){
    this.http.post("http://localhost:3000/tasks",task).subscribe(result=>console.log(result),error=>console.log(error));
  }
  loadTasks():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }
}
