# Mo css framework

# 持续更新中...

# Api

- [utils](http://www.kancloud.cn/smohan/mo-css/281475)
- [buttons](http://www.kancloud.cn/smohan/mo-css/281483)
- [input](http://www.kancloud.cn/smohan/mo-css/281484)

# 自定义

### button

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

### input

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