
//设置一个动画函数
const Animation = {
  //先对当前效果进行假设!
   //为了实现图片从左到右,或从右到左,需要拿到两个dom节点,然后设置移动方向,在设置动画
  //函数需要设置参数,根据需求设置from和to,方向这三个参数
  slide($from,$to,direction){

  },

  fade($from,$to){

  },

  zoom($from,$to){

  }
}

class Carousel {
  constructor($root,animation) {
    this.$root = $root
    this.$pre = $root.querySelector('.arrow-pre')
    this.$next = $root.querySelector('.arrow-next')
    this.$$indicators = $root.querySelectorAll('.indicators > li')
    this.$$panels = $root.querySelectorAll('.panels > a')
    //把动画函数传递进来.参数animation是Animation.slide,因此属性animation是个函数
    this.animation = animation//是个函数
    this.bind()
  }

  bind() {
    let self = this
    
    this.$pre.onclick = function () {
      //点击上一页按钮,图片把这一页变成上一页.
      let fromIndex = self.getIndex()
      let toIndex = self.getPreIndex()
      self.setPage(fromIndex,toIndex)
      self.setIndicator(toIndex)//把指示器显示变成上一页的数字下标的位置
    }

    this.$next.onclick = function () {
      let fromIndex = self.getIndex()
      let toIndex = self.getNextIndex()
      self.setPage(fromIndex,toIndex)
      self.setIndicator(toIndex)
    }

    this.$$indicators.forEach($Indicator => {
      $Indicator.onclick = function (e) {
        let fromIndex = self.getIndex()
        let toIndex = [...self.$$indicators].indexOf(e.target)
        self.setIndicator(toIndex)
        self.setPage(fromIndex,toIndex)
      }
    })

  }

  getIndex() {
    return [...this.$$indicators].indexOf(this.$root.querySelector('.indicators .active'))
  }

  getPreIndex(){
    return (this.getIndex() - 1 + [...this.$$indicators].length) % [...this.$$indicators].length
  }

  getNextIndex(){
    return (this.getIndex() + 1) % [...this.$$indicators].length
  }

  setPage(fromIndex,toIndex) {
    //假设已经写好了一个动画,直接调用
    this.animation()//属性animatio是个动画函数,直接执行它加括号就行



  }
  setIndicator(index) {
    this.$$indicators.forEach($indicator => $indicator.classList.remove('active'))
    this.$$indicators[index].classList.add('active')
  }

}

let $carousel = document.querySelector('.carousel')
new Carousel($carousel,Animation.slide)//传递做好的动画效果作为参数进入构造函数构造的对象中
