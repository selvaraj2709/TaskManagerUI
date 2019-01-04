import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

});
