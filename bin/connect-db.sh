#/bin/bash
#CMD="docker-compose exec db bash"
CMD="docker-compose exec db /usr/bin/mysql -unestapp_user -pnestapp_pass nestapp"
echo $CMD
$CMD


# MYSQL CMD - https://dev.mysql.com/doc/refman/8.0/en/mysql.html
# show databases;
# show tables;
# quit

# MYSQLADMIN CMD - https://dev.mysql.com/doc/refman/8.0/en/mysqladmin.html
# /usr/bin/mysqladmin extended-status -pnestapp_root
