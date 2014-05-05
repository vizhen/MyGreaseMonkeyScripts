// ==UserScript==
// @name        JavlibrarySearch
// @namespace   JavlibrarySearch
// @description Add search function for Javlibrary
// @include     http://www.javlibrary.com/cn/?v=*
// @version     1
// @grant       none
// ==/UserScript==

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
    var btdigg = "<a href = 'http://btdigg.org/search?info_hash=&q=" + key + " ' target= '_blank'>" +"Btdigg"  + "</a>";
    var kitty ="<a href = 'http://www.torrentkitty.com/search/" + key + " ' target= '_blank'>" +"Torrent Kitty"  + "</a>";
    var btsnoop = "<a href = 'http://bitsnoop.com/search/all/" + key + " ' target= '_blank'>" +"Btsnoop"  + "</a>";
    var btspread = "<a href = 'http://www.btspread.com/search/all/" + key + " ' target= '_blank'>" +"Btspread"  + "</a>";
    var addDiv = '<div id="video_download" class="item"><table><tr>'
                 + "<td class ='header'>" + "BT搜索:" + "</td>"
                 + "<td>"  + btdigg + "</td>"
                 + "<td>" + kitty + "</td>" 
                 + "<td>" + btsnoop + "</td>"
                 + "<td>" + btspread + "</td>"
                 + "</tr></table></div>";
    //alert(addDiv);
    video_info = document.getElementById("video_info");
    video_info.insertAdjacentHTML('afterend', addDiv);
}

addSearch(getMovieId());
