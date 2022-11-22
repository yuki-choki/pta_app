# pta_app

## 概要
PTA実行委員会の運営に関する課題を解決する。

具体的には
- 学級委員さんの管理
  - 名前
  - 担当学年
  - 在学中のお子さん
  - 協力回数管理
- 行事管理
  - 通知
  - 協力可否の調査
  - 協力者超過時の抽選
- 引き継ぎ
  - 行事、協力内容の引き継ぎ
  - 役員の引き継ぎ

## 環境構築

1. `git clone`でソースをダウンロード
    
    ```bash
    # ローカル環境で実行
    git clone https://github.com/yuki-choki/pta_app.git
    ```
    
2. `app`コンテナに入ってキャッシュ、ログファイルの書き込み権限を付与
    
    ```bash
    # ローカル環境→Dockerコンテナ内

    # コンテナに入る
    docker compose exec app bash
    
    # 権限を変更
    chmod -R 777 storage bootstrap/cache
    ```
    
3. Laravelなどのライブラリを`composer`を使ってインストール
    
    ```bash
    # Dockerコンテナ内

    composer install
    ```
    
4. `.env`ファイルを作成（`.env.example`をコピー）
    
    ```bash
    # Dockerコンテナ内

    cp .env.example .env
    ```
    
5. `.env`ファイルで定義されている`APP_KEY`を作成
    
    ```bash
    # Dockerコンテナ内

    php artisan key:generate
    ```
    
6. システムで生成したファイル等をブラウザからアクセスするためにシンボリックリンク作成
    
    ```bash
    # Dockerコンテナ内

    php artisan storage:link
    ```
    
7. DBのマイグレーション
    
    ```bash
    # Dockerコンテナ内

    php artisan migrate
    ```
8. npm install
    ```bash
    # Dockerコンテナ内

    npm install
    npm run dev
    # or npm run watch
    ```
