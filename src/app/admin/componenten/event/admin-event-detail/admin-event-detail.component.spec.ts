import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventDetailComponent } from './admin-event-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

describe('AdminEventDetailComponent', () => {
  let component: AdminEventDetailComponent;
  let fixture: ComponentFixture<AdminEventDetailComponent>;

  @Component({selector: 'app-image-view', template: ''})
class ImageViewComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventDetailComponent,
        ImageViewComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule],
        providers:[DataService,
        HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
