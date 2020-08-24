import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { SocketComponent } from './socket.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SocketComponent', () => {
  let component: SocketComponent;
  let fixture: ComponentFixture<SocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocketComponent,
        SidenavComponent
      ],
      imports:[
        RouterTestingModule,
        FormsModule,
        NgbModule,
        HttpClientTestingModule
      ],
      providers:[
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
