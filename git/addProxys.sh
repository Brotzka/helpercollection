# Basic-construct to add a proxy to your git-configuration
git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:port
git config --global https.proxy https://proxyuser:proxypwd@proxy.server.com:port

# without username/password
git config --global http.proxy http://proxy.server.com:port

# unset proxy-configuration
git config --global --unset http.proxy
git config --global --unset https.proxy

# check proxy-configuration
git config --global --get http.proxy
git config --global --get https.proxy
