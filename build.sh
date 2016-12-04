OPTS=(
  "--generate_exports"
  "--language_in=ES6_STRICT"
  "--language_out=ES5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=dist/person.js"
  "--entry_point=annotations/index.js"
  "--variable_renaming_report=dist/variable_renaming_report"
  "--property_renaming_report=dist/property_renaming_report"
  "--js_module_root=node_modules"
  "node_modules/google-closure-library/closure/goog/base.js"
  "annotations/*.js"
  "externs.js"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})