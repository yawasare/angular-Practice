# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150615182305) do

  create_table "images", force: true do |t|
    t.string   "name"
    t.string   "original"
    t.string   "final"
    t.integer  "height"
    t.integer  "width"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "images", ["project_id"], name: "index_images_on_project_id", using: :btree

  create_table "payoffs", force: true do |t|
    t.string   "name"
    t.string   "url"
    t.string   "payoffurl"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.string   "logo"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "projects", ["user_id"], name: "index_projects_on_user_id", using: :btree

  create_table "regions", force: true do |t|
    t.string   "name"
    t.integer  "top_left_x"
    t.integer  "top_left_y"
    t.integer  "width"
    t.integer  "height"
    t.string   "original"
    t.string   "watermark"
    t.integer  "watermark_strength"
    t.integer  "watermark_resolution"
    t.string   "link"
    t.string   "trigger"
    t.integer  "image_id"
    t.integer  "payoff_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "regions", ["image_id"], name: "index_regions_on_image_id", using: :btree
  add_index "regions", ["payoff_id"], name: "index_regions_on_payoff_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "client_id"
    t.string   "client_secret"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
