# 滚动动画系统使用指南

## 概述

我们创建了一个统一的滚动动画系统，支持多种动画类型，并且易于使用和维护。

## 快速开始

### 1. 在页面组件中使用

```vue
<template>
  <div>
    <!-- 使用 scroll-fade-up 类名即可自动应用动画 -->
    <div class="scroll-fade-up">这个元素会从下往上渐入</div>
    <div class="scroll-fade-in">这个元素会淡入</div>
    <div class="scroll-slide-left">这个元素会从左滑入</div>
  </div>
</template>

<script setup>
import { useSimpleScrollAnimation } from '@/composables/useScrollAnimation'

// 一行代码启用所有动画
useSimpleScrollAnimation()
</script>
```

### 2. 可用的动画类型

- `scroll-fade-up` - 从下往上渐入（默认）
- `scroll-fade-in` - 淡入
- `scroll-slide-left` - 从左滑入
- `scroll-slide-right` - 从右滑入
- `scroll-scale` - 缩放渐入

### 3. 高级配置

```vue
<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimation'

// 自定义配置
useScrollAnimations({
  threshold: 0.2,        // 触发阈值
  rootMargin: '0px 0px -100px 0px', // 根边距
  once: true,            // 只触发一次
  delay: 0.1,            // 延迟时间(秒)
  stagger: 0.15          // 错开动画时间(秒)
})
</script>
```

## 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| threshold | number | 0.1 | 触发阈值 (0-1) |
| rootMargin | string | '0px 0px -50px 0px' | 根边距 |
| once | boolean | true | 是否只触发一次 |
| delay | number | 0 | 延迟时间(秒) |
| stagger | number | 0.1 | 错开动画时间(秒) |

## 动画类名

### 基础动画类
- `scroll-fade-up` - 从下往上渐入
- `scroll-fade-in` - 淡入
- `scroll-slide-left` - 从左滑入
- `scroll-slide-right` - 从右滑入
- `scroll-scale` - 缩放渐入

### 辅助类
- `animation-delay-1` 到 `animation-delay-5` - 延迟时间
- `animation-duration-fast/normal/slow` - 动画持续时间
- `animation-ease-in/out/in-out/bounce` - 缓动函数

## 使用示例

### 基础用法
```vue
<template>
  <section>
    <h1 class="scroll-fade-up">标题</h1>
    <p class="scroll-fade-up animation-delay-1">段落1</p>
    <p class="scroll-fade-up animation-delay-2">段落2</p>
  </section>
</template>
```

### 混合动画
```vue
<template>
  <div class="hero">
    <h1 class="scroll-fade-up">主标题</h1>
    <p class="scroll-fade-in animation-delay-1">副标题</p>
    <div class="features">
      <div class="scroll-slide-left">特性1</div>
      <div class="scroll-scale">特性2</div>
      <div class="scroll-slide-right">特性3</div>
    </div>
  </div>
</template>
```

### 自定义配置
```vue
<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimation'

// 为特定页面定制动画
useScrollAnimations({
  threshold: 0.3,
  stagger: 0.2,
  delay: 0.1
})
</script>
```

## 性能优化

1. **自动清理**: 动画系统会自动清理已触发的元素观察器
2. **样式复用**: 所有动画样式都是动态生成的，避免重复
3. **批量处理**: 使用 IntersectionObserver API 进行高效的批量观察

## 兼容性

- 支持所有现代浏览器
- 自动降级处理（如果浏览器不支持 IntersectionObserver）
- 响应式设计友好

## 注意事项

1. 确保元素有足够的空间进行动画
2. 避免在动画元素上使用 `transform` 属性
3. 动画类名会自动应用，无需手动添加 CSS
4. 系统会自动处理初始状态和动画状态 