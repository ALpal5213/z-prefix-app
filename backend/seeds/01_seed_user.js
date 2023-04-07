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
    {first_name: 'Slim', last_name: 'Shady', username: 'def', password: '123'},
    {first_name: 'Lady Emilia Von Eldritch', last_name: 'the 17th', username: 'ghi', password: '123'},
    {first_name: 'Random', last_name: 'Person', username: 'jkl', password: '123'},
    {first_name: 'Random', last_name: 'Person', username: 'mno', password: '123'},
    {first_name: 'Random', last_name: 'Person', username: 'pqr', password: '123'},
    {first_name: 'Random', last_name: 'Person', username: 'stu', password: '123'},
    {first_name: 'Random', last_name: 'Person', username: 'vwx', password: '123'},
    {first_name: 'Random', last_name: 'Person', username: 'yz', password: '123'},
  ]);
};
