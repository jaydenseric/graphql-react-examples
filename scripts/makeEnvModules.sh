#! /bin/sh
# Makes the public environment variable modules.

# Makes the modules for a public environment variable.
# Argument 1: Name.
# Argument 2: Value.
makeEnvModule() {
  if [ -z "$2" ]
  then
    echo "Missing environment variable \`$1\`." >&2
    exit 1
  else
    echo "export default Deno.env.get(\"$1\");" >> env/$1.mjs
    echo "export default \"$2\";" >> public/env/$1.mjs
  fi
}

# Remove existing directories.
rm -rf env public/env &&

# Make the directories.
mkdir -p env public/env &&

# Make the modules.
makeEnvModule ACCESS_TOKEN_GITHUB $ACCESS_TOKEN_GITHUB
