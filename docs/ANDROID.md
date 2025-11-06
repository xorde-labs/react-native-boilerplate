# Android Development

## Java JDK

### Configure Java 11 using SDKMan!

If you have SDKMan! installed, just make sure you have Java 11 candidate installed.

For example:

```shell
sdk install java 11.0.16-zulu
sdk use java 11.0.16-zulu
```

## Install Android SDK

Android SDK should be installed in `$HOME/.android/sdk`

### Updating .profile (optional)


```shell
echo "export ANDROID_SDK_ROOT=$HOME/.android/sdk" >> $HOME/.profile
```

### Ubuntu

```shell
scripts/android/sdk/install.sh
```

## Create Android Emulator Device

### Run emulator start and auto-create script

```shell
yarn run android:emulator
```

### Enable physical keyboard input

```shell
sed -i 's/^hw.keyboard = .*/hw.keyboard = yes/g' $HOME/.android/avd/emulator_avd.avd/config.ini
```
