import { Component, OnInit } from '@angular/core';

/**
 * @description permite mostrar en la patalla nombre y ciudad 
 * @author jeffrey jose gazabon acosta <jeffrey.gazabon@gmail.com>
 */

@Component({
    selector: 'actividad',
    templateUrl: './nombre_componet.html'
})

export class ActividadComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    public nombre_apellido: string = 'jeffrey gazabon';
    public ciudad: string = 'Montería';

}
