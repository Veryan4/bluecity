import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TreeComponent } from './tree.component';


describe('TreeComponent', () => {

  let fixture: ComponentFixture<TreeComponent>;
  let component: TreeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
        TreeComponent,
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        NgbModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        FormControl,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
  }));

});
