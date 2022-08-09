#!/usr/bin/env bash

. scripts/android/sdk/.env

if [[ $OSTYPE == 'darwin'* ]]; then
  os=mac
elif [[ $OSTYPE == 'linux-gnu'* ]]; then
  os=linux
else
  echo "Unsupported OS: ${OSTYPE}"
  exit 1
fi

export LC_ALL=C
rnd_string=$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo '')

sdk_url="https://dl.google.com/android/repository/commandlinetools-${os}-8512546_latest.zip"
tmp_file="/tmp/${rnd_string}.zip"

if [ -d "${SDK_ROOT}" ]; then
  backup_dir="${SDK_ROOT}_backup_${rnd_string}"
  echo "Destination directory exists. Renaming it to ${backup_dir}"
  mv "${SDK_ROOT}" "${backup_dir}"
else
  echo "Creating destination SDK directory ${SDK_ROOT}"
  mkdir -p "${SDK_ROOT}"
fi

echo "Downloading ${sdk_url}"
wget "${sdk_url}" -O "${tmp_file}"

echo "Extracting to destination directory ${SDK_ROOT}"
unzip "${tmp_file}" -d "${SDK_ROOT}"

echo "Removing temporary file ${tmp_file}"
rm -f "${tmp_file}"

tools_dir="${SDK_ROOT}"/cmdline-tools/bin/

echo "Downloading SDK platform (version ${SDK_PLATFORM})"
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "platforms;android-${SDK_PLATFORM}"

echo "Downloading Emulator System Image (version ${SDK_PLATFORM})"
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "system-images;android-${SDK_PLATFORM};default;x86_64"
