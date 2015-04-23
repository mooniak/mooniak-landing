cd;
cd src/github.com/mooniak/mooniak-web/;
git submodule foreach git pull;
git add --all;
git commit -m'Updates';
git push