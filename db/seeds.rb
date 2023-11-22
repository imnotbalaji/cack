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
    DirectMessage.destroy_all
    DirectMessageUser.destroy_all


    puts "Resetting primary keys..."

    %w(users messages direct_messages direct_message_users).each do |table_name|
    
        ApplicationRecord.connection.reset_pk_sequence!(table_name)
    end

    puts "Creating Users..."

    harrypotter = User.create!(email: "harrypotter@cack.com", password: "password")
    ronweaslsey = User.create!(email: "ronweasley@cack.com", password: "password")
    hermionegranger = User.create!(email: "hermionegranger@cack.com", password: "password")

    puts "creating DM and adding members to it "
    
    firstmeeting = DirectMessage.create();
    firstmeeting.members << [harrypotter,ronweaslsey,hermionegranger]

    

    puts "Creating Messages"

    message1 = Message.create!(body: "Excuse me, do you mind? Everywhere else is full", author:ronweaslsey, conversation: firstmeeting )
    message2 = Message.create!(body: "No, not at all", author:harrypotter, conversation: firstmeeting )
    message3 = Message.create!(body: "Im Ron by the way ", author:ronweaslsey, conversation: firstmeeting )
    message4 = Message.create!(body: "Im Harry Harry Potter ", author:harrypotter, conversation: firstmeeting )

    


    puts "Done"

end 