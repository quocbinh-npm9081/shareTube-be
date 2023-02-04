import Person from '.';

it('should sum', () => {
  const people = new Person();
  expect(people.sayMyName()).toBe('Binh test1');
});
