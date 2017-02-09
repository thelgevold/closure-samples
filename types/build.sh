OPTS=(
  "--language_in=ES6_Strict"
  "--language_out=ES5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=dist/types.js"
  "--entry_point=types/main.js"
  "./types/main.js"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})