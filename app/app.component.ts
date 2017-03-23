import {Component} from 'angular2/core';
import { FavoriteComponent } from './star.component';
import { LikeComponent } from "./like.component";
import {VoteComponent} from "./vote.component";

@Component({
    selector:'my-app',
    template:`
    MY angular App
    <h1>{{title}}</h1>
    <img src="{{imageUrl}}" />
    <img [src]="imageUrl" />
    <img bind-src="imageUrl" />
    <button class="btn btn-primary"
     [class.active]="isActive"
     [style.backgroundColor]="isActive?'#fff;':'Orange'">Submit</button>
     <button class="btn btn-primary" (click)="onClick($event);">Submit1</button>
     <button class="btn btn-primary" on-click="onClick();">Submit2</button>
     <div (click)="onDivClick();">
     <button class="btn btn-primary" (click)="onClick();">Submit3</button>
     </div>     
     <input type="text" [value]="title" (input)="title=$event.target.value"/>
     <input type="button" (click)="title=''" value="Clear"/>
     <input type="rtext" [(ngModel)]="title" />
     Preview:{{title}}
          <favorite [is-Favorite]="post.isFavorite" (changeFavorite)="onFavoriteChange($event)"></favorite>
     <like [totalLikes]="post.totalLikes" (post)="totalLikes($event)"></like>

     <i class='glyphicon gly glyphicon-star'></i> 

     <vote 
            [voteCount]="post.voteCount" 
            [myVote]="post.myVote" 
            (changeVote)="onVoteChange($event)"
            >
     </vote>
     `,
     directives:[FavoriteComponent,LikeComponent,VoteComponent]
})
export class AppComponent{
title="Phrase";
isActive=true;
imageUrl="https://www.google.co.in/logos/doodles/2017/140th-anniversary-of-the-first-cricket-test-match-5659058039160832-hp.png";

    onDivClick(){
        console.log("Handled by Div");
    }
    onClick($event){
        //    $event.stopPropagation();
            console.log("Clicked",$event);
             
    }
    post={
        title:"angular",
        isFavorite:true,
        totalLikes:10,
        isLike:true,
        voteCount:10,
        myVote:0
    };
    onFavoriteChange($event){
        console.log($event);
    }
    onLikeChange($event){
        console.log($event);
    }
    onVoteChange($event){
        console.log($event);
    }

}