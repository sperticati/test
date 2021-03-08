import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { UtentiService } from '../../services/utenti.service';
// Import Models
import { Utenti } from '../../domain/test_db/utenti';

// START - USED SERVICES
/**
* utentiService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* utentiService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Utenti
 * @class UtentiListComponent
 */
@Component({
    selector: 'app-utenti-list',
    templateUrl: './utenti-list.component.html',
    styleUrls: ['./utenti-list.component.css']
})
export class UtentiListComponent implements OnInit {
    list: Utenti[];
    search: any = {};
    idSelected: string;
    constructor(
        private utentiService: UtentiService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.utentiService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Utenti to remove
     *
     * @param {string} id Id of the Utenti to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Utenti
     */
    deleteItem() {
        this.utentiService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
