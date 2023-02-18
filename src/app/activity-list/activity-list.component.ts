import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'activity-list',
	templateUrl: './activity-list.component.html'
})
export class ActivityListComponent implements OnInit {
	data: any

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('https://raw.githubusercontent.com/Fray117/angular-salt/main/src/data/activity.json').subscribe(response => {
			this.data = response
		})
	}
}
