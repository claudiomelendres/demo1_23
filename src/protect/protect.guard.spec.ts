import { ProtectGuard } from '../products/guards/protect.guard';

describe('ProtectGuard', () => {
  it('should be defined', () => {
    expect(new ProtectGuard()).toBeDefined();
  });
});
