import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // Récupération d'une instance de component
    const app = fixture.debugElement.componentInstance;

    // Test la fonction
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crm-paris-oct'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // Test si le titre est égale à
    expect(app.title).toEqual('crm-paris-oct');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // Recupérer les modifications dans le html
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('crm-paris-oct app is running!');
  });
});
