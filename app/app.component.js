System.register(['angular2/core', './star.component', "./like.component", "./vote.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, star_component_1, like_component_1, vote_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Phrase";
                    this.isActive = true;
                    this.imageUrl = "https://www.google.co.in/logos/doodles/2017/140th-anniversary-of-the-first-cricket-test-match-5659058039160832-hp.png";
                    this.post = {
                        title: "angular",
                        isFavorite: true,
                        totalLikes: 10,
                        isLike: true,
                        voteCount: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by Div");
                };
                AppComponent.prototype.onClick = function ($event) {
                    //    $event.stopPropagation();
                    console.log("Clicked", $event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikeChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    MY angular App\n    <h1>{{title}}</h1>\n    <img src=\"{{imageUrl}}\" />\n    <img [src]=\"imageUrl\" />\n    <img bind-src=\"imageUrl\" />\n    <button class=\"btn btn-primary\"\n     [class.active]=\"isActive\"\n     [style.backgroundColor]=\"isActive?'#fff;':'Orange'\">Submit</button>\n     <button class=\"btn btn-primary\" (click)=\"onClick($event);\">Submit1</button>\n     <button class=\"btn btn-primary\" on-click=\"onClick();\">Submit2</button>\n     <div (click)=\"onDivClick();\">\n     <button class=\"btn btn-primary\" (click)=\"onClick();\">Submit3</button>\n     </div>     \n     <input type=\"text\" [value]=\"title\" (input)=\"title=$event.target.value\"/>\n     <input type=\"button\" (click)=\"title=''\" value=\"Clear\"/>\n     <input type=\"rtext\" [(ngModel)]=\"title\" />\n     Preview:{{title}}\n          <favorite [is-Favorite]=\"post.isFavorite\" (changeFavorite)=\"onFavoriteChange($event)\"></favorite>\n     <like [totalLikes]=\"post.totalLikes\" (post)=\"totalLikes($event)\"></like>\n\n     <i class='glyphicon gly glyphicon-star'></i> \n\n     <vote \n            [voteCount]=\"post.voteCount\" \n            [myVote]=\"post.myVote\" \n            (changeVote)=\"onVoteChange($event)\"\n            >\n     </vote>\n     ",
                        directives: [star_component_1.FavoriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map