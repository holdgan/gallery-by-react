require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

//获取图片相关的数据
let imageDatas = require('json!../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = ((imageDatasArr) => {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

var ImgFigure=React.createClass({
  render(){
    return(
      <figure>
      <img src={this.props.data.imageURL}
      alt={this.props.data.title}
      />
      <figcaption>
      <h2>{this.props.data.title}</h2>
      </figcaption>
      </figure>
      );
  }
});

class AppComponent extends React.Component {
  render() {

      var controllerUnits=[],
      ImgFigures=[];

      imageDatas.forEach(function(value){
        ImgFigures.push(<ImgFigure data={value}/>);
      });

    return (
      <section className="stage">
      <section className="img-sec">
      {ImgFigures}
      </section>
      <nav className="controller-nav">
      {controllerUnits}
      </nav>
      </section>
      );
      }
    }

    AppComponent.defaultProps = {
    };

    export default AppComponent;
