import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
    <h2>Courses</h2>
    <h2>{{"Title : " + title}}</h2>
    <h3>{{getTitle()}}</h3>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    `
})

export class CoursesComponent {
    title = 'List of courses';
    courses =['Course1','Course2','Course3',];
    getTitle(){
        return this.title;
    }
}