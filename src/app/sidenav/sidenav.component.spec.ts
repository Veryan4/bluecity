import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let routes: string[] = ['tree', 'chart'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: Router,
          useClass: class {
              navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /<link> when switchView(<link>)', () => {
    const router = fixture.debugElement.injector.get(Router);
    routes.forEach( route => {
      component.switchView(route);
      expect(router.navigate).toHaveBeenCalledWith([route]);
    });
  });

});
