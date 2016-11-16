#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
if [[ $TRAVIS_BRANCH == 'master' ]]
then
	rm -rf ~/out || exit 0;
	# compile the website
	bundle exec jekyll build -d ~/out --config _github_config.yml
	# upload site
	rsync -rq out/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
else
	echo "NOT ON MASTER BRANCH, WILL NOT DEPLOY SITE"
fi
