OPTS=(
  "--language_in=ES6_Strict"
  "--language_out=ES5"
  "--process_common_js_modules"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=dist/modules.js"
  "--entry_point=modules/main.js"
  
  "./modules/main.js"
  "./modules/country-service.js"
  "./modules/car-service.js"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})