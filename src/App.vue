<template>
  <div id="app" class="w-screen h-screen border-box p-4 flex flex-col">
    <header-bar></header-bar>
    <tool-bar @redo="redo" @revoke="revoke"></tool-bar>
    <layout-body>
      <!-- 左侧 -->
      <div class="b-box br relative" ref="panel1">
        <div class="rect drag1" v-divDrag="{set:setVal1,stop:setStop1}" :style="pos1"/>
        <div class="rect drag2" v-divDrag="{set:setVal2,stop:setStop2}" :style="pos2"/>
      </div>
      <!-- 右侧 -->
      <div class="relative" ref="panel2">
        <div class="rect drag1" :style="pos1"/>
        <div class="rect drag2" :style="pos2"/>
      </div>
    </layout-body>
  </div>
</template>

<script>
import {HeaderBar, ToolBar, LayoutBody} from './components'

export default {
  name: 'App',
  components: {
    HeaderBar,
    ToolBar,
    LayoutBody,
  },
  computed: {
    pos1() {
      return {left:this.position1.x + 'px', top: this.position1.y + 'px'}
    },
    pos2() {
      return {left:this.position2.x + 'px', top: this.position2.y + 'px'}
    },
  },
  data(){
    return {
      position1: {
        x: 0,
        y: 0
      },
      position2: {
        x: 0,
        y: 0
      },
      steps: [],
    }
  },
  methods: {
    redo() {
      console.log('重做');
      this.initPos()
    },
    revoke() {
      if (this.steps.length > 1) {
        this.steps.pop()
        var prevStep = this.steps[this.steps.length - 1]
        console.log(prevStep);
        console.log(this.curEl);
        prevStep.el.style.left = prevStep.x + 'px'
        prevStep.el.style.top = prevStep.y + 'px'
        
      }else{
        this.initPos()
      }
    },
    initPos() {
      this.position1 = {
        x: 80,
        y: 50
      }
      this.position2 = {
        x: 200,
        y: 390
      }
    },
    setVal1(left,top) {
      this.position1.x = left;
      this.position1.y = top;
    },
    setVal2(left,top) {
      this.position2.x = left;
      this.position2.y = top;
      
    },
    setStop1(left,top,el) {
      this.steps.push({x:left,y:top,el:el})
    },
    setStop2(left,top,el) {
      this.steps.push({x:left,y:top,el:el})
    }
    
  },
  created(){
    this.initPos()
  },
  mounted() {
    
  },
}
</script>

<style>

</style>
