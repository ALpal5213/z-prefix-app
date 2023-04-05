/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {user_id: 1, item_name: 'itemA', description: 'itemA description', quantity: 1, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemB', description: 'itemB description', quantity: 2, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemC', description: 'itemC description', quantity: 3, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemD', description: 'itemD description', quantity: 4, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemE', description: 'itemE description', quantity: 5, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemF', description: 'itemF description', quantity: 6, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemG', description: 'itemG description', quantity: 7, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemH', description: 'itemH description', quantity: 8, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemI', description: 'itemI description', quantity: 9, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemJ', description: 'itemJ description', quantity: 10, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 1, item_name: 'itemK', description: 'itemK description', quantity: 11, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'},
    {user_id: 3, item_name: 'M&Ms', description: "M&M's are multi-colored button-shaped chocolates, each of which has the letter 'm' printed in lower case in white on one side, consisting of a candy shell surrounding a filling which varies depending upon the variety of M&M's.", quantity: 100000, image: 'https://www.newsnationnow.com/wp-content/uploads/sites/108/2023/01/MMsAP22021645371457.jpg?w=1280'},
    {user_id: 3, item_name: 'Peanut M&Ms', description: "M&M'S Peanut Chocolate Candy Is A Little Nutty, A Lot Tasty And Always Full Of Fun.", quantity: 10000, image: 'https://images.heb.com/is/image/HEBGrocery/000121397?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'},
    {user_id: 3, item_name: 'M&M Candy Bar', description: "Each bar is made with delicious milk chocolate and filled with M&M'S Minis Candy for delicious crunch in every bite.", quantity: 1000, image: 'https://cdn.shopify.com/s/files/1/0636/2519/9866/products/134498-01_mms-minis-milk-chocolate-candy-bars-12-piece-box_900x.jpg?v=1674644706'},
  ]);
};
