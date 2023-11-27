/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { G1child1Component } from './g1child1.component';

describe('G1child1Component', () => {
  let component: G1child1Component;
  let fixture: ComponentFixture<G1child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G1child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G1child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
