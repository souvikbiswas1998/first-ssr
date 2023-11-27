import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  constructor(private meta: Meta, private common: CommonService) { }
  ngOnInit(): void {
    this.common.updateMetaInfo('Safaryaara child2', 'Safaryaara child2');
    this.meta.addTags([
      { name: "title", content: "Safaryaara child2" },
      { name: "description", content: "description" },
      { property: "og:title", content: "Safaryaara child2" },
      { property: "og:description", content: "description" },
      { property: "og:image", content: "description" },
    ]);
  }
}
