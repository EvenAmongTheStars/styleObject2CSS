# styleObject2CSS README

This is the README for extension "styleObject2CSS"

## Features

styleObject2CSS can transform the style object in jsx file to CSS format.

example:

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

## Extension Settings

This extension contributes the following settings:

* command

`styleObject2CSS.transform`: Transform the text selection to CSS format in editor.


## Known Issues

N/A

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

2. Update icon.

### 1.0.5
1. Add Chinese README.

2. Add key quotation handle.

3. Add repository.

### 1.0.6
1. Fix Chinese README.

### 1.0.7
1. Fix useless quote.

### 1.0.8
1. Update dependency version (security issue)

**Enjoy!**
