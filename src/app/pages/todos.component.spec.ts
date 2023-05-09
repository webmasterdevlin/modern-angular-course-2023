import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TodosComponent } from './todos.component';
import { LocalStorageService } from '../utilities/local-storage.service';

describe('TodosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TodosComponent, RouterTestingModule],
      providers: [LocalStorageService],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TodosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('loading..');
  });
});
