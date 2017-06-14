
# this code was given by Randy Perez to deal with the error got when trying to install the virtual
# environment on AWS
sudo apt-get purge python-pip

#this code updates pip to the latest version
curl  https://bootstrap.pypa.io/get-pip.py | sudo python
