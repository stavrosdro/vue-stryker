# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project setup

### Create docker image
```
docker build -t vue-stryker -f Dockerfile.dev .
```

### Install dependencies
```
docker run -it --rm -v $(pwd):/app vue-stryker npm i
```

### Create docker container
```
docker create -v $(pwd):/app -p 8080:8080 -p 24678:24678 --name vue-stryker vue-stryker
```

### Start container
```
docker start vue-stryker
```

### Stop container
```
docker stop vue-stryker
```