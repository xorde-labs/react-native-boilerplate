#!/usr/bin/env bash

. scripts/android/sdk/default.env
. scripts/android/sdk/.env > /dev/null

. "$HOME/.sdkman/bin/sdkman-init.sh"

echo "JAVA_HOME=${JAVA_HOME}"
java --version

export ANDROID_SDK_ROOT="${SDK_ROOT}"
export ANDROID_HOME="${SDK_ROOT}"
