#!/usr/bin/env bash

echo 'iOS pods auto init script'

if [ ! -d 'ios/Pods' ] || [ ! -f 'ios/Podfile.lock' ]; then
  echo 'Pods not initialized. Initializing...'
  cd ios || exit 1

  echo 'Updating pods repo...'
  pod repo update

  echo 'Installing pods...'
  pod install
else
  echo 'Pods are found.'
fi
