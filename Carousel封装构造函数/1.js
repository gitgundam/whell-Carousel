
//把原代码转换成构造函数封装

class Carousel {
  constructor($root) {
    this.$root = $root
    this.$pre = $root.querySelector('.arrow-pre')
    this.$next = $root.querySelector('.arrow-next')
    this.$$indicators = $root.querySelectorAll('.indicators > li')
    this.$$panels = $root.querySelectorAll('.panels > a')

    this.bind()
  }

  bind() {
    let self = this
    
    this.$pre.onclick = function () {
      let index = self.getPreIndex()
      self.setPage(index)
      self.setIndicator(index)
    }

    this.$next.onclick = function () {
      let index = self.getNextIndex()
      self.setPage(index)
      self.setIndicator(index)
    }

    this.$$indicators.forEach($Indicator => {
      $Indicator.onclick = function (e) {
        let index = [...self.$$indicators].indexOf(e.target)
        self.setIndicator(index)
        self.setPage(index)
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

  setPage(index) {
    this.$$panels.forEach($panel => $panel.classList.remove('active'))
    this.$$panels[index].classList.add('active')
  }
  setIndicator(index) {
    this.$$indicators.forEach($indicator => $indicator.classList.remove('active'))
    this.$$indicators[index].classList.add('active')
  }

}

let $carousel = document.querySelector('.carousel')
new Carousel($carousel)
/*
const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

const $pre = $('.carousel .arrow-pre')
const $next = $('.carousel .arrow-next')
const $$indicators = $$('.carousel .indicators > li')
const $$panels = $$('.carousel .panels > a')


const getIndex = () => [...$$indicators].indexOf($('.carousel .indicators .active'))
const getPreIndex = () => (getIndex() - 1 + [...$$indicators].length) % [...$$indicators].length
const getNextIndex = () => (getIndex() + 1 + [...$$indicators].length) % [...$$indicators].length

const setPage = index => {
  $$panels.forEach($panel => $panel.classList.remove('active'))
  $$panels[index].classList.add('active')
}


const setIndicator = index => {
  $$indicators.forEach($indicator => $indicator.classList.remove('active'))
  $$indicators[index].classList.add('active')
}


$pre.onclick = function () {
  //先获得上一页页码
  let index = getPreIndex()
  //设置当前页面
  setPage(index)
  setIndicator(index)
}

$next.onclick = function () {
  //先获得上一页页码
  let index = getNextIndex()
  //设置当前页面
  setPage(index)
  setIndicator(index)
}

$$indicators.forEach($Indicator => {
  $Indicator.onclick = function (e) {
    let index = [...$$indicators].indexOf(e.target)
    setIndicator(index)
    setPage(index)
  }
});
*/





