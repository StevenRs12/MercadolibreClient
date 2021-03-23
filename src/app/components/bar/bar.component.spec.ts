import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit text if change input text', () => {
    spyOn(component.searchOutput, 'emit');
    component.text = 'carro';
    component.search();
    fixture.detectChanges();

    expect(component.searchOutput.emit).toHaveBeenCalled();
  });

  it('should keyEvent emit if press ENTER', () => {
    spyOn(component.searchOutput, 'emit');
    const keyEventMock = new KeyboardEvent('keydown', { key: 'Enter' });
    component.text = 'celular';
    component.keyEvent(keyEventMock);
    fixture.detectChanges();

    expect(component.searchOutput.emit).toHaveBeenCalled();
  });
});
