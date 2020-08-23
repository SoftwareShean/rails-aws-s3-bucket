import React, { Component } from "react";
import "./InputForm.css";
import {
  processFile,
  dropHandler,
  dragOverHandler,
  dragLeave,
  dragEnter,
} from "./FileHandler";
import { ReactComponent as DropPreveiw } from "./DropPreview.svg";

export default class InputForm extends Component {
  render() {
    const event = event.target.FileDrop;
    // const conFile = document.querySelector(".con-input-file");
    const conFile = this.FileDrop.con-input-file;
    // const img1 = document.querySelector(".img-1");
      const img1 = this.FileDrop.img1;  
    // const img2 = document.querySelector(".img-2");
      const img2 = this.FileDrop.img2
    // const img3 = document.querySelector(".img-3");
      const img3 = this.FileDrop.img3
    // const imgFile = document.querySelector(".bg");
    const imgFile = this.FileDrop.bg;
    //   const input = document.querySelector(".input");
    const input = this.FileDrop.input
    let one = false;
    return (
      <form autocomplete='off' action=''>
        <div class='inputs'>
          <div class='nameInput'>
            <input
              id='name'
              type='text'
              name='name'
              placeholder="What's your name?"
            />
            <label for='name'>Your name:</label>
          </div>
        </div>
        <div class='con-input-file'>
          <button onclick='handleClickRemove()' class='remove-image'>
            <i class='bx bx-x'></i>
          </button>
          <div class='con-bg'>
            <img class='bg' src='' alt='' />
          </div>
          <div class='img-1'>
            <DropPreveiw />
          </div>
          <div class='img-2'>
            <div class='square-1'></div>
          </div>
          <div class='img-3'>
            <div class='square-2'></div>
          </div>
          <div class='con-text'>Drop your profile image here, or Browse</div>
          <input
            class='input'
            onchange='processFile(event)'
            ondrop='dropHandler(event)'
            ondragover='dragOverHandler(event)'
            ondragleave='dragLeave(event)'
            ondragenter='dragEnter(event)'
            ondragenter='dragEnter(event)'
            type='file'
            name='picture'
            id='file'
            ref={(ref) => (this.FileDrop = ref)}
          />
        </div>
        <input type='submit' id='button' value='Sign Up' />
      </form>
    );
  }
}
