import React, { Component } from 'react';
import h2c from "html2canvas";
import { cl } from '../helpers';
import { strict } from 'assert';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      imgUrl: "http://i.imgflip.com/1bij.jpg",
      allImgMemes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dajSad = this.dajSad.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
    this.createImg = this.createImg.bind(this);
  }

  // TODO: rješit ovo
  createImg(canvas, replacement) {
    const body = document.querySelector("body");
    body.replaceChild(canvas, replacement);
  }

  dajSad(width, height) {
    h2c(document.body, {
      useCORS: true,
      width: width,
      height: (height+15),
      y: 30,
      backgroundColor: "#000000"
    }).then((canvas) => {
      document.body.appendChild(canvas);
    });
  }

  getDimensions() {
    const memeImg = document.querySelector("[data-meme-img]");
    const memeImgDimensions = memeImg.getBoundingClientRect();
    const { width, height } = memeImgDimensions;
    this.dajSad(width, height);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(resp => resp.json())
      .then(data => this.setState({ allImgMemes: data.data.memes }))
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const randNumber = Math.floor(Math.random() * this.state.allImgMemes.length);
    this.setState({ imgUrl: this.state.allImgMemes[randNumber].url });
  }

  render() {
    return (
      <div className="meme-generator">
        <form action="#aimo" onSubmit={this.handleSubmit}>
          <input
            name="topText"
            type="text"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
            data-html2canvas-ignore="true"
          />
          <br />
          <input
            name="bottomText"
            type="text"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            data-html2canvas-ignore="true"
          />
          <br />
          <button type="submit" data-html2canvas-ignore="true">daj novi meme</button>
        </form>
        <button onClick={this.getDimensions} data-html2canvas-ignore="true">izbrij sliku</button>
        <div className="meme-container">
          <img src={this.state.imgUrl} alt="meme" data-meme-img/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
