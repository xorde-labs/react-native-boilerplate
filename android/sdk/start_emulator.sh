#!/usr/bin/env bash

. android/sdk/vars.env

tools_dir="${SDK_ROOT}"/cmdline-tools/bin

### 1. Get list of all AVDs (the list will be parameter-per-line)
### 2. Filter only Name: lines from output
### 3. Strip Name: from the line
### 4. Remove leading spaces
list_avds=$("${tools_dir}"/avdmanager list avd | grep Name: | cut -d ':' -f 2 | sed -e 's/^[[:space:]]*//')

for avd in ${list_avds}; do
  echo "AVDS:$avd"
  if [ "${avd}" == "emulator_avd" ]; then
    echo "AVD found"
  fi
done


#"${tools_dir}"/avdmanager create avd -n emulator_avd -k "system-images;android-${SDK_PLATFORM};default;x86_64"

#"${tools_dir}"/avdmanager create avd -n emulator_avd -k "system-images;android-${SDK_PLATFORM};default;x86_64"
#
#"${tools_dir}"/avdmanager list avd

