#!/usr/bin/env bash

. scripts/android/sdk/default.env

if [ -f scripts/android/sdk/.env ]; then
  . scripts/android/sdk/.env
fi

if [ -f "$HOME/.sdkman/bin/sdkman-init.sh" ]; then
  . "$HOME/.sdkman/bin/sdkman-init.sh"
else
  echo "Warning: SDKMain not found. $HOME/.sdkman/bin/sdkman-init.sh is not present."
  if [ ! -z "${JAVA_HOME}" ]; then
    echo "Error: JAVA_HOME is not set. Can not continue."
    echo "Possible solution:"
    echo "1. Install and configure SDKMan, for more info refer to docs"
    echo "2. Install and configure Java"
    echo "3. Check if environment variable JAVA_HOME is set correctly, for more info refer to docs"
    exit
  fi
fi

echo "JAVA_HOME=${JAVA_HOME}"
java --version

export ANDROID_SDK_ROOT="${SDK_ROOT}"
export ANDROID_HOME="${SDK_ROOT}"

