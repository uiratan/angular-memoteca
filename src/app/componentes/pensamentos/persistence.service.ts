import { Pensamento } from './pensamento';
import { Observable } from 'rxjs'

export interface PersistenceService {

  readonly API: string;

  listar(): Observable<Pensamento[]>;
  criar(pensamento: Pensamento): Observable<Pensamento>;
  excluir(id: number): Observable<Pensamento>;
  buscarPorId(id: number): Observable<Pensamento>;
  editar(pensamento: Pensamento): Observable<Pensamento>;

}
