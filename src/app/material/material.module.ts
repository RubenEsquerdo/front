import {NgModule} from '@angular/core';

import{MatButtonModule}from '@angular/material/button';
import{MatCardModule}from '@angular/material/card';
import{MatInputModule}from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, } from '@angular/material/core';

@NgModule({
    imports:[
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatBadgeModule,
        MatDatepickerModule,
        MatNativeDateModule, 

    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatBadgeModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})

export class MaterialModule{

}