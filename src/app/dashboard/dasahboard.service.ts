import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../core/api-endpoints';
import { SecureHttpService } from '../core/secure-http.service';

@Injectable({
  providedIn: 'root'
})
export class DasahboardService {

  constructor(private secureHttpService: SecureHttpService) { }

  getList() {
    return this.secureHttpService.get(ApiEndpoints.TEST_API);
  }
}
