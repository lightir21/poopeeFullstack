FROM mysql:8
ENV MYSQL_ROOT_PASSWORD="2481992"
ENV MYSQL_PASSWORD="2481992"
ENV MYSQL_USER="poopee-dev"
COPY ./init-db /docker-entrypoint-initdb.d
EXPOSE 3306/tcp