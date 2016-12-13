target: run_server

clean:
	rm -rf node_modules

reinstall: clean
	yarn

ensure_outdir:
	mkdir -p public

prepare: ensure_outdir clean reinstall

bundle:
	node_modules/.bin/browserify src/scripts/main.js -o public/bundle.js -d -t [ babelify --presets [ es2015 ] ]

watchify:
	node_modules/.bin/watchify src/scripts/main.js -o public/bundle.js -d -t [ babelify --presets [ es2015 ] ]

styles:
	"node_modules/.bin/node-sass" src/styles/main.scss public/style.css

watch_styles:
	"node_modules/.bin/node-sass" -w src/styles/main.scss public/style.css

run_server:
	python -m SimpleHTTPServer

run_server_py_3:
  python -m http.server

build: .NOTPARALLEL prepare styles bundle

dev: watchify styles watch_styles run_server

dev_python3: watchify styles watch_styles run_server_py_3
