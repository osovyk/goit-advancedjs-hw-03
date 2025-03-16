import{i as E,S as I}from"./assets/vendor-DpVPnhEv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(s){E.show({message:s,position:"topRight",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./assets/icons/close-icon.svg",closeOnEscape:!0,closeOnClick:!0,maxWidth:"432px"})}const m="49367639-b33ebacd3c1171708280ede99",b="https://pixabay.com/api/";console.log(`${m}`);const F={key:m,image_type:"photo",orientation:"horizontal",safesearch:"true"};function O(s){const r=document.getElementById("loader");r.style.display="flex";const o=new URLSearchParams({...F,q:s}),n=`${b}?${o}`;return fetch(n).then(e=>{if(!e.ok){d("Failed to fetch images");return}return e.json()}).finally(()=>{r.style.display="none"})}let c=null;function P({total:s,hits:r}){const o=document.getElementById("gallery");if(o.innerHTML="",s===0){d("Sorry, there are no images matching your search query. Please try again!");return}r.forEach(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:f,comments:p,downloads:h},y)=>{const g=[{title:"Likes",value:a},{title:"Views",value:f},{title:"Comments",value:p},{title:"Downloads",value:h}].map(({title:v,value:L})=>`
        <div class="info-block">
          <span class="info-title">${v}</span>
          <span class="info-value">${L}</span>
        </div>
      `).join(""),i=document.createElement("div");i.classList.add("gallery-item"),i.innerHTML=`
      <a href="${e}" class="gallery-link">
        <div class="image-wrapper">
          <img
            src="${n.replace("_640","_360")}"
            alt="${t}"
            class="gallery-image hidden"
          />
        </div>
      </a>
      <div class="gallery-info">
        ${g}
      </div>
    `;const u=i.querySelector(".gallery-image");u.onload=()=>{u.classList.remove("hidden")},o.appendChild(i),setTimeout(()=>{i.classList.add("fade-in")},y*100)}),c?c.refresh():c=new I(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}const l={searchForm:document.getElementById("searchForm"),searchInput:document.getElementById("searchInput")};l.searchForm.addEventListener("submit",s=>{s.preventDefault();const r=l.searchInput.value.trim();r&&O(r).then(P).catch(o=>console.error(o)).finally(()=>{l.searchInput.value="",l.searchInput.blur()})});
//# sourceMappingURL=index.js.map
