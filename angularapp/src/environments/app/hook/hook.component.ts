import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
 
    @Input() fromParent: string;
  @ContentChild("child", { static: false }) contentChild: ElementRef;
  @ViewChild("childhook", { static: false }) viewChild: ElementRef;

  counter;
  num: number = 1;
  subscription: Subscription;

  constructor(private postService: PostService) {
    console.log('constructor called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');

    clearInterval(this.counter);
    this.subscription.unsubscribe();
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    this.viewChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);
  this.subscription.unsubscribe();
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called', this.contentChild);
    //this.contentChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);

  }
  ngAfterContentInit(): void {

    console.log('ngAfterContentInit called', this.contentChild);

    //this.contentChild.nativeElement.setAttribute('style', 'color:green');

    this.contentChild.nativeElement.setAttribute('style', `color:${this.fromParent}`);


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called', this.contentChild);
   this.subscription= this.postService.getPosts().subscribe(res => {
      console.log('from hook compo data', res);
    })

    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000)
  }


  ngDoCheck(): void {
    console.log('ngDoCheck called');

  }




}