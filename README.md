### 介绍

一款基于uniapp的简易tabBar组件

### 使用方式

引用组件

```
npm install jmhc-tabbar
import jmhcTabbar from "jmhc-tabbar"
Vue.use(jmhcTabbar)
```

使用组件

```
<jmhc-tabbar :list='list' :midButton="midButton" :tabbarStyle="tabbarStyle"></jmhc-tabbar>
```

```
export default {
	data() {
		return {
			midButton:true,
			tabbarStyle:{
				height:'60px',
				boxShadow:' 0 -1px 6px red'
			},
			list: [
				{
					hasBadge: false,
					pagePath: '/pages/index/index2',
					text: 'ss', 
					iconPath: '../../static/fuwu1.png', 
					selectedIconPath: '../../static/fuwu2.png'
				},
				{
					hasBadge: true,
					pagePath: '/pages/index/index', 
					text: 'ss', 
					iconPath: '../../static/fuwu1.png', 
					selectedIconPath: '../../static/fuwu2.png' 
				},
			]
		}
	},
}
```



### 属性说明

|    属性     |  类型   | 默认值 |               说明               | 是否必填 |
| :---------: | :-----: | :----: | :------------------------------: | -------- |
|    list     |  Array  |        |          tabbar数据数组          | yes      |
|  midButton  | Boolean | false  | 是否突起（仅在list为奇数时有效） |          |
| tabbarStyle | Object  |        |  tabbar样式（支持css所有样式）   |          |
| circleStyle | Object  |        |       凸起圆的样式（如下）       |          |
|  textStyle  | Object  |        |      list中文本样式（如下）      |          |
|  imgStyle   | Object  |        |         图片样式（如下）         |          |

list属性说明：

|       属性       |  类型   |            值            |                 说明                 |
| :--------------: | :-----: | :----------------------: | :----------------------------------: |
|     hasBadge     | Boolean |          false           | 是否含有角标（角标内容自行插入slot） |
|     pagePath     | String  |  '/pages/index/index2'   | 页面路径，必须在 pages .json中先定义 |
|       text       | String  |          "ssss"          |            tab按钮上文字             |
|     iconPath     | String  | '../../static/fuwu1.png' |               图片路径               |
| selectedIconPath | String  | '../../static/fuwu2.png' |            选中时图片途径            |

circleStyle属性说明：

|   属性    |  类型  |         值         |                             说明                             |
| :-------: | :----: | :----------------: | :----------------------------------------------------------: |
|    top    | String |       '10px'       | 相对于tabbar的位置（还包括right,left,bottom,translate等与位置相关的） |
|   width   | String |       ‘50px’       |                 凸起圆的宽度（还包括height）                 |
| boxShadow | String | '0 -1px 6px black' |                          突起的阴影                          |

textStyle属性说明：

|     属性      |  类型  |   值    |       说明       |
| :-----------: | :----: | :-----: | :--------------: |
|     color     | String | 'black' |     文本颜色     |
| selectedColor | String | ‘green’ | 选中时文本的颜色 |
|   fontSize    | Number |   16    |     字体大小     |
|  paddingTop   | Number |    1    | 文字与图片的距离 |

imgStyle属性说明：

|   属性    |  类型  |  值  |      说明      |
| :-------: | :----: | :--: | :------------: |
| imgWidth  | Number |  21  |    图片宽度    |
| imgHeight | Number |  21  |    图片高度    |
| midWidth  | Number |  51  | 突起图片的宽度 |
| midHeight | Number |  51  | 突起图片的高度 |