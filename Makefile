.PHONY: default dev build start

default: dev

dev:
	bun run dev

build:
	bun run build

start:
	bun run start
