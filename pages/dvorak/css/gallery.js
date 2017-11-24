*{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;}

.media{text-align:center}

.thumbnail{
  width:400px;
  height:133px;
  border:1px solid #FF0;
  display:inline-block;
  overflow:hidden;
  margin:5px;
  cursor:zoom-in;
}
.thumbnail:hover img{opacity:0.7}
.thumbnail img{
  width:100%;
  height:auto;
}
.thumb-viewer{
  display:none;
}
.view-open{overflow:hidden;}
.view-open .thumb-viewer{
  display:block;
  background:rgba(0,0,0,0.7);
  position:fixed;
  left:0; right:0; top:0; bottom:0;  
}
.viewer-body{
  margin:auto;
  width: 800px;
  position:absolute;
  height: 266px;
  left:0; right:0; top:0; bottom:0;
  text-align:center;
}
.viewer-body img{
  width:800px;
  max-width:auto;
  height:266px;
}
.prev, .next{
  display:inline-block;
  width:35px;
  height:35px;
  border-top:5px solid #bbb;
  border-left:5px solid #bbb;
  transform:rotate(-45deg);
  -moz-transform:rotate(-45deg);
  -webkit-transform:rotate(-45deg);
  cursor:pointer;
  position: absolute;
  top:0;
  bottom:0;
  left:15px;
  margin:auto 15px;
  opacity:0.6;
  z-index:5;
}
.next{
  border:none;
  border-bottom:5px solid #bbb;
  border-right:5px solid #bbb;
  left:auto;
  right:15px;
}
.close{
  color:#fff;
  position: absolute;
  right:15px;
  top:5px;
  font-size:32px;
  font-family: Helvetica;
  font-weight:lighter;
  opacity:0.6;
  cursor:pointer;
}
.prev:hover, .next:hover, .close:hover{opacity:1;}
