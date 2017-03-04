# Mo css framework

# 持续更新中...

### [DEMO](https://s-mohan.github.io/demo/mo-css/)

### Api

- [variable](http://www.kancloud.cn/smohan/mo-css/281486)
- [utils](http://www.kancloud.cn/smohan/mo-css/281475)
- [buttons](http://www.kancloud.cn/smohan/mo-css/281483)
- [input](http://www.kancloud.cn/smohan/mo-css/281484)
- [radio](http://www.kancloud.cn/smohan/mo-css/282365)
- [checkbox](http://www.kancloud.cn/smohan/mo-css/282364)
- [switch](http://www.kancloud.cn/smohan/mo-css/282363)
- [table](http://www.kancloud.cn/smohan/mo-css/282362)

### 自定义

#### button

``` css
@import './mixins/button';
//自定义样式（背景，颜色）
.mo-button--[style] {
    @include buttonStyle($border, $background, $color, $hoverBorder, $hoverBackground, $hoverColor);
}
//自定义尺寸
$my-button-size : (font-size:14px, line-height:1.4286, padding-y:6px, padding-x:16px) !default;
.mo-button--[size] {
    @include buttonSize ($my-button-size );
}
```

#### input

``` css
@import './mixins/input';
//自定义样式（背景，颜色）
.mo-input--[style] {
    @include inputStyle ($border, $focusBorder);
}
//自定义尺寸
$my-input-size : (font-size:14px, line-height:1.4286, padding-y:6px, padding-x:16px) !default;
.mo-input--[size] {
    @include inputSize ($my-input-size);
}
```

#### radio
``` css
@import './mixins/radio';
//自定义样式（颜色）
.mo-radio--[style] {
    @include radioStyle($color);
}
```

#### checkbox
``` css
@import './mixins/checkbox';
//自定义样式（颜色）
.mo-checkbox--[style] {
    @include checkboxStyle($color);
}
```

#### switch
``` css
@import './mixins/switch';
//自定义样式（颜色）
.mo-switch--[style] {
    @include switchStyle($color);
}
//自定义尺寸
.mo-switch--[size] {
    @include switchSize ($width, $height);
}
```