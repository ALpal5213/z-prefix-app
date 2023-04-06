/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Adrian', last_name: 'Lewis', username: 'abc', password: '123'},
    {first_name: 'Joe', last_name: 'Shmoe', username: null, password: null},
    {first_name: 'Emi', last_name: 'Nem', username: 'xyz', password: '123'},
    {first_name: 'Lady Emilia Von Eldritch', last_name: 'the 17th', username: null, password: null},
  ]);
};
