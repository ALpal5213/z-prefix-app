/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {first_name: 'Adrian', last_name: 'Lewis', username: 'abc', password: '123', account: 'account_holder'},
    {first_name: 'Joe', last_name: 'Shmoe', username: 'abc', password: '123', account: 'visitor'},
    {first_name: 'Emi', last_name: 'Nem', username: 'abc', password: '123', account: 'account_holder'},
    {first_name: 'Lady Emilia Von Eldritch', last_name: 'the 17th', username: 'abc', password: '123', account: 'visitor'},
  ]);
};
