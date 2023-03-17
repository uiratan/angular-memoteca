import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { JsonService } from './json.service';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(
      private http: HttpClient,
      private dbService: FirebaseService
    ) { }

  listar(): Observable<Pensamento[]> {
    return this.dbService.listar();
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.dbService.criar(pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    return this.dbService.excluir(id);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    return this.dbService.buscarPorId(id);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.dbService.editar(pensamento);
  }


}
