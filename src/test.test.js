import { describe, expect, it } from 'vitest';

import { User } from './index';

describe('User', () => {
  const user = new User('Bohdan', 'Onatskyi', 300);

  describe('.getBalance()', () => {
    it('should return zero after create', () => {
      expect(user.getBalance()).toBe(0);
    });
  });

  describe('.getSalary()', () => {
    it('should update balance by salary', () => {
      user.getSalary();
      expect(user.getBalance()).toBe(300);
    });
  });

  describe('.payTaxes()', () => {
    it('should update balance on 20 percents for taxes', () => {
      user.payTaxes();

      expect(user.getBalance()).toBe(240);
    });
  });
});
