#!/usr/bin/env bash

### load default env vars from default.env or exit with error 99:
. scripts/android/sdk/default.env || exit 99

### load optional .env file with overrides:
if [ -f scripts/android/sdk/.env ]; then
  . scripts/android/sdk/.env || exit 99
fi

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

package_version=8512546

sdk_url="https://dl.google.com/android/repository/commandlinetools-${os}-${package_version}_latest.zip"
tmp_file="/tmp/${rnd_string}.zip"
tmp_dir="${SDK_ROOT}/.tmp/${rnd_string}"

if [ -d "${SDK_ROOT}" ]; then
  backup_dir="${SDK_ROOT}_backup_${rnd_string}"
  echo "Destination directory exists. Renaming it to ${backup_dir}"
  mv "${SDK_ROOT}" "${backup_dir}"
else
  echo "Creating destination SDK directory ${SDK_ROOT}"
  mkdir -p "${SDK_ROOT}"
fi

echo "Downloading command line tools ${sdk_url}"
wget "${sdk_url}" -O "${tmp_file}"

src_props=$(unzip -p "$tmp_file" 'cmdline-tools/source.properties')
pkg_path=$(echo "${src_props}" | grep Pkg.Path | cut -d '=' -f 2 | tr ';' '/')
echo "CLI tools version ${pkg_path}"

echo "Extracting to temporary directory ${tmp_dir}"

mkdir -p "${tmp_dir}"
unzip -qq "${tmp_file}" -d "${tmp_dir}"

mkdir -p "${SDK_ROOT}/${pkg_path}"
mv -T "${tmp_dir}/cmdline-tools" "${SDK_ROOT}/${pkg_path}"

echo "Removing temporary file ${tmp_file} and directory ${tmp_dir}"
rm "${tmp_file}"
rm -rf "${tmp_dir}"

tools_dir="${SDK_ROOT}/${pkg_path}/bin"

if [ ! -d "${tools_dir}" ]; then
  echo "Error: Installation failed. Tools directory does not exist"
  exit 9
fi

echo "Downloading SDK platform (version ${SDK_PLATFORM})..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "platforms;android-${SDK_PLATFORM}"

echo "Downloading latest cmdline-tools..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "cmdline-tools;latest"

echo "Downloading SDK platform (version ${SDK_PLATFORM})..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "emulator"

buildtools_ver="$(${tools_dir}/sdkmanager --list | grep build-tools | sort -r | head -n 1 | awk -F ' ' '{print $1}')"
echo "Downloading build-tools (version ${buildtools_ver})..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "${buildtools_ver}"

echo "Downloading Sources (version ${SDK_PLATFORM})..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "sources;android-${SDK_PLATFORM}"

echo "Downloading platform-tools..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "platform-tools"

echo "Downloading Emulator System Image (version ${SDK_PLATFORM})..."
"${tools_dir}"/sdkmanager --sdk_root="${SDK_ROOT}" --install "system-images;android-${SDK_PLATFORM};${SYSTEM_IMAGE_FLAVOR};x86_64"
