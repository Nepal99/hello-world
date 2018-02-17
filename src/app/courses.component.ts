import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses : {{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>`          
})

export class CoursesComponent {


    title = "List of courses";
    // courses = ['Course1', 'Course2', 'Course3', 'Course4'];
    courses;

    /*
     Another way importing and using the services. 
     constructor() {
         let service = new CoursesService();
         this.courses = service.getCourses();
     } */
    /**
     * 
     * @param service 
     * Here we are passing the CoursesService as the dependency to the component.
     * We have to provide this dependecy in the app.module.ts in providers[]
     */
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}
}

