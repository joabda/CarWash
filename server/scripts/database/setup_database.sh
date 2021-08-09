
################################## Variables ##################################
database="postgres"
user="postgres"
postgresql_version="12"

################################# Main script #################################
# Downloading Postgresql
#if dpkg --get-selections | grep -q "^postgresql-$postgresql_version[[:space:]]*install$" >/dev/null; then
#    echo -e "Postgresql version $postgresql_version is already installed"
#else
#    echo -e "Installing Postgresql version $postgresql_version"
#    sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
#    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
#    sudo apt-get update
#    sudo apt-get -y install postgresql-$postgresql_version
#    if apt-get -qq install postgresql-$postgresql_version; then
#        echo "Successfully installed Postgresql version $postgresql_version"
#    else
#        echo "Error installing Postgresql version $postgresql_version"
#    fi
#fi

sudo -u $user psql $database -c "\password $user"
if psql -lqt | cut -d \| -f 1 | grep -qw $database; then
    echo "Database $databsae already exists."
else
    echo "Creating database $databsae."
    createdb $database -U $user
    psql -U $user -d $database -c "GRANT ALL PRIVILEGES ON DATABASE $database TO $user;"
fi