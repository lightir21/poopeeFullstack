docker build -f mysql-dev.Dockerfile -t poopee/mysql-v8 .

docker run -p 43306:3306 -d poopee/mysql-v8
