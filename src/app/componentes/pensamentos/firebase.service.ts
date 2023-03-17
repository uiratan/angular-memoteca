import { PersistenceService } from './persistence.service';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements PersistenceService {

  /*
  getAllPensamentos: http.get('$url/pensamentos.json')
  addPensamento: http.put('$url/pensamentos/id.json')
  getPensamentoById: http.get('$url/pensamentos/id.json')
  editPensamento: http.put('$url/pensamentos/id.json')
  removerPensamento: http.delete('$url/pensamentos/id.json')
  */
  readonly API = 'https://angular-memoteca-5b5b9-default-rtdb.firebaseio.com/pensamentos';

  proxId: number = 0;

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Pensamento[]> {
    //console.log(this.gerarId());
    const url = `${this.API}.json`;
    return this.http.get<Pensamento[]>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}.json`;

    console.log(`Buscando pelo id: : ${url}`);

    return this.http.get<Pensamento>(url);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    this.listar().subscribe((listaPensamentos) => {
      this.proxId = listaPensamentos.length+1;
    });

    let url = `${this.API}/${this.proxId}.json`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}.json`;
    return this.http.delete<Pensamento>(url);
  }


  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}.json`;
    console.log(url);

    return this.http.put<Pensamento>(url, pensamento);
  }

}



