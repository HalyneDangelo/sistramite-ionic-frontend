import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { AutoDTO } from "../../models/autos.dto";

@Injectable()
export class AutoService {

    constructor(private http: HttpClient) {
    }

    findAll() : Observable<AutoDTO[]> {
        return this.http.get<AutoDTO[]>(`${API_CONFIG.baseUrl}/autos`);
    }
}