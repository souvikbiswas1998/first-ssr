import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-g1child2',
  standalone: true,
  templateUrl: './g1child2.component.html',
  styleUrls: ['./g1child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G1child2Component implements OnInit {
  @Input('dataPassedAsInput') data: string = '';
  @Output() outputData = new EventEmitter()
  output() {
    this.outputData.emit('Data is from G1Child1');
  }

  constructor() { }

  ngOnInit() {
  }

}
