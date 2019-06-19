import fetchUser from '../user';

describe('User', () => {
  it('should be able to fetch a user', () => {
    expect(fetchUser(1000, 'Cat🐱')).toStrictEqual({ id: 1000, name: 'Cat🐱' });
  });
});
