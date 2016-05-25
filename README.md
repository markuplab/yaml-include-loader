# YAML Include Loader

YAML loader for [webpack](http://webpack.github.io/). Converts YAML to JSON. 

## Installation

`npm install yaml-include-loader --save-dev`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var json = require("json!yaml!./file.yml");
// => returns file.yml as javascript object
```

``` javascript
{
  module: {
    loaders: [
      // ... other loaders
      { test: /\.yml/, loader: 'json-loader!yaml-include-loader' }
    ]
  }
}
```

## Includes

This plugin also adds an ability to include yaml files into each other.

Lets say you want to keep some data in a partial file:
 
```yaml
# _films.yaml

- &terminator
  name: Terminator 2 
  year: 1991
- name: Avatar
  year: 2009
``` 
 
You can include a whole `.yaml` file into another one like this: 
```yaml
# director.yaml

name: James Cameron 
films: !include ./_films 
```
  
You can also include a particular anchor from the specified file:  

```yaml
# me.yaml

name: John Smith
favouriteFilm: !include ./_films *terminator
```

## License
Some source code taken from [yaml-loader](https://github.com/okonet/yaml-loader) and [yamlify](https://github.com/dmapper/yamlify).

MIT (http://www.opensource.org/licenses/mit-license.php)
