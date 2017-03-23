import { Component, Input, Output, EventEmitter } from 'angular2/core';
@Component({
selector:'like',
templateUrl:'app/like.template.html',
styles:[`
    .glyphicon-heart{
            color:#ccc;
            font-size: 30px;
            cursor: pointer;
    }
    .highlighted{
            color:deeppink;
            font-size: 30px;
    }
    .fontsize{
            font-size:2.2em;
    }
    
    
`]
})
export class LikeComponent{
@Input() isLike=false;
@Input() totalLikes=0;
@Output('changeLike') change=new EventEmitter();
onClick(){
            this.isLike=!this.isLike;
            this.totalLikes+=this.isLike?1:-1;
            this.change.emit({newValue:this.isLike,newTotal:this.totalLikes});

        }

}