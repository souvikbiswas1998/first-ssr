import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-g1child1',
  standalone: true,
  templateUrl: './g1child1.component.html',
  styleUrls: ['./g1child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G1child1Component implements OnInit {
  @Input('dataPassedAsInput') data: string = '';
  @Output() outputData = new EventEmitter()
  output() {
    this.outputData.emit('Data is from G1Child1');
    // this.ref.markForCheck();
    // this.ref.detectChanges();
  }
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
