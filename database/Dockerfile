FROM mysql:latest

COPY init.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=123456

EXPOSE 13306:3306

