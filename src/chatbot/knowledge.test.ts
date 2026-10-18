import { describe, expect, it } from 'vitest';
import { answerQuestion } from './knowledge';

describe('Sirpi website assistant', () => {
  it('answers from published service data', () => {
    expect(answerQuestion('What services do you offer?')).toContain('Residential interiors');
  });

  it('labels sample projects honestly', () => {
    expect(answerQuestion('Can I see your projects?')).toContain('fictional layout samples');
  });

  it('does not invent unpublished contact details', () => {
    expect(answerQuestion('What is your phone number?')).toContain('not yet approved');
  });
});
