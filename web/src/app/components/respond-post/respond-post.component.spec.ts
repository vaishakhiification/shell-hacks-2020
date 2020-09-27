import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondPostComponent } from './respond-post.component';

describe('RespondPostComponent', () => {
  let component: RespondPostComponent;
  let fixture: ComponentFixture<RespondPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
