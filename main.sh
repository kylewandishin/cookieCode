#!/bin/bash
function _run_dev() {
    while true; do
    echo "reloaded : $(date +%T)"
    npm run build > /dev/null
    done
}
alias nrb='_run_dev'