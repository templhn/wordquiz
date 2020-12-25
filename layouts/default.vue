<template>
  <div class="layout">
    <Nuxt />
  </div>
</template>

<style>
@charset "utf-8";

/* http://meyerweb.com/eric/tools/css/reset/ */
/* v1.0 | 20080212 */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

/* remember to define focus styles! */
:focus {
  outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
  text-decoration: none;
}
del {
  text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: sans-serif;
}

a {
  color: blue;
}

.layout {
  max-width: 400px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
}

.layout:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background: url(/wordquiz/miffy.png) no-repeat 55% 50%;
  opacity: 0.1;
}

span.small {
  font-size: 80%;
  font-weight: 400;
  opacity: 0.8;
  margin: 0 5px;
}

.container {
  padding-top: 40px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  z-index: 11;
  background: #fffe;
}
.ham-menu-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
}
.ham-menu-btn > span {
  background: #000;
  left: 15px;
  width: 20px;
  height: 2px;
  display: block;
  position: absolute;
  transition: 0.3s;
}
.ham-menu-btn > span:nth-child(1) {
  top: 12px;
}
.ham-menu-btn > span:nth-child(2) {
  top: 18px;
}
.ham-menu-btn > span:nth-child(3) {
  top: 24px;
}
.ham-menu-btn.on > span:nth-child(1) {
  top: 18px;
  transform: rotate(45deg);
}
.ham-menu-btn.on > span:nth-child(2) {
  opacity: 0;
}
.ham-menu-btn.on > span:nth-child(3) {
  top: 18px;
  transform: rotate(135deg);
}

.category_title {
  background: aliceblue;
  padding: 10px;
  border-left: 1px solid #08f;
  font-weight: 600;
  margin-bottom: 5px;
}

.ham-menu {
  background: #fffe;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 36px;
  box-sizing: border-box;
}
.ham-menu .nav {
  background: #fff;
}

.nav {
  margin: 15px auto;
}
.nav:after {
  content: "";
  display: table;
  clear: both;
  width: 100%;
  height: 0;
}
.nav-btn {
  float: left;
  border: 0;
  padding: 10px 20px;
  font-size: 15px;
  line-height: 1;
  border-radius: 2px;
  background: #227a95;
  transition: 0.3s background;
  cursor: pointer;
  text-shadow: 0px 0px 5px #555;
  color: #fff;
  margin: 5px;
}
.nav-btn:active {
  background: #227a95aa;
}

.nav-btn.theme {
  background: #ff6b49;
}
.nav-btn.theme:active {
  background: #ff6b49aa;
}

.web-btn {
  float: right;
}
.web-btn li {
  margin-bottom: 10px;
}

.toast-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: none;
}
.toast-container.show {
  display: block;
}
.toast-container .toast-box {
  padding: 30px;
  color: #fff;
  font-weight: 600;
  text-shadow: 0px 0px 5px #555;
  white-space: pre-wrap;
}
.toast-container .toast-box.ok {
  background: #1bcc50;
}
.toast-container .toast-box.ng {
  background: #cc1b1b;
}
.question {
  text-align: center;
  font-size: 70px;
  padding: 15px 0;
}
.question span {
  background: #fffc;
  box-shadow: 0 0 10px #fff;
}
.choices {
  margin: 30px auto;
}
.choices > li {
  margin-bottom: 0.6em;
  padding: 0.6em;
  background: #eef5;
  font-size: 20px;
}
.choices > li:active {
  background: #eef;
  transition: 0.3s background;
}
.choices > li:before {
}
.choices > li:nth-child(1):before {
  content: "ㄱ. ";
}
.choices > li:nth-child(2):before {
  content: "ㄴ. ";
}
.choices > li:nth-child(3):before {
  content: "ㄷ. ";
}
.choices > li:nth-child(4):before {
  content: "ㄹ. ";
}

.clear {
  width: 90%;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.clear .inner {
  background: #f0f8ffe1;
  text-align: center;
  padding: 20px 0;
}
.clear p {
  font-size: 30px;
  padding: 100px 0;
  color: #08f;
}
.clear .nav {
  display: inline-block;
}
</style>
