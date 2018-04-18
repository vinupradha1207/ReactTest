const path = require("path");

const config = {

entry: "./main.js",

output: {

  path: path.resolve(__dirname, "dist"),

  filename: "index.js"

},
devServer: {
	port: 3000
},

module: {

  loaders: [

  {
      test:/\.(js|jsx)$/,

      loader: "babel-loader",

      query: {

          presets: ["react", "es2015"]

      }

  }

]
}

};

 

module.exports = config;