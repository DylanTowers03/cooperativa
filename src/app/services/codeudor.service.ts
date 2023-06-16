import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CodeudorI } from '../models/codeudor';

@Injectable({
  providedIn: 'root'
})
export class CodeudorService {
  // api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/codeudor/`
  constructor(
    private http:HttpClient
  ) { }

  getAllCodeudor():Observable<{codeudor:CodeudorI[]}>{
    return this.http
      .get<{codeudor:CodeudorI[]}>(this.base_path)
  }

  getOneCodeudor():Observable<{codeudor:CodeudorI[]}>{
    return this.http
      .get<{codeudor:CodeudorI[]}>(this.base_path)
  }

  createCodeudor(data: any):Observable<CodeudorI>{
    return this.http.post<CodeudorI>(this.base_path, data)
  }

  updateCodeudor(id: number, data: any): Observable<CodeudorI> {
    return this.http.put<CodeudorI>(`${this.base_path}/${id}`, data);
  }

  deleteCodeudor(id: number): Observable<CodeudorI> {
    return this.http.delete<CodeudorI>(`${this.base_path}/${id}`);
  }


}
