OPTS=(
  "--language_in=ECMASCRIPT5"
  "--language_out=ECMASCRIPT5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=dist/app-prepack-with-closure.js"
  "--entry_point=dist/app-prepack.js"
  "--dependency_mode=STRICT"

  "dist/app-prepack.js"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})

OPTS=(
  "--language_in=ECMASCRIPT5"
  "--language_out=ECMASCRIPT5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=dist/app-closure.js"
  "--entry_point=app/main.js"
  "--dependency_mode=STRICT"

  "app/main.js"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})