# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    puts "Destroying tables..."

    User.destroy_all
    Message.destroy_all

    puts "Resetting primary keys..."

    %w(users messages).each do |table_name|
    
        ApplicationRecord.connection.reset_pk_sequence!(table_name)
    end

    puts "Creating Users..."

    User.create!(email: "demo_user1@cack.com", password: "password")
    User.create!(email: "demo_user2@cack.com", password: "password")

    puts "Creating Users"

    10.times do 

        User.create({
        email: Faker::Movies::HarryPotter.unique.character.gsub(/\s+/,"") + "@hogwarts.com",
        password: "password"
        })
    end 

    puts "Adding messages"

    15.times do 
        Message.create({
            body: Faker::Movies::HarryPotter.quote,
            author_id: rand(1..12)
        })
    end


    puts "Done"

end 