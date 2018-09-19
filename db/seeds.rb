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

Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "deposit", price: 5000)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "deposit", price: 200000)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "withdraw", price: 22000)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Apple Inc.").id, shares: 100, price: 22.22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Tesla Inc.").id, shares: 50, price: 22.22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "General Electric Company").id, shares: 60, price: 22.22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Amazon.com Inc.").id, shares: 40, price: 22.22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "buy", company_id: Company.find_by(name: "Netflix Inc.").id, shares: 22, price: 22.22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "sell", company_id: Company.find_by(name: "Apple Inc.").id, shares: 10, price: 22.22)
Transaction.create(user_id: User.find_by(email: "robinhood@gmail.com").id, transaction_type: "sell", company_id: Company.find_by(name: "General Electric Company").id, shares: 5, price: 22.22)

PortfolioSnapshot.destroy_all

PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 100000,assets: 0,total_value: 100000, date: "2018-09-11")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 90000,assets: 10000,total_value: 100000, date: "2018-09-12")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 80000,assets: 20021,total_value: 100021, date: "2018-09-13")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 50000,assets: 50312,total_value: 100312, date: "2018-09-14")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 70515,total_value: 100515, date:"2018-09-15")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 69464,total_value: 99464, date: "2018-09-16")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 72110,total_value: 102110, date: "2018-09-17")
PortfolioSnapshot.create(user_id: User.find_by(email: "robinhood@gmail.com").id ,cash: 30000,assets: 75000,total_value: 105000, date: "2018-09-18")
