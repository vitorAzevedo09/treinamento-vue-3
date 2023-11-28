import { expect, describe, it } from 'vitest';
import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators';

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório');
  });

  it('should give an error with less than 3 characters payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres');
  });

  it('should return true when passing a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true);
  });

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório');
  });

  it('should give an error with an invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este campo precisa ser um e-mail');
  });

  it('should return true when passing a correct param', () => {
    expect(validateEmptyAndEmail('igor@igor.me')).toBe(true);
  });
});
