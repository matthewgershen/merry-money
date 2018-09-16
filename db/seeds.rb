# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

Company.destroy_all

CSV.foreach("lib/data/company_seed.csv") do |row|
  Company.create(symbol:row[0],name:row[1])
end

User.destroy_all

User.create(first_name: "Robin",last_name: "hood", email: "robinhood@gmail.com", password: "takefromtherich")
