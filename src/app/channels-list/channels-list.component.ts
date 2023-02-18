import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'channels-list',
	templateUrl: './channels-list.component.html'
})
export class ChannelsListComponent implements OnInit {
	data: any

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('https://raw.githubusercontent.com/Fray117/angular-salt/main/src/data/channels-list.json').subscribe(response => {
			this.data = response
		})
	}
}
