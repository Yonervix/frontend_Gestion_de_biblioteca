import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  ResultResponse,
  Result,
} from '../interfaces/globalInterface';
import { Libro } from '../interfaces/libroInterface';

type ResultLibro = Result | undefined;
type LibroArray = ResultResponse<Libro[]>;

const myApp: string = 'libros/';

@Injectable({
  providedIn: 'root',
})
export class ApiLibro {
  constructor(private http: HttpClient) {}

  async getLibrosIndex(): Promise<LibroArray> {
    const result = this.http.get(environment.api_url + myApp);
    return firstValueFrom(result as Observable<LibroArray>);
  }

  async addLibro(request: Object): Promise<ResultLibro> {
    const result = this.http.post(
      environment.api_url + myApp + 'crear/',
      request,
    );
    return firstValueFrom(result as Observable<ResultLibro>);
  }

  async updateLibro(request: Object): Promise<ResultLibro> {
    const result = this.http.put(
      environment.api_url + myApp + 'actualizar/',
      request,
    );
    return firstValueFrom(result as Observable<ResultLibro>);
  }

  async deleteLibro(id: number): Promise<ResultLibro> {
    const result = this.http.delete(
      environment.api_url + myApp + 'eliminar/' + id + '/',
    );
    return firstValueFrom(result as Observable<ResultLibro>);
  }
}