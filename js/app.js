$(document).ready(function(){function e(e){d=e.touches[0].clientX,r=e.touches[0].clientY}function i(e){if(d&&r){var i=e.touches[0].clientX,t=e.touches[0].clientY,s=d-i,n=r-t;Math.abs(s)>Math.abs(n)&&(s>0?($(".mechanics-list li.active").next().length>0?$(".mechanics-list li.active").next().trigger("click"):$($(".mechanics-list li")[0]).trigger("click"),console.log("left",$(".mechanics-list li.active").next().length)):($(".mechanics-list li.active").prev().length>0?$(".mechanics-list li.active").prev().trigger("click"):$($(".mechanics-list li")[a]).trigger("click"),console.log("right",$(".mechanics-list li.active").next().length))),d=null,r=null}}function t(e,i){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET",e,!0),t.onreadystatechange=function(){4===t.readyState&&"200"==t.status&&i(t.responseText)},t.send(null)}$(window).scroll(function(){return $(".nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".unique-slider").slick({dots:!1,arrows:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]});var s=$(".nft-card"),n=s.html();$(".nft-cardList").append(n),s.slick({dots:!0,arrows:!1,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".team-slider").append($(".team-desktop").html()),$(".team-slider .team-item").removeClass("large"),$(".team-slider").slick({dots:!0,arrows:!1,adaptiveHeight:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".projects-slider").append($(".projects-desktop").html()),$(".projects-slider").slick({dots:!0,arrows:!1,adaptiveHeight:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]});var l=0,o=300;if($(window).scroll(function(){var e=$(".unique");e.each(function(e,i){const t=$(i).offset().top-($(i).height()-$(i).height()/2),s=t+$(i).height()+$(window).height()/3,n=$(window).scrollTop(),a=$(i).offset().top-70;a+$(i).height()+$(window).height()/3;if(n>t&&n<s&&$(i).hasClass("unique")&&!l)return $(".unique-card").each(function(){var e=$(this);setTimeout(function(){e.addClass("active")},o),o+=200}),console.log(l),l=1,console.log(l),!1})}),$(".mechanics").data("autoplay")&&$(window).width()){var a=$(".mechanics-list li").length-1,c=0;setInterval(function(){c>a&&(c=0),$(".mechanics-list li, .mechanics-img img").removeClass("active"),$($(".mechanics-list li")[c]).addClass("active"),$(".mechanics-img-"+c).addClass("active"),c++},3500)}$(".mechanics-list li").click(function(){$(".mechanics-list li, .mechanics-img img").removeClass("active"),$(this).addClass("active"),c=$(this).data("number"),$(".mechanics-img-"+c).addClass("active")}),document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",i,!1);var d=null,r=null;$(".mechanics-img").click(function(){$(".mechanics-list li.active").next().length>0?$(".mechanics-list li.active").next().trigger("click"):$($(".mechanics-list li")[0]).trigger("click")});var h,p,m;h=$(window).width()>1024?10:5,$(window).resize(function(){$(window).width()>1200&&$(".unique-slider")[0].slick.refresh(),h=$(window).width()>1024?10:5}),t("roadmap.json",function(e){for(var i=JSON.parse(e),t=0;t<i.length;t++)i[t].complete?$("#completed").append('<li><h6><svg viewBox="0 0 32 33" width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.73 8.969a1.6 1.6 0 0 1 0 2.262l-12.8 12.8a1.6 1.6 0 0 1-2.262 0l-6.4-6.4A1.6 1.6 0 0 1 7.53 15.37l5.269 5.269 11.669-11.67a1.6 1.6 0 0 1 2.262 0Z" fill="#fff"/></svg> <span>'+i[t].title+"</span></h6><p> "+i[t].info+"</p></li>"):$("#planned").append("<li><h6><span>"+i[t].title+"</span></h6><p> "+i[t].info+"</p></li>");$("#upcoming .title").text($("#planned li:first-child").find("h6").text()),$("#upcoming .info").text($("#planned li:first-child").find("p").text()),$("#planned li:first-child").remove(),p=$("#completed li").length,m=$("#planned li").length,h<p&&($("#completed li").each(function(e){e>h-1&&$(this).addClass("d-none")}),$('.show-more[href="#completed"]').css({display:"inline-block"})),h<m&&($("#planned li").each(function(e){e>h-1&&$(this).addClass("d-none")}),$('.show-more[href="#planned"]').css({display:"inline-block"})),console.log("countCompleted",p),console.log("countPlanned",m),console.log("countRoadmapShow",h)}),$(".show-more").click(function(e){e.preventDefault(),$(this).hide(),$($(this).attr("href")+" li").removeClass("d-none")}),$(".mob-menu a, .close-menu").click(function(){$("#menu").addClass("hide-menu")}),$("#nav-btn").click(function(){$("#menu").removeClass("hide-menu")}),$(".scroll").click(function(e){e.preventDefault();var i=$(this).attr("href"),t=$(i).offset().top-80;$("body,html").animate({scrollTop:t},1500)}),window.addEventListener("load",function(){var e=document.getElementsByClassName("subscription-form");Array.prototype.filter.call(e,function(e){e.addEventListener("submit",function(i){var t=$(this);if(e.checkValidity()===!1)i.preventDefault(),i.stopPropagation(),t.find("input").addClass("error"),t.append('<span class="error-info">Please enter a valid email</span>');else{i.preventDefault();var s=t.serialize();t.find(".submit").attr("disabled","disabled"),$.ajax({type:"POST",url:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSeaqfsUCUwKXpwKw5Nx5TxOuI7HgYHYBsW7AtPH532asbTx2g/formResponse",dataType:"json",data:s,success:function(e){}}),setTimeout(function(){t.parents(".modal").find(".close-modal").trigger("click"),t[0].reset()},500),t.find("input").removeClass("error"),t.find(".error-info").remove(),t.find(".submit").removeAttr("disabled"),e.classList.add("was-validated")}},!1)})},!1)});