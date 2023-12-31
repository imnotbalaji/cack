# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_16_132913) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "direct_message_users", force: :cascade do |t|
    t.bigint "dm_id", null: false
    t.bigint "member_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dm_id"], name: "index_direct_message_users_on_dm_id"
    t.index ["member_id"], name: "index_direct_message_users_on_member_id"
  end

  create_table "direct_messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.text "body", null: false
    t.bigint "author_id", null: false
    t.string "conversation_type", null: false
    t.bigint "conversation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["conversation_type", "conversation_id"], name: "index_messages_on_conversation"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "display_name"
    t.string "user_status"
    t.string "profile_photo_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "direct_message_users", "direct_messages", column: "dm_id"
  add_foreign_key "direct_message_users", "users", column: "member_id"
  add_foreign_key "messages", "users", column: "author_id"
end
