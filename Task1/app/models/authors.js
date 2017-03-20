import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number') 
});

export default [
  { id: 1, name: 'Aristotle', age: 62, gender:'Male' },
  { id: 2, name: 'Homer', age: 42, gender:'Male' },
  { id: 3, name: 'Plato', age: 80, gender: 'Male' },
    { id: 4, name: 'Aristotle', age: 62, gender:'Male' },
  { id: 5, name: 'Homer', age: 42, gender:'Male' },
  { id: 6, name: 'Plato', age: 80, gender: 'Male' },
    { id: 7, name: 'Aristotle', age: 62, gender:'Male' },
  { id: 8, name: 'Homer', age: 42, gender:'Male' },
  { id: 9, name: 'Plato', age: 80, gender: 'Male' },
    { id: 10, name: 'Aristotle', age: 62, gender:'Male' },
  { id: 11,  gender:'Male',name: 'Homer', age: 42, gender:'Male' },
  { id: 12, name: 'Plsato', age: 80, gender: 'Male' }
 
];
