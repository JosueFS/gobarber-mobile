#!/bin/bash

adb kill-server
adb start-server
yarn android
emulator @v4_29 
