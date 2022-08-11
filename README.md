# Vue

## 创建 Vue 对象

```
    new Vue({
        el:"",
        data:{

        },
        methods:{

        },
        //自定义指令
        derectives:{
            xxx:{
                bind(element,binding){}
                inserted(element,binding){}
                update(element,binding){}
            }
        }
    })
```

## vue 指令

- ### v-text
- ### v-html
- ### v-on
- ### v-show
- ### v-if
- ### v-bind
- ### v-model
- ### v-cloak
        特殊属性，配合css解决网速慢页面展示出{{xxx}}的问题
- ### v-once
        节点初次动态渲染后就视为静态内容，数据变化不更新
- ### v-pre
        跳过所在节点的编译过程

## vue 事件修饰符

- ### .prevent 阻止默认事件
- ### .stop 阻止事件冒泡
- ### .once 事件只触发一次
- ### .capture 使用事件的捕获模式（捕获 ↓，冒泡 ↑）
- ### .self e.target 是当前元素才执行
- ### .passive 事件的默认行为立即执行
