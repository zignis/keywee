#!/bin/sh
echo
if [ -e .commit ]
    then
    rm .commit
    git add -A
    git commit --amend -C HEAD --no-verify
fi
exit
