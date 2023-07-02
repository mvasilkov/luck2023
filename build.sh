#!/usr/bin/env bash
set -e

# npm i -g terser
terser -cmo luck.js luck_unopt.js
