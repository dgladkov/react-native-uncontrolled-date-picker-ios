#/bin/sh
rsync -rv \
  --exclude .git/ \
  --exclude package-lock.json \
  --exclude .npmignore \
  --filter=':- .npmignore' \
  .. node_modules/react-native-uncontrolled-date-picker-ios
