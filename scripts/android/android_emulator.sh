#!/usr/bin/env bash

. scripts/android/sdk/.env

echo "SDK_ROOT:${SDK_ROOT}"
echo "SDK_PLATFORM:${SDK_PLATFORM}"

tools_dir="${SDK_ROOT}"/cmdline-tools/bin
emulator_dir="${SDK_ROOT}"/emulator

### 1. Get list of all AVDs (the list will be parameter-per-line)
### 2. Filter only Name: lines from output
### 3. Strip Name: from the line
### 4. Remove leading spaces
list_avds=$("${tools_dir}"/avdmanager list avd | grep Name: | cut -d ':' -f 2 | sed -e 's/^[[:space:]]*//')
avd_name="emulator_avd"

echo "--- Android emulators:"
echo "${list_avds}"
echo "---"

if echo "${list_avds}" | grep -w "${avd_name}" > /dev/null; then
  echo "AVD is present"
else
  echo "AVD is not present. Creating new AVD..."
  "${tools_dir}"/avdmanager create avd -n "${avd_name}" -k "system-images;android-${SDK_PLATFORM};default;x86_64"
fi

echo "Launching emulator ${avd_name}"

### We need to tweak here: directly defining "sysdir"
"${emulator_dir}"/emulator -avd "${avd_name}" -sysdir "${SDK_ROOT}/system-images/android-${SDK_PLATFORM}/default/x86_64/"