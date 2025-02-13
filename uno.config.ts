import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
    presets: [
        presetUno(), // 默认预设，包含了常见的实用类
        presetAttributify(), // 支持属性化模式
        presetIcons() // 支持图标类
    ],
    rules: [
        // 自定义规则示例
        [/^bgf-(.*)$/, ([, color]) => ({ 'background-color': color })],
        [/^text-(\w+)$/, ([, c]) => ({ color: c })],
    ]
});
