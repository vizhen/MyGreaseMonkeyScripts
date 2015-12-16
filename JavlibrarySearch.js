// ==UserScript==
// @name        JavlibrarySearch
// @namespace   JavlibrarySearch
// @description Add search function for Javlibrary
// @include     http://www.look4lib.com/cn/?v=*
// @version     1
// @grant       none
// ==/UserScript==
//allow pasting

function getMovieId(){
    x= document.getElementById("video_id");
    //alert(x.innerHTML);
    td = x.getElementsByTagName("td");
    //alert(td.length);
    key = td[1].innerHTML;
    //alert(key);
    return key;
}

function addSearch(key){
 //alert(key);
  var btdb = '<a href = \'http://btdb.in/q/' + key + ' \' target= \'_blank\'>' + 'Btdb' + '</a>';
  var kitty = '<a href = \'http://www.bt2mag.com/search/' + key + ' \' target= \'_blank\'>' + 'Torrent Kitty' + '</a>';
  var btsnoop = '<a href = \'http://bitsnoop.com/search/all/' + key + ' \' target= \'_blank\'>' + 'Btsnoop' + '</a>';
  var btbook = '<a href = \'http://www.bthand.com/search/' + key + ' \' target= \'_blank\'>' + 'Btbook' + '</a>';
  var addDiv = '<div id="video_download" class="item"><table><tr>'
  + '<td class="header">' + 'BT搜索:' + '</td>'
  + '<td>' + btdb + '</td>'
  + '<td>' + kitty + '</td>'
  + '<td>' + btsnoop + '</td>'
  + '<td>' + btbook + '</td>'
  + '</tr></table></div>';
    //alert(addDiv);
    video_info = document.getElementById("video_info");
    video_info.insertAdjacentHTML('afterend', addDiv);
}

addSearch(getMovieId());
