# styleObject2CSS README

This is the README for extension "styleObject2CSS"
擴充功能 "styleObject2CSS" 說明文件

## Features

styleObject2CSS can transform the style object in jsx file to CSS format.
此套件功能為將JSX中宣告的style object區塊轉換為css格式。

example:
範例:

```javascript
{
    "fontSize": "17px",
    "lineHeight": "1.47",
    color: "#4a4a4a",
    padding: "10px 0",
    whiteSpace: "pre-line",
    letterSpacing: '-0.02222em',
    wordBreak: 'break-word'
};
```

after command: styleObject2CSS.transform
輸入指令: styleObject2CSS.transform 後

```SCSS
{
    font-size: "17px";
    line-height: "1.47";
    color: "#4a4a4a";
    padding: "10px 0";
    white-space: "pre-line";
    letter-spacing: '-0.02222em';
    word-break: 'break-word';
}
```

## Requirements

N/A
無

## Extension Settings

This extension contributes the following settings:
此擴充功能使用以下擴充:

* command
* 指令

`styleObject2CSS.transform`: Transform the text selection to CSS format in editor.
`styleObject2CSS.transform`: 將選擇中的style object文字區塊轉換為CSS格式的指令.

* settings
* 設定
`doubleQuotation`: Set attributes value symbol to double quotation(true/false). Default is false(single quotation).
`doubleQuotation`: 設定轉換後的屬性值符號是否使用雙引號(true/false). 預設為false(單引號).

```JSON
"styleObject2CSS":{
    "settings":{
        "doubleQuotation": false
    }
}
```

## Known Issues

N/A
無

## Release Notes

Initial

### 1.0.0

Initial release of styleObject2CSS

### 1.0.1
### 1.0.2
### 1.0.3

update README.

### 1.0.4
1. Add setting of doubleQuotation  to set quote symbol preference.
新增是否使用雙引號的設定參數
2. Update icon.
更新icon

### 1.0.5
1. Add Chinese README.
新增中文說明
2. Add key quotation handle.
加入針對鍵名引號的處理
3. Add repository.
加入專案開源儲存位置

**Enjoy!**
