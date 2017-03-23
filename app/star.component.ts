import { Component, Input, EventEmitter, Output } from 'angular2/core'
@Component({
    selector:'favorite',
    templateUrl:'app/favorite.template.html',
    styles:[`
            .glyphicon-star-empty{
                color:#default;
                font-size: 30px;
                cursor: pointer;
        }
        .glyphicon-star{
                color:orange;
                font-size: 30px;
                cursor: pointer;
        }
    `]
})
export class FavoriteComponent{
@Input('is-Favorite') isFavorite=false;
@Output('changeFavorite') change=new EventEmitter();
onClick1(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
    }
}