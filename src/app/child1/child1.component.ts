import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G1child1Component } from './g1child1/g1child1.component';
import { G1child2Component } from "./g1child2/g1child2.component";
import { Meta, Title } from '@angular/platform-browser';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, G1child1Component, G1child2Component]
})
export class Child1Component implements OnInit {
  constructor(private meta: Meta, private common: CommonService) { }
  ngOnInit(): void {
    this.common.updateMetaInfo('Safaryaara child1', 'Safaryaara child1');
    this.meta.addTags([
      { name: "title", content: "Safaryaara child1" },
      { name: "description", content: "description" },
      { property: "og:title", content: "Safaryaara child1" },
      { property: "og:description", content: "description" },
      { property: "og:image", content: "description" },
    ]);
  }
  @Input('dataPassedAsInput') data: string = '';
  @Output() outputData = new EventEmitter()
  output() {
    this.outputData.emit('Data is from Child1');
  }

  dataReceivedFromGChild1(event: string) {
    this.outputData.emit('Data is from G1Child1');
  }

  dataReceivedFromGChild2(event: string) {
    this.outputData.emit('Data is from G1Child2');
  }
}
