#!/bin/bash
cd "$( dirname "$( readlink -f "$0" )" )"
npm install
echo -e "\nOpen http://localhost:8000/example/index.html in browser!\n"
python -m SimpleHTTPServer
