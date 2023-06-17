/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "his", "her", "their"];
  let adj = ["great", "blue", "neon", "holy", "huge"];
  let noun = ["temple", "car", "school", "house", "train"];
  let dots = [".com", ".io", ".us", ".net", ".gov"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < dots.length; d++) {
          let output = `${pronoun[a]}${adj[b]}${noun[c]}${dots[d]}`;
          console.log(output);
        }
      }
    }
  }
};
