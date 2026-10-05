import { describe, expect, it } from 'vitest';
import { buildUser, buildUsers, userSchema } from '../../src/data/user-factory.js';
describe('synthetic user factory', () => { it('creates schema-valid deterministic data from a seed', () => { expect(buildUser(7)).toEqual(buildUser(7)); expect(userSchema.safeParse(buildUser(7)).success).toBe(true); }); it('creates the requested number of users', () => { expect(buildUsers(3)).toHaveLength(3); }); });
