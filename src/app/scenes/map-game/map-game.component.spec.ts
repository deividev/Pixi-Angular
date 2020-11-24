import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGame } from './map-game.component';

describe('MapGame', () => {
  let component: MapGame;
  let fixture: ComponentFixture<MapGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGame ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
