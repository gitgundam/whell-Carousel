# 制作了一个Carousel组件

## demo1使用js基本实现了轮播图片的功能
[demo1](https://gitgundam.github.io/whell-Carousel/Demo1_Carousel基础实现轮播效果/1.html)
## demo2 使用面向对象的方式,使用构造函数,实现轮播效果的组件化
[demo2](https://gitgundam.github.io/whell-Carousel/Demo_2Carousel封装构造函数/1.html)
## demo3结合设计模式,实现不同效果的轮播
[demo3](https://gitgundam.github.io/whell-Carousel/Demo3_Carousel实现不同组件多种轮播效果/1.html)
- slide 图片根据点击按钮方向左右滑动轮播
- fade 图片使用渐变的方式轮播
- zoom 图片先变大后变小
# 总结
- 先是用代码简单的实现了需要的效果
- 然后我把实现效果的代码封装了下,整合了一个构造函数,这样可以制造多个组件,然后实现其功能
- 最后在实现了组件化的基础上,添加了一个动画对象,对象中包含三个动画函数.将这个函数传入构造函数中实现不同的动画效果.
