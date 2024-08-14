import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit() {
    // Debugging logs
    console.log('Form submitted'); // Check if this appears in the console

    // Show browser alert
    window.alert('Message sent successfully!');
  }

}
