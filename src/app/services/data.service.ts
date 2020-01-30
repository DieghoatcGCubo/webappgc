import { Injectable } from '@angular/core';

// Poder realizar peticiones http desde angular
import { HttpClient} from '@angular/common/http';

//import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCliend: HttpClient) {
    console.log('Service is working');
  }
  getData() {
    return this.httpCliend.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
