import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  private isSideBarShown = false;

  constructor() {}

  ngOnInit(): void {}

  public manageSideBarShow(): void {
    if (this.isSideBarShown) this.hiddeSideBar();
    else this.showSideBar();
  }

  private showSideBar(): void {
    const topLine = document.getElementById('top-line');
    const middleLine = document.getElementById('middle-line');
    const bottomLine = document.getElementById('bottom-line');

    const sideBar = document.getElementById('side-bar');

    sideBar.style.left = '0';

    middleLine.style.opacity = '0';

    topLine.classList.add('top-line');
    bottomLine.classList.add('bottom-line');

    this.isSideBarShown = true;
  }

  private hiddeSideBar(): void {
    const topLine = document.getElementById('top-line');
    const middleLine = document.getElementById('middle-line');
    const bottomLine = document.getElementById('bottom-line');

    const sideBar = document.getElementById('side-bar');

    sideBar.style.left = '-100vw';

    middleLine.style.opacity = '1';

    topLine.classList.remove('top-line');
    bottomLine.classList.remove('bottom-line');

    this.isSideBarShown = false;
  }
}
