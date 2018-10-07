class CreateProductVariations < ActiveRecord::Migration[5.2]
  def change
    create_table :product_variations do |t|
      t.references :product, foreign_key: true
      t.string :color
      t.string :size
      t.integer :stock
      t.string :image

      t.timestamps
    end
  end
end
