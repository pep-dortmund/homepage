#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
if [[ $TRAVIS_BRANCH == 'master' ]] && [[ $TRAVIS_PULL_REQUEST = false ]]
then
	# add remote ssh-key to key-storage
	ssh-keyscan -t rsa $DEPLOY_HOST 2> /dev/null | sort -u - ~/.ssh/known_hosts -o ~/.ssh/known_hosts
	openssl aes-256-cbc -K $encrypted_4649eefbbfcb_key -iv $encrypted_4649eefbbfcb_iv
    -in deploy_key.enc -out deploy_key -d
	eval "$(ssh-agent -s)"
	chmod 600 deploy_key
	ssh-add deploy_key

	rm -rf ~/out || exit 0;
	# compile the website
	bundle exec jekyll build -d ~/out --config _uberspace_config.yml
	# upload site
	rsync -rq ~/out/* $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
else
	echo "NOT ON MASTER BRANCH, WILL NOT DEPLOY SITE"
fi
