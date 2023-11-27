/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { G1child2Component } from './g1child2.component';

describe('G1child2Component', () => {
  let component: G1child2Component;
  let fixture: ComponentFixture<G1child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G1child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G1child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
