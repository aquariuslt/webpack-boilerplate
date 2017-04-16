# Webpack Boilerplate

[![Build Status](https://travis-ci.org/Aquariuslt/Webpack-Boilerplate.svg?branch=master)](https://github.com/Aquariuslt/Webpack-Boilerplate)

[![License](https://img.shields.io/github/license/Aquariuslt/Webpack-Boilerplate.svg)](https://github.com/aquariuslt/webpack-boilerplate)

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

### 目标
1.提供通用符合主流约定的前端构建项目模板  
2.从浅到深演示演变过程,提供完全的说明  
3.提供多个后续开发集成的样例  


### 使用须知
先假设你已经对一个项目的前端工程部分有一些基本的概念:
这些概念可能是模糊的,但是已经知道其在项目工程化中的一些必要性.

1.前端资源文件开发/生产环境的特点.(Normal)
2.前端项目自动化构建的重要性.(Normal)
3.一些流行框架的模块化特性.(Hard)
4.知道`Webpack`,`Browserify`等常见的构建工具名字.(Easy)
5.知道`gulp`等构建流程控制工具名字.(Easy)
6.知道`NPM`的常用命令

当开始接触这些并有了初步的概念之后,再来使用此Boilerplate,才能达到事半功倍的效果.  



### 演变过程
根据项目结构进化的过程,防止为了过度可配置化使得项目结构学习成本过高.根据演变过程设立了几个版本:

1.`Pure-Webpack` 较为纯净的通过 `Webpack-cli`,`Webpack-dev-server` 命令 + 直接的配置文件运行的版本.
![Pure Webpack Diagram Flow](https://ooo.0o0.ooo/2017/04/16/58f38b75c61b4.png)

在此基本的结构下  
本地开发纯前端客户端  
可以通过`webpack-dev-server`指定开发环境配置,之后启动一个本地的可热替换纯前端单页应用服务器.
譬如
```bash
webpack-dev-server --config ./tasks/config/webpack.dev.config.babel.js
```
打包成生产环境的静态资源文件时候  
可以通过`webpack`指定生产环境配置,构建出对应的对应的静态资源文件.  
譬如
```bash
webpack --config ./tasks/config/webpack.prod.config.babel.js 
```

> 当基本阅读过Webpack官网提供的一些样例的时候,这部分就相当容易理解了.  
> 基本是按照Webpack官方文档的理念来进行基本的配置分割
> 部分官方文档介绍详尽,易于理解的部分,在`进阶理解`这一部分章节的最后会提供一些链接.  

TAG: [pure-webpack](https://github.com/Aquariuslt/Webpack-Boilerplate/releases/tag/pure-webpack)


2.`Gulp-Flow` 基于`Pure-Webpack`版本,稍微将一部分可配置化,且在常见的开发约定中希望易于用户配置的部分,抽取到更上一级的配置文件中,避免直接修改`webpack.config`.
并且以`gulp`的任务流进行封装.

在此基本的结构下  
`webpack`的各个环境的配置文件依然清晰可见.
但是`webpack`的各种配置中,有相当一部分在项目结构初始化之后不必再修改(或者很长时间不会修改).

那么这部分的第一步我们就根据在实际项目中经常需要改动,或者根据前人经验把可预见的可能需要改动的地方,从`webpack`的配置文件中抽取出来.

变成这样:  
![Webpack Gulp](https://ooo.0o0.ooo/2017/04/17/58f39b4c1ea23.png)

请注意黄线部分,目前版本根据`webpack`的配置,抽取了一部分可能经常变化的配置到`baseConfig`,`devConfig`,`prodConfig`三个配置文件中.

> 有什么可以立刻想到来使用的场景?  
> 本项目默认开发环境webpack-dev-server占用的端口是5000,想修改;  
> 本项目要与一些后端项目的静态资源服务文件夹,不是流行的约定目录`/dist`,想修改成`/public`,`/static`或者`${SpringBootProject}/src/main/resource/static`
> 等等,都抽取到这种级别的config文件中.
> 当然,结合`gulp`的Task Flow进行构建之后,还可以自定义更多与`webpack`打包无关的配置.


这样抽取出来的目的是什么呢?

1.期望开发者日常开发中只用修改此三个文件.当引用的技术框架,需要添加,改变的时候修改该文件即可.

2.这样抽取与`@angular/cli`暴露出来的统一配置`.angular.json`相比有什么好处呢?

像`Angular`这样的大项目,为了将所有可配置的地方抽象,最终暴露出一个或较少的配置文件,隐藏了中间复杂的构建过程.

按照大型项目最终工程化的几个阶段:  
构建工具的基本构建配置 -> 
提取全部可配置化的属性,抽象成构建任务流 ->
为整个构建流提供最终的入口配置,并为此添加入口配置的$schema文件,
编写详细的文档提供配置说明...

`Angular`处于的一个阶段是上面最后一个阶段.
框架的开发团队做了大量的工作.
使得应用开发者本身看不到中间构建的较细节的部分,当出了构建级别的问题的时候,要不就是打破项目规范自己添加自己的workaround,要不就是等待官方fix/提issue,提pr.(当然作为底层的螺丝钉 基本上为如此庞大提出合理优雅的PR这个假设不太现实...)  

本项目 处于一个配置裸露,少量灵活抽取配置的阶段.
好处就是可以从浅到深的理解一个类似`Angular`结构进化的年轻部分,在理解项目结构之后具有可以充分扩展的特性,易于根据项目情况进行增改.


3.在Gulp Flow的基础上提供一个与各种前后端框架集成的一个example.[TODO]
届时会以`Tag`的形式标记出来.


## 食用方法

### 克隆项目
```bash
git clone https://github.com/Aquariuslt/Webpack-Boilerplate.git && cd Webpack-Boilerplate
```

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



## 与流行的一些服务端项目结构搭配 [TODO]
### SpringBoot

### Express

### 通用的开发环境代理通讯



## License
MIT
