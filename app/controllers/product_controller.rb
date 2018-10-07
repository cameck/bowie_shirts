class ProductController < ApplicationController
  def show
    # We're only showing one product so we are just going to grab and show it
    @product = Product.take
    @product_variations = @product.product_variations
  end
end
