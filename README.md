# Webpack Boilerplate

一个基于[Angular Webpack Introduction](https://angular.io/docs/ts/latest/guide/webpack.html)
和`@angular/cli`提供的 Webpack 构建思路的Webpack Boilerplate项目.


## 灵感
### 背景
在 `@angular/cli`出来之前,一直觉得angular 的SystemJS bootstrap的方式不太讨我喜(SystemJS恐成最大输家).

后来`@angular/cli`的出现,内置了`Webpack`构建的方式,集成了各种构建配置,最后将应用级别的配置暴露到项目的`.angular.json`里面.

> 这种一站式的配置相对理项目结构的人来说,提供了一种非常好的入口型配置.  
> 但是在成为理解整个项目结构,整个框架约定和规范的螺丝钉,参与到团队开发的项目中去的时候.  
>缺点是学习成本相对较高,构建的过程官方其实没有文档,需要自己熟悉webpack构件流程,loader,plugin.   


接着`vue-cli`官方提供的`Webpack-Template`中也提供了一些样例.

参考`.angular.json`的形势,
部分`@angular/cli`源代码中`webpack-config`与`vue-webpack-template`中的配置

企图综合的总结出一个
相对通用的,
遵循前端项目构建主流约定的,
不过度封装配置导致学习成本较高的
一个手骨架.

### 演变过程
根据项目结构进化的过程,防止为了过度可配置化使得项目结构学习成本过高.根据演变过程设立了几个版本:

1.`Pure-Webpack` 较为纯净的通过 `Webpack-cli`,`Webpack-dev-server` 命令 + 直接的配置文件运行的版本.

2.`Gulp-Flow` 基于`Pure-Webpack`版本,稍微将一部分可配置化,且在常见的开发约定中希望易于用户配置的部分,抽取到更上一级的配置文件中,避免直接修改`webpack.config`.
并且以`gulp`的任务流进行封装.

3.在Gulp Flow的基础上提供一个与各种前后端框架集成的一个example.[TODO]
届时会以`Tag`的形式标记出来.


## 食用方法



### 安装依赖
> P.S. 因为项目的依赖中包含了`node-sass`.在国内下载可能被墙而导致下载构建超慢.  
> 参考[安装 node-sass 的正确姿势](https://github.com/lmk123/blog/issues/28),  
> 给出一个替换`node-sass`源的解决方案:  
> 
> 请在执行install命令之前使用:  
> 
> Win: set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
> 
> Mac: export SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/


使用NPM:
```bash
npm install
```

使用YARN:
```bash
yarn
```

### 本地开发
```bash
npm run dev
```
or
```
yarn run dev
```


之后查看浏览器 [http://127.0.0.1:5000](http://127.0.0.1:5000)
默认的配置端口是 5000.
理解 & 自定义 : 详见下面的配置解说部分.

### 生产环境打包
```bash
npm run build
```

or 
``` bash
yarn run build
```

之后会在项目文件夹中
`dist`目录生成生产环境的所有构建出来的文件




## 进阶理解
### 理解约定


### 官方文档

### 自定义




## 与主流的SPA框架进行搭配

### AngularJS 1.X 
可能`AngularJS`在日新月异的前端届不太流行了, 但还是得提供过稍花心思研究过的Boilerplate
可参考[Angular Boilerplate] 


### Vue 2
详见[Vue-Boilerplate](https://github.com/Aquariuslt/Vue-Boilerplate)









