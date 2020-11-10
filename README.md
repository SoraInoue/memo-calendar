# README

# MEMO-CALENDAR
### アプリケーション情報  
#####　 アプリケーション概要  
　　メモ機能付きのカレンダーアプリを作成しました。  
　接続先情報  
　　URL http://54.168.35.246  
　ID/Pass  
　　ID: admin  
　　Pass: 1102  
　テスト用アカウント等  
　　メールアドレス: example@gmail.com  
　　パスワード: aaaa1111  
　Githubリポジトリ  
　　https://github.com/SoraInoue/memo-calendar  

#####　開発状況  
　　開発環境  
　　　Ruby/Ruby on Rails/MySQL/Github/AWS/Visual Studio Code  
　開発期間と平均作業時間  
　　開発期間：35日  
　　1日あたりの平均作業時間：4  
　監視システム  
　　Amazon CloudWatch  
　　　CPUの使用率、書き込みの量の確認  

#####　動作確認方法  
　　Chromeの最新版を利用してアクセスしてください。  
　　ただしデプロイ等で接続できないタイミングもございます。その際は少し時間をおいてから接続ください。  
　　接続先およびログイン情報については、上記の通りです。  
　　同時に複数の方がログインしている場合に、ログインできない可能性がございます。  
　　確認後、ログアウト処理をお願いします。  

　機能説明  
　　gem:simple_calendarを使ってカレンダーを実装  
　　メモの保存/削除の機能  
　　アカウントの登録機能  

　改善案  
　　データ一覧部分は、時計を表示できるようにできれば見た目の改善ができると思うので別で試してみて追加実装  
　する。  
　同じ日にメモを複数入れるとカレンダー 部にビューの形が変わるがそれをもっと見やすい形に変える必要がある。  


#####　開発理由  
　　前職で気になって改善したいと思ったスケジュールの管理のためのアプリを作って見ようと思い作成しました。  
　簡単に自分の予定を確認できるようカレンダーにメモを出来るようにするため自分で調べつつ作成していきました。  
　使ったことのない機能としてはアプリケーションの監視のためのシステムの勉強や、今まで使ってたAWSのec2イン  
　スタンスが使えなくなっていたのでそれの　調べ直し等で時間を使いすぎたがこれからの事を考えるといい勉強にな  
　りました。  

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
