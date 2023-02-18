import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'peoples-list',
	templateUrl: './peoples-list.component.html'
})
export class PeoplesListComponent implements OnInit {
	data: any

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('https://raw.githubusercontent.com/Fray117/angular-salt/main/src/data/videos-list.json').subscribe(response => {
			this.data = response
		})
	}
}
