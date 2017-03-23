import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
        selector:'vote',
        template:`
        <div class='vote' >
        <i class="glyphicon glyphicon-menu-up vote-button"
        [class.upVote]="myVote==1"
        (click)="upVote()" ></i>
        <span class='vote-count'>{{ myVote + voteCount }}</span>
        <i class="glyphicon glyphicon-menu-down vote-button"
        [class.downVote]="myVote==-1"   
        (click)="downVote()"
        ></i>
        </div>
        `,
        styles:[`
            .vote{
                width:25px;
                text-align:center;
                color:#999
            }
            .vote-count{
                font-size:1.2em;
            }
            .vote-button{
                cursor:pointer;
            }
            .upVote{
                color:green;
                font-weight:bold;
            }
            .downVote{
                color:red;
                font--weight: bold;
            }
        `]

})

export class VoteComponent {
@Input() myVote=0;
@Input() voteCount=0;
@Output() changeVote=new EventEmitter();
upVote(){
    if(this.myVote==1)
    return;
    this.myVote++;
    this.changeVote.emit({myVote:this.myVote});
}
downVote(){
        if(this.myVote==-1)
        return;
        this.myVote--;
        this.changeVote.emit({myVote:this.myVote});
    }
}