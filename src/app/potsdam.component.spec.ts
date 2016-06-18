import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PotsdamAppComponent } from '../app/potsdam.component';

beforeEachProviders(() => [PotsdamAppComponent]);

describe('App: Potsdam', () => {
  it('should create the app',
      inject([PotsdamAppComponent], (app: PotsdamAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'potsdam works!\'',
      inject([PotsdamAppComponent], (app: PotsdamAppComponent) => {
    expect(app.title).toEqual('potsdam works!');
  }));
});
