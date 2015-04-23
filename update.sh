cd;
cd src/github.com/mooniak/mooniak-web/;
git pull;
git add --all;
git commit -m'Updates';
git submodule foreach git pull;
git add --all;
git commit -m'Update Submodules';
git push