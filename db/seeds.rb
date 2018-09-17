# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

# Company.destroy_all
#
# CSV.foreach("lib/data/company_seed.csv") do |row|
#   Company.create(symbol:row[0],name:row[1])
# end

User.destroy_all

User.create(first_name: "Robin",last_name: "hood", email: "robinhood@gmail.com", password: "takefromtherich")


Transaction.destroy_all

Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Apple Inc.").id, shares: 100)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Tesla Inc.").id, shares: 50)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "General Electric Company").id, shares: 60)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Amazon.com Inc.").id, shares: 40)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Netflix Inc.").id, shares: 22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "sell", company_id: Company.find_by(name: "Apple Inc.").id, shares: 10)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "sell", company_id: Company.find_by(name: "General Electric Company").id, shares: 5)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "deposit", price: 5000)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "deposit", price: 100000)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "withdraw", price: 22000)

PortfolioSnapshot.destroy_all

PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 100000,assets: 0,total_value: 100000 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 90000,assets: 10000,total_value: 100000 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 80000,assets: 20021,total_value: 100021 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 50000,assets: 50312,total_value: 100312 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 70515,total_value: 100515 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 69464,total_value: 99464 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 72110,total_value: 102110 )
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 75000,total_value: 105000 )
