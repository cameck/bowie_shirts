product = Product.create!(name: 'David Pownie',
                          price: 19.99,
                          description: 'David Bowie is an excellent pony. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

%w[blue lemon silver].each do |color|
  %w[S M L XL].each do |size|
    product.product_variations << ProductVariation.create(color: color,
                                                          size: size,
                                                          stock: rand(20),
                                                          image: "https://s3-us-west-1.amazonaws.com/bowie-fan-shirts/david-pownie-#{color}.png")
  end
end
