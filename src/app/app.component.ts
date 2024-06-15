import { Component, OnInit } from '@angular/core';
import { data } from './core/constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './core/authentication/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'j-portfolio'
  contactUsForm! : FormGroup;
  allData:any = data
  loader:boolean = false

  constructor(
    private fmBuilder : FormBuilder,
    private authService : AuthenticationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.onQualificationTabClick();
    }, 250)
    this.scrollActiveLink();
    this.changeBackgroundHeader();
    this.showScrollUp();
    this.darkLightTheme();

    this.createForm()
  }

  onToggle() {
    const navMenu: any = document.getElementById('nav-menu');
    if (navMenu) {
      navMenu.classList.add('show-menu');
    }
  }

  onCloseMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      navMenu.classList.remove('show-menu');
    }
  }

  /*==================== REMOVE MENU MOBILE ====================*/
  onClickMenu() {
    const navLink = document.querySelectorAll('.nav__link');

    // function linkAction() {
      const navMenu: any = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    // }
    // navLink.forEach((n) => n.addEventListener('click', linkAction));
  }

  /*==================== Toggle Skill ====================*/
  onToggleSkills(parentNode: any) {
    const skillsContent = document.getElementsByClassName('skills__content');

    let itemClass = parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      const element = skillsContent[i];
      element.className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
      parentNode.className = 'skills__content skills__open';
    }
  }

  // TODO check active class issue
  /*==================== Qualification Tab Click ====================*/
  onQualificationTabClick() {
    const tabs: any = document.querySelectorAll('[data-target]');
    // console.log('tabs: ', tabs);
    const tabContents: any = document.querySelectorAll('[data-content]');
    // console.log('tabContents: ', tabContents);

    tabs.forEach((tab: any) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent: any) => {
          tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach((tab: any) => {
          tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
      });
    });
  }

  /*==================== Services modal ====================*/
  onClickServiceModel(selectedModel: any) {
    const popup: any = document.getElementById(selectedModel);
    popup.classList.add('active-modal');
  }

  onCloseServiceModel(selectedModel: any) {
    const popup: any = document.getElementById(selectedModel);
    popup.classList.remove('active-modal');
  }

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  scrollActiveLink() {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          let Ele: any = document.querySelector(
            '.nav__menu a[href*=' + sectionId + ']'
          );
          Ele.classList.add('active-link');
        } else {
          let Ele: any = document.querySelector(
            '.nav__menu a[href*=' + sectionId + ']'
          );
          Ele.classList.remove('active-link');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  }

  /*==================== CHANGE BACKGROUND HEADER ====================*/
  changeBackgroundHeader() {
    function scrollHeader() {
      const nav:any = document.getElementById('header');
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
          nav.classList.add('scroll-header');
        } else {
          nav.classList.remove('scroll-header');
        }
      });
    }
    window.addEventListener('scroll', scrollHeader);
  }

  /*==================== SHOW SCROLL UP ====================*/ 
  showScrollUp(){
    function scrollUp() {
      const scrollUp:any = document.getElementById('scroll-up');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 560) {
          scrollUp.classList.add('show-scroll');
        } else {
          scrollUp.classList.remove('show-scroll');
        }
      });
    }
    window.addEventListener('scroll', scrollUp);
  }

  /*==================== DARK LIGHT THEME ====================*/ 
  darkLightTheme(){
    const themeButton:any = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
  }

  onClickMail(email:string){
    const a = document.createElement('a')
    a.href= `mailto:${email}`
    a.click()
  }

  onClickContact(number:string){
    const a = document.createElement('a')
    a.href= `tel:+91${number}`
    a.click()
  }

  onClickLocation(){
    const a = document.createElement('a')
    a.href= `https://www.google.co.in/maps/place/Ahmedabad`
    a.click()
  }

  createForm(){
    this.contactUsForm = this.fmBuilder.group({
      name: ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      project : [''],
      message : ['', [Validators.required]],
    })
  }

  sendMessage(){
    if(this.contactUsForm.invalid){
      this.contactUsForm.markAllAsTouched()
    }else{
      this.loader = true
      const payload = this.contactUsForm.value
      this.authService.apiCall('post', '/contact/email', payload)
      .pipe(finalize(() => {
        this.loader = false
      }))
      .subscribe((res:any) => {
        if(res){
          this.contactUsForm.reset()
          let a = document.createElement('a')
          a.href = "#"
          a.click()
          this.openSnackBar("Thank you for connecting with us.")
        }
      },(error:any) => {
        console.log('error: ', error);
      })
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
