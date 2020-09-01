const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

const $pre = $('.carousel .arrow-pre')
const $next = $('.carousel .arrow-next')  
const $$indicators = $$('.carousel .indicators > li')
const $$panels = $$('.carousel .panels > a')

//点击 pre 展示 上一页 并设置 indicators
//点击 next 展示 下一页 并设置 indicators
//点击 indicators 展示 第 n 页

const getIndex =()=> [...$$indicators].indexOf($('.carousel .indicators .active'))
//小学数学题,举例一个队伍.思路是前一个减去后一个,因为可能是负数,所以加上队伍的长度,再除以队伍的长度,余下的数字就是本身的位置
const getPreIndex = ()=>(getIndex() - 1 + [...$$indicators].length) % [...$$indicators].length
const getNextIndex = ()=>(getIndex() + 1 + [...$$indicators].length) % [...$$indicators].length

const setPage = index => {
  $$panels.forEach($panel => $panel.classList.remove('active'))
  $$panels[index].classList.add('active')
}


const setIndicator = index => {
  $$indicators.forEach($indicator => $indicator.classList.remove('active'))
  $$indicators[index].classList.add('active')
}


$pre.onclick = function(){
  //先获得上一页页码
  let index = getPreIndex()
  //设置当前页面
  setPage(index)
  setIndicator(index)
}

$next.onclick = function(){
  //先获得上一页页码
  let index = getNextIndex()
  //设置当前页面
  setPage(index)
  setIndicator(index)
}

$$indicators.forEach($Indicator => {
  $Indicator.onclick = function(e){
    let index = [...$$indicators].indexOf(e.target)
    setIndicator(index)
    setPage(index)
  }
});