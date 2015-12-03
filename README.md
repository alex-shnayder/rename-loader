# rename-loader

A [webpack](http://webpack.github.io/) loader for renaming modules.

## Installation

`npm install --save-dev rename-loader`

## Usage

The loader changes the module's `resourcePath` property which can then be used by other loaders. It uses the same query parameters (`name`, `regExp` and `context`) and interpolation options as `file-loader`. If the `name` parameter is not specified, the loader will try to use the whole query string instead.

For example, with the following postLoader configured in your webpack.config:

```javascript
{
  test: /\.png$/,
  loader: 'file?name=images/[name].[ext]'
}
```

All `.png` images are emitted to the `images` folder with their initial filenames. If you want to rename a certain image (e.g. when creating a thumbnail), you can do this with `rename-loader`:

```javascript
require('rename?[path][name]-100x100.[ext]!./logo.png')
```

It will emit the image to `images/logo-100x100.png`.
