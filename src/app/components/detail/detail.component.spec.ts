import { Detail } from 'src/app/interfaces/detail.interface';
import { RouterTestingModule } from '@angular/router/testing';
import { BarComponent } from './../bar/bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DetailComponent } from './detail.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from '../services/detail.service';
import { of } from 'rxjs';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent, BarComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search navigate to /params', () => {
    spyOn(router, 'navigate')
    component.search('prueba'),
      expect(router.navigate).toHaveBeenCalledWith(['/prueba']);
  });

});
