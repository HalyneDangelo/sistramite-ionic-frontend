import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { AutoDTO } from "../../models/autos.dto";
import { Observable } from "rxjs/RX";

@Injectable()
export class AutoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<AutoDTO[]> {
        return this.http.get<AutoDTO[]>('${API_CONFIG.baseUrl}/autos');
    }
}