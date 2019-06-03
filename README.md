# react-init
Create a react-native apps with react-navigation and react-redux pre-installed and configured

# Documentation

React Native version : 0.59.8

Pre-installed and configured library :

- react-native-gesture-handler : 1.3.0
- react-navigation : 3.11.0
- react-redux : 7.0.3
- redux : 4.0.1

# Installation

Clone this repository

After cloning this repo, do the following commands :

```bash
cd yourProject
```

  then 

```bash
npm install
```

  if you're using yarn
```bash
yarn install
```

link the react-native-gesture-handler
```bash
react-native link react-native-gesture-handler
```
# Change android package name
To change the package name to com.example.reactexample

rename the folder in android/app/src/main/java :

> com/example/reactexample

Then manually switched the old and new package ids:

in android/app/src/main/javacom/example/reactexample/MainActivity.java
> package com.example.reactexample

in android/app/src/main/javacom/example/reactexample/MainApplication.java
> package com.example.reactexample

And in android/app/build.gradle:
> applicationId "com.example.reactexample"

(Optional) In android/app/BUCK:
> android_build_config(
>   package="MY.APP.NEW_ID"
> )
> android_resource(
>   package="MY.APP.NEW_ID"
> )

Finally
```bash
cd yourProject/android && ./gradlew clean
```

To change app name, just change it in yourProject/app.json
