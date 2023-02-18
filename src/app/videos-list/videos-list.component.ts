import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'videos-list',
	templateUrl: './videos-list.component.html'
})
export class VideosListComponent implements OnInit {
	data: any

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('https://raw.githubusercontent.com/Fray117/angular-salt/main/src/data/videos-list.json').subscribe(response => {
			this.data = response
		})
	}
}
