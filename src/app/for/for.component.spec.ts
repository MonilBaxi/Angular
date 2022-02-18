import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForComponent } from './for.component';

describe('ForComponent', () => {
  let component: ForComponent;
  let fixture: ComponentFixture<ForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain for works!",()=>{
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.p').textContent).toContain('for works!');
  })
});
