CREATE DATABASE shopdb;

-- 商品表
CREATE TABLE products (
    id VARCHAR(100) NOT NULL, -- 商品ID
    title VARCHAR(100) NOT NULL, -- 商品名稱
    desc VARCHAR(2000), -- 商品描述
    img VARCHAR(500), -- 商品圖片
    price VARCHAR(100) NOT NULL, -- 商品價格
    category_id VARCHAR(100) NOT NULL, -- 商品分類ID
    stock VARCHAR(100) NOT NULL, -- 商品庫存數量
    created_at DATETIME, -- 商品創建時間
    updated_at DATETIME, -- 商品更新時間
    PRIMARY KEY (id)
)

-- 商品分類表
CREATE TABLE categories (
    id VARCHAR(100) NOT NULL, -- 商品分類ID
    title VARCHAR(100) NOT NULL, -- 商品分類名稱
    created_at DATETIME, -- 商品分類創建時間
    updated_at DATETIME, -- 商品分類更新時間
    PRIMARY KEY (id)
)

-- 訂單表
CREATE TABLE orders (
    id VARCHAR(100) NOT NULL, -- 訂單ID
    user_id VARCHAR(100) NOT NULL, -- 訂單用戶ID
    amount VARCHAR(100) NOT NULL, -- 訂單金額
    status VARCHAR(100) NOT NULL, -- 訂單狀態
    created_at DATETIME, -- 訂單創建時間
    updated_at DATETIME, -- 訂單更新時間
    PRIMARY KEY (id)
)

-- 訂單商品表
CREATE TABLE order_items (
    id VARCHAR(100) NOT NULL, -- 訂單商品 ID（主鍵）
    order_id VARCHAR(100) NOT NULL, -- 訂單 ID（外鍵）
    product_id VARCHAR(100) NOT NULL, -- 商品 ID（外鍵）
    quantity VARCHAR(100) NOT NULL, -- 商品數量
    price VARCHAR(100) NOT NULL, -- 商品單價
    created_at DATETIME, -- 訂單商品創建時間
    updated_at DATETIME, -- 訂單商品更新時間
    PRIMARY KEY (id, order_id, product_id)
)

-- 用戶表
CREATE TABLE users (
    id VARCHAR(100) NOT NULL, -- 用戶 ID（主鍵）
    name VARCHAR(100) NOT NULL, -- 用戶名稱
    email VARCHAR(100) NOT NULL, -- 用戶郵箱
    hash_key VARCHAR(100) NOT NULL, -- 用戶密碼(hash key)
    hash_salt VARCHAR(100) NOT NULL, -- (hash salt)
    created_at DATETIME, -- 用戶創建時間
    updated_at DATETIME, -- 用戶更新時間
    PRIMARY KEY (id)
)

-- 地址表
CREATE TABLE addresses (
    id VARCHAR(100) NOT NULL, -- 地址 ID（主鍵）
    user_id VARCHAR(100) NOT NULL, -- 用戶 ID（外鍵）
    name VARCHAR(100) NOT NULL, -- 收貨人姓名
    phone VARCHAR(100) NOT NULL, -- 收貨人電話
    address VARCHAR(200) NOT NULL, -- 收貨人地址
    created_at DATETIME, -- 地址創建時間
    updated_at DATETIME, -- 地址更新時間
    PRIMARY KEY (id)
)

-- 庫存表
CREATE TABLE stocks (
    id VARCHAR(100) NOT NULL, -- 庫存 ID（主鍵）
    product_id VARCHAR(100) NOT NULL, -- 商品 ID（外鍵）
    quantity VARCHAR(100) NOT NULL, -- 商品庫存量
    created_at DATETIME, -- 庫存創建時間
    PRIMARY KEY (id)
)

-- 訪問紀錄表
CREATE TABLE pageviews (
    id VARCHAR(100) NOT NULL, -- 訪問紀錄 ID（主鍵）
    url VARCHAR(100) NOT NULL, -- 訪問頁面 URL
    ip VARCHAR(100) NOT NULL, -- 訪問者 IP
    created_at DATETIME, -- 記錄創建時間
    PRIMARY KEY (id)
)
