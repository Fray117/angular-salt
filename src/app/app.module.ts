import 'zone.js/dist/zone'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ContainerComponent } from './container/container.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { VideosListComponent } from './videos-list/videos-list.component'
import { ActivityListComponent } from './activity-list/activity-list.component'
import { PeoplesListComponent } from './peoples-list/peoples-list.component'
import { DocumentsListComponent } from './documents-list/documents-list.component'

@NgModule({
	declarations: [
		ContainerComponent,
		NavbarComponent,
		FooterComponent,
		VideosListComponent,
		ActivityListComponent,
		PeoplesListComponent,
		DocumentsListComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [ContainerComponent]

})
export class AppModule {
	name = 'Angular';
}