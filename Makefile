# POSIX-compatible Makefile for python-config
.PHONY: all test bench examples clean

all: test

test:
	npm test

bench:
	node benches/bench_load.js

examples:
	node examples/basic.js
	node examples/advanced.js
	node examples/features.js
	node examples/esm.mjs

clean:
	rm -rf node_modules coverage
