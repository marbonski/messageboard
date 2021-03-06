import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class WebService {

    constructor(private http: Http) {}

    getMessages() {
        return this.http.get('http://localhost:1234/api/messages').toPromise;
    }
}
