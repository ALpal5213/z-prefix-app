/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  let adrianItems = [];
  let emiliaItems = [];
  let imageArray = [
    'https://cdn.shopify.com/s/files/1/1365/2497/products/Nose-Finger-Puppet-1.jpg',
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61690O8IEML._AC_.jpg',
    'https://www.syracuse.com/resizer/JQJHLXIpO_9eJi9aZg69gaQkDIU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/KY5WDALXSNDSNBSE76H4RJXVEA.webp',
    'https://heavy.com/wp-content/uploads/2015/07/muffin-top.jpg?quality=65&strip=all&w=425',
    'https://www.rd.com/wp-content/uploads/2021/06/french-baguette-adult-slippers_ecomm_via-amazon.com_.jpg?fit=700,700',
    'https://m.media-amazon.com/images/I/91-Db4L6xjL.png',
    'https://cdn.cheapism.com/images/Funwares-TriceraTaco-Holder-Ultimate-Dinosau.max-784x410.jpg',
    'https://wl-brightside.cf.tsp.li/resize/728x/jpg/58c/24f/6c066c5028893544f8b3cd3245.jpg',
    'https://img.atlasobscura.com/Coc6Vn6Cqx09w8LPiaCpFB6k_7gM0rgAvxsxvB1R5lw/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy80YzJiMmFkYTJm/ZTE2MDVmNjlfU3Bh/Y2VTdHVmZl8wMS5q/cGc.jpg',
    'https://cdn.cheapism.com/images/BorlterClamp-Hamburger-Shaped-32GB-USB-Flash.max-784x410.jpg'
  ];

  for(let i = 1; i <= 10; i++) {
    adrianItems.push({user_id: 1, item_name: `Adrian's item${i}`, description: `item${i} description`, quantity: i, image: 'https://static6.depositphotos.com/1005979/577/i/950/depositphotos_5777773-stock-photo-generic-prescription-bottle-no-name.jpg'})
    emiliaItems.push({
      user_id: 4, 
      item_name: `Emilia's item${i}`, 
      description: `Really long descriptions for these items since it will be used to test how the descriptions appear on the page. The quantity is also bumped up for a similar reason.`, 
      quantity: i * 1000000, 
      image: imageArray[i - 1]
    })
  }

  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {user_id: 3, item_name: 'M&Ms', description: "M&M's are multi-colored button-shaped chocolates, each of which has the letter 'm' printed in lower case in white on one side, consisting of a candy shell surrounding a filling which varies depending upon the variety of M&M's.", quantity: 100000, image: 'https://www.newsnationnow.com/wp-content/uploads/sites/108/2023/01/MMsAP22021645371457.jpg?w=1280'},
    {user_id: 3, item_name: 'Peanut M&Ms', description: "M&M'S Peanut Chocolate Candy Is A Little Nutty, A Lot Tasty And Always Full Of Fun.", quantity: 10000, image: 'https://images.heb.com/is/image/HEBGrocery/000121397?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'},
    {user_id: 3, item_name: 'M&M Candy Bar', description: "Each bar is made with delicious milk chocolate and filled with M&M'S Minis Candy for delicious crunch in every bite.", quantity: 1000, image: 'https://cdn.shopify.com/s/files/1/0636/2519/9866/products/134498-01_mms-minis-milk-chocolate-candy-bars-12-piece-box_900x.jpg?v=1674644706'},
  ].concat(adrianItems).concat(emiliaItems));
};
