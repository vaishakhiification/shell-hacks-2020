import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchSidebarComponent } from './post-search-sidebar.component';

describe('PostSearchSidebarComponent', () => {
  let component: PostSearchSidebarComponent;
  let fixture: ComponentFixture<PostSearchSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSearchSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
