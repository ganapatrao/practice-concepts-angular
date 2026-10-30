import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-practice',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-form-practice.html',
  styleUrl: './template-driven-form-practice.css',
})
export class TemplateDrivenFormPractice {
  employeeName = '';
  employeeEmail = '';
  department = '';

  gender = '';
  termsandcodition = '';

  address = '';
  selectedSkills: string[] = [];

  availableSkills = ['Angular', 'React', 'Node.js'];

  departments = ['Angular', 'React', 'Node.js'];

  workmode = [
    { id: 1, name: 'WFH', selected: false },
    { id: 2, name: 'WFO', selected: false },
    { id: 3, name: 'Hybrid', selected: false },
  ];

     workModePrefered :[]=[]

  markAsChanged() {
    console.log('Employee name changed:', this.employeeName);
  }

  onSubmit(empform: NgForm): void {
    console.log('Form submitted with employee name:', empform);
    console.log('Form submitted with employee email:', empform.value.employeeEmail);
    const employee = {
      ...empform.value,
      selectedSkills: this.selectedSkills,
    };

    employee.workModePrefered = this.workmode.filter((mode) => mode.selected).map((mode) => mode.name);
    console.log('Form submitted with employee data:', employee);
  }

  onSkillsChange(skill: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedSkills.push(skill);
    } else {
      const index = this.selectedSkills.indexOf(skill);
      if (index > -1) {
        this.selectedSkills.splice(index, 1);
      }

      //or
      //  this.selectedSkills = this.selectedSkills.filter(
      // item => item !== skill)
    }
  }



}
