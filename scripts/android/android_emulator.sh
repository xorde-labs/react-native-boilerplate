#!/usr/bin/env bash

. scripts/android/sdk/init.sh

echo "ANDROID_SDK_ROOT:${ANDROID_SDK_ROOT}"
echo "SDK_PLATFORM:${SDK_PLATFORM}"
echo "JAVA_HOME:${JAVA_HOME}"

### path to cmdline-tools relative to SDK_ROOT:
tools_dir="cmdline-tools/latest/bin"

### path to emulator relative to SDK_ROOT:
emulator_dir=emulator

### Determine architecture: x86_64, etc...
arch=$(uname -i)

cd "${SDK_ROOT}" || exit

### list all available AVDs:
### 1. Get list of all AVDs (the list will be parameter-per-line)
### 2. Filter only Name: lines from output
### 3. Strip Name: from the line
### 4. Remove leading spaces
list_avds=$("${tools_dir}"/avdmanager list avd | grep Name: | cut -d ':' -f 2 | sed -e 's/^[[:space:]]*//')
avd_name="emulator_avd"

echo "Target AVD name: ${avd_name}"
echo "Detected tools directory: ${tools_dir}"
echo "Emulator directory: ${emulator_dir}"
echo "Detected architecture: ${arch}"

echo "--- Detected AVDs:"
echo "${list_avds}"
echo "---"

if echo "${list_avds}" | grep -w "${avd_name}" > /dev/null; then
  echo "AVD is present"
else
  echo "AVD is not present. Creating new AVD..."
  cd "${tools_dir}" || exit 11
  ./avdmanager create avd -n "${avd_name}" -k "system-images;android-${SDK_PLATFORM};${SYSTEM_IMAGE_FLAVOR};${arch}" -b "${arch}" -d "${EMULATOR_DEVICE}"

  ### enabling host keyboard for emulator:
  sed -i 's/^hw.keyboard = .*/hw.keyboard = yes/g' "$HOME/.android/avd/${avd_name}.avd/config.ini"
fi

echo "Launching emulator ${avd_name}"

sys_dir="${SDK_ROOT}/system-images/android-${SDK_PLATFORM}/${SYSTEM_IMAGE_FLAVOR}/${arch}"
if [ ! -d "${sys_dir}" ]; then
  echo "Error: sys_dir not found ${sys_dir}"
  echo "Possible causes:"
  echo "1. SDK is not installed"
  echo "2. SDK system-images not installed at all, or not installed for target platform:${SDK_PLATFORM}"
  exit 12
fi

### We need to tweak here: directly providing "sysdir"
"${SDK_ROOT}/${emulator_dir}/emulator" -avd "${avd_name}" -sysdir "${sys_dir}"
