/*Navbar info is stored here to make it easier to update it/add mobile compatibility, inspired from Brennan's work*/
/*sorry I deleted all the old code, if you want to view it just look at the history*/

/*To add in new pages, just add an image into the navbar folder and put it in, COPYING THE FORMAT of the other selects and imgs (no background, white img, 64*64px). */
const navMobile = `
<style>
#main {
  margin-left: 100px;
  width: 95%;
}
#navbar {
  margin-right: 30px;
  margin-bottom: 30px;
}
</style>
<a href='index.html'><img src='navbar/home.png'></a>
<a href='faq.html'><img src='navbar/faq.png'></a>
<a href='coding.html'><img src='navbar/code2.png'></a>
<a href='https://discord.com/invite/Gt6eUeGbAh'><img src='navbar/discord.png'></a>
<a href='history.html'><img src='navbar/history.png'></a>

`;
const navDesktop = `
<style>
div {
  margin: auto;
}
#navbar {
  float: none;
  width: 80%;
  padding: 10px;
}
</style>
<a class="navIcon" href='index.html'><img src='navbar/home.png'> <h3>Home</h3> </a>
<a class="navIcon" href='faq.html'><img src='navbar/faq.png'> <h3>Common Qs</h3> </a>
<a class="navIcon" href='coding.html'><img src='navbar/code2.png'><h3>Coding</h3></a>
<a class="navIcon" href='https://discord.com/invite/Gt6eUeGbAh'><img src='navbar/discord.png'> <h3>Discord</h3> </a>
<a class="navIcon" href='history.html'><img src='navbar/history.png'> <h3>History</h3></a>

`;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  /*For when on mobile*/
  document.getElementById('navbar').innerHTML = navMobile;
} else {
  /*For when on desktop*/
  document.getElementById('navbar').innerHTML = navDesktop;
}
