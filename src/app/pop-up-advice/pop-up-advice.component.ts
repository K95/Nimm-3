import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { PopUpService } from '../pop-up.service';

@Component({
  selector: 'app-pop-up-advice',
  templateUrl: './pop-up-advice.component.html',
  styleUrls: ['./pop-up-advice.component.css'],
  animations: [
  trigger('dialog', [
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ])
]
})
export class PopUpAdviceComponent implements OnInit {

@Input() closable = true;
@Input() visible: boolean;
@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

constructor(private popUpService: PopUpService) { }

ngOnInit() { }

}
