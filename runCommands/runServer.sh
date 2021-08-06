#!/bin/sh
export STUDENT_DB_HOST=localhost
export STUDENT_DB_SCHEMA="student"
#homestay
export STUDENT_DB_USERNAME="root"
export STUDENT_DB_PASSWORD="root@911"
export STUDENT_CLIENT_HOST="http://localhost"
export JWT_SIGNING_KEY=A#@$BnJVBT
export MYSQL_ROOT_PASSWORD=root@911
export SERVER_HOST=localhost
export SERVER_PROTOCOL=http
export SERVER_PORT=5000
export CLIENT_PORT=4200
export NODE_ENV="development"
export STUDENT_ADMIN_HOST="http://localhost"

cd ../
nodemon app.js