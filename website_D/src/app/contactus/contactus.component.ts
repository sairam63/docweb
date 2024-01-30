// src/app/contactus/contactus.component.ts
import { Component } from '@angular/core';
import { ContactUsService } from '../newservices/contactus.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  formData: any = {
    name: '',
    phoneNumber: '',
    email: '',
    service: '',
    message: '',
  };

  constructor(private contactUsService: ContactUsService) {}

  submitContactForm() {
    this.contactUsService.submitContactForm(this.formData).subscribe(
      (data) => {
        // Handle success, you can update UI or show a success message
        console.log('Success:', data 
        // {
        //   name: data.name,
        //   phoneNumber: data.number,
        //   email: data.email,
        //   message: data.message,
        // }
        );

        console.log('Response Data:', data);
      },
      (error) => {
        // Handle error, you can show an error message to the user
        console.error('Error:', error);
      }
    );
  }

  
}
