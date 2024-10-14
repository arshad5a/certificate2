import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificateService } from './certificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'certificate-module';

  constructor(private certificateService: CertificateService) {
    this.getCertificateDetails();
  }

  // Register certificate method
  register(registerForm: NgForm) {
    this.certificateService.registerCertificate(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getCertificateDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // Get certificate details
  getCertificateDetails() {
    this.certificateService.getCertificates().subscribe(
      (resp) => {
        console.log(resp);
        this.certificateDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  certificateDetails = null as any;

  // Delete certificate method
  deleteCertificate(certificate: any) {
    this.certificateService.deleteCertificate(certificate.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getCertificateDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  certificateToUpdate = {
    id: null as any,
    certificateName: "",
    issuedBy: "",
    issueDate: "",
    expiryDate: ""
  };

  // Edit certificate method
  edit(certificate: any) {
    this.certificateToUpdate = { ...certificate };
  }

  // Update certificate method
  updateCertificate() {
    this.certificateService.updateCertificate(this.certificateToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getCertificateDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
