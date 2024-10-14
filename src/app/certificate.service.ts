import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  API = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  // Register a new certificate
  public registerCertificate(certificateData: any) {
    return this.http.post(`${this.API}/certificate`, certificateData);
  }

  // Get all certificates
  public getCertificates() {
    return this.http.get(`${this.API}/certificate`);
  }

  // Delete a certificate by ID
  public deleteCertificate(certificateId: any) {
    return this.http.delete(`${this.API}/certificate/${certificateId}`);
  }

  // Update an existing certificate
  public updateCertificate(certificate: any) {
    return this.http.put(`${this.API}/certificate/${certificate.id}`, certificate);
  }
}
