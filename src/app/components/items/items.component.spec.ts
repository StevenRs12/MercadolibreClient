import { BarComponent } from './../bar/bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchService } from '../services/search.service';
import { of } from 'rxjs';
import { Items } from 'src/app/interfaces/items.interface';
import { Router } from '@angular/router';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let searchService: SearchService;
  let mockSearch: Items = {
    categories: ['carro', 'moto'],
    items: [{ title: 'carro', id: '123' }]
  };
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsComponent, BarComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    searchService = TestBed.get(SearchService);
    router = TestBed.get(Router);
    spyOn(searchService, 'search').and.returnValue(of(mockSearch))
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search call to searchService.search', () => {
    component.search('computador')

    expect(searchService.search).toHaveBeenCalled();
  });


  it('should search navigate to /params', () => {
    spyOn(router, 'navigate')
    component.goToDetail('123'),
      expect(router.navigate).toHaveBeenCalledWith(['/detalle/123']);
  });
});
