#!/bin/bash

dir="$(dirname $(realpath $0))"

echo "Serving directory ${dir}/"

python3 -m http.server -d "${dir}"
