import { describe, expect, it } from 'vitest';
import utils from './utils';

describe('utils', () => {
    describe('getNumSum', () => {
        it('should find the correct result', () => {
            const result = utils.getNumSum(0, 0);

            expect(result).toBe(0);
        });
    });
});
