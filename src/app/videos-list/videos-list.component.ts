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
		this.http.get('https://fakerapi.it/api/v1/products?_quantity=5&_taxes=12&_categories_type=uuid').subscribe(response => {
			this.data = response
		})
	}
}
