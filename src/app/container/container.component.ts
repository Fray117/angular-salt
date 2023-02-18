import { Component, HostListener } from '@angular/core'


@Component({
	selector: 'app-container',
	templateUrl: './container.component.html'
})
export class ContainerComponent {
	public isShowBackToTop: boolean = false;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
		if (scrollTop > 0) {
			this.isShowBackToTop = true
		} else {
			this.isShowBackToTop = false
		}
	}

	scrollToTop() {
		(function smoothscroll() {
			var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
			if (currentScroll > 0) {
				window.requestAnimationFrame(smoothscroll)
				window.scrollTo(0, currentScroll - (currentScroll / 8))
			}
		})()
	}

}
