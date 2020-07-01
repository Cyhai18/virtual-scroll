# vue-virtual-scroll

一个可以用来渲染大量列表数据的Vue虚拟滚动组件

## Install
`npm i @cyhai/virtual-scroll --save`

## Use
```javascript
import virtualScroll from '@cyhai/virtual-scroll'
Vue.use(virtualScroll)
```

```html
<virtual-scroll :datas='listData' :itemHeight='50' :remain='10'>
    <template v-slot={item}>
        <span class="list">{{item.value}}</span>
    </template>
</virtual-scroll>
```

## Options

| 参数      |    说明 | 类型  | 可选  | 默认值  |
| :-------- | --------:|-------:|-------:| :--: |
| datas  | 数据源 |  Array   |  -   |  [ ]  |
| itemHeight  | 每项高度 |  Number   |  -   |  40   |
| remain  | 展示条数 |  Number   |  -   |  10   |

## Project setup
`yarn install`

`yarn serve`

