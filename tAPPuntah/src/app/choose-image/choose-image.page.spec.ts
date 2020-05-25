import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseImagePage } from './choose-image.page';

describe('ChooseImagePage', () => {
  let component: ChooseImagePage;
  let fixture: ComponentFixture<ChooseImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
