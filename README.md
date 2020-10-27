# README

# MEMO-CALENDAR
  これからは、日々のスケジュール管理を徹底していきたいと思いパッと見で予定のわかるアプリを作成したいと思い
このアプリを作成しました。
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|encrypted_password|string|null: false|
### Association
- has_many :calendars, dependent: :destroy

## calendarsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|memo|text|
|start_time|datetime|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
