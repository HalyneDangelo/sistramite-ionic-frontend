import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UsuarioDTO } from "../../models/usuario.dto";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) {

    }
    findByEmail(email: string) : Observable<UsuarioDTO> {

        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/login?value=${email}`);
    }
}