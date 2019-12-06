<template>
  <v-app>
    <div id="app">
      <Header />
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.v-toolbar {
  z-index: 6 !important;
}

.overall-flex {
  display: flex;
  justify-content: center;
}

.homepage-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid red;
  width: 80rem;
}

.title-flex {
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-size: 50px !important;
  border: 2px solid yellow;
  background: white;
}

.info-flex {
  display:flex;
  font-family: Montserrat;
  justify-content: center;
  border: 2px solid orange;
}

.about-flex {
  display: flex;
  font-family: Montserrat;
  justify-content: center;
  border: 2px solid green;
}

.parallax {
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
}

.parallax__group {
  position: relative;
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  transform-style: preserve-3d;
}

.parallax__layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.parallax__layer--fore {
  transform: translateZ(90px) scale(.7);
  z-index: 1;
}

.parallax__layer--base {
  transform: translateZ(0);
  z-index: 4;
}

.parallax__layer--back {
  transform: translateZ(-300px) scale(2);
  z-index: 3;
}

.parallax__layer--deep {
  transform: translateZ(-600px) scale(3);
  z-index: 2;
}

.parallax__group {
  transition: transform 0.5s;
}

body, html {
  overflow: hidden;
}

body {
  font: 100% / 1.5 Arial Bold;
  background-color: black;
}

* {
  margin:0;
  padding:0;
}

table {
  font-family: Arial Bold, sans-serif;
  border-collapse: collapse;
  color: white;
  width: 100%;
}

h3 {
	font-size: 48px;
	color: green;
}

ol {
	text-align:center;
	list-style-position:inside;

}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
  color: maroon;
}

.parallax {
  font-size: 200%;
}

  /* centre the content in the parallax layers */
.title-pls {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color:white;
  font-size: 56px !important;
  font-family: Montserrat;
}


#colorList {
  color:maroon;
}

#ol2 {
  text-align:center; 
  list-style-position:inside;
  font-size: 36px;
}

#group1 {
  z-index: 5; /* slide over group 2 */
}
#group1 .parallax__layer--base {
  background: rgb(0,0,0);
}

#group2 {
  z-index: 3; /* slide under groups 1 and 3 */
}
#group2 .parallax__layer--back {
  background-image: url(\assets\matrix_code-wallpaper-3200x2400.jpg);
  left: -5px;
}

#group3 {
  z-index: 4; /* slide over group 2 and 4 */
}
#group3 .parallax__layer--base {
  background: rgb(0,0,0);
}

#group4 {
  z-index: 2; /* slide under group 3 and 5 */
}
#group4 .parallax__layer--deep {
  background-image: url(\assets\matrix_code-wallpaper-3200x2400.jpg);
  left: -5%;
}

#group5 {
  z-index: 3; /* slide over group 4 and 6 */
}
#group5 .parallax__layer--base {
  background-color: black;
}

#group6 {
  z-index: 2; /* slide under group 5 and 7 */
}
#group6 .parallax__layer--back {
  background-image: url(\assets\matrix_code-wallpaper-3200x2400.jpg);
  left: -5%;
}

#group7 {
  z-index: 3; /* slide over group 7 */
}
#group7 .parallax__layer--base {
  background: rgb(0,0,0);
}

#caption {
  position:absolute;
  left:5%;
  top:20%;
  width:90%;
  height:30%;
  padding-top:5%;
  padding-bottom:10%;
  padding-right: 2%;
  padding-left: 2%;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: Montserrat;
  background-color:rgba(0,0,0,0.85);
}

#caption2 {
  position:absolute;
  left:5%;
  top:20%;
  width:90%;
  height:40%;
  padding-top:5%;
  padding-bottom:10%;
  padding-right: 2%;
  padding-left: 2%;
  text-align: center;
  color: white;
  fint-family: Montserrat;
  font-size: 20px;
  background-color:rgba(0,0,0,0.85);
}

#caption3 {
  position:absolute;
  left:2.85%;
  top:20%;
  width:90%;
  height:30%;
  padding-top:5%;
  padding-bottom:10%;
  padding-right: 2%;
  padding-left: 2%;
  text-align: center;
  background-color:rgba(0,0,0,0.85);
  color: white;
  font-size: 36px;
}

.page_tag {
  position: absolute;
  z-index:100;
  bottom: 1vh;
  top: auto;
  font-size:60%;
  text-align:center;
  width: 100%;
  color: white;
}


</style>
