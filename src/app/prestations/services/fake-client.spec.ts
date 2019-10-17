import { FakeClient } from './fake-client';

describe('FakeClient', () => {
  it('should create an instance', () => {
    expect(new FakeClient()).toBeTruthy();
  });
});
