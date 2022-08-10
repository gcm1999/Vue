# Vue

## 创建 Vue 对象

    new Vue({
        el:"",
        data:{

        },
        methods:{

        }
    })

## vue 指令

- ### v-text
- ### v-html
- ### v-on
- ### v-show
- ### v-if
- ### v-bind
- ### v-model

## vue 事件修饰符

- ### .prevent 阻止默认事件
- ### .stop 阻止事件冒泡
- ### .once 事件只触发一次
- ### .capture 使用事件的捕获模式（捕获 ↓，冒泡 ↑）
- ### .self e.target 是当前元素才执行
- ### .passive 事件的默认行为立即执行
