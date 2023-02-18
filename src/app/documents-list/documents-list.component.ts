import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'documents-list',
	templateUrl: './documents-list.component.html'
})
export class DocumentsListComponent implements OnInit {
	data: any

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('https://raw.githubusercontent.com/Fray117/angular-salt/main/src/data/documents-list.json').subscribe(response => {
			this.data = response
		})
	}
}
