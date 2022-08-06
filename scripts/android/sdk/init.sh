#!/usr/bin/env bash

. scripts/android/sdk/.env

. "$HOME/.sdkman/bin/sdkman-init.sh"

export ANDROID_SDK_ROOT="${SDK_ROOT}"
export ANDROID_HOME="${SDK_ROOT}"