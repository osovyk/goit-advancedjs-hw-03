import{i as L,a as E,S as I}from"./assets/vendor-DMjJPMAs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(s){L.show({message:s,position:"topRight",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./assets/icons/close-icon.svg",closeOnEscape:!0,closeOnClick:!0,maxWidth:"432px"})}const b="49367639-b33ebacd3c1171708280ede99",F="https://pixabay.com/api/",O={key:b,image_type:"photo",orientation:"horizontal",safesearch:"true"};function x(s){const r=document.getElementById("loader");return r.style.display="flex",E.get(F,{params:{...O,q:s}}).then(a=>a.data).catch(()=>u("Failed to fetch images")).finally(()=>{r.style.display="none"})}let c=null;function A({total:s,hits:r}){const a=document.getElementById("gallery");if(a.innerHTML="",s===0){u("Sorry, there are no images matching your search query. Please try again!");return}r.forEach(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:m,comments:f,downloads:p},h)=>{const y=[{title:"Likes",value:o},{title:"Views",value:m},{title:"Comments",value:f},{title:"Downloads",value:p}].map(({title:g,value:v})=>`
        <div class="info-block">
          <span class="info-title">${g}</span>
          <span class="info-value">${v}</span>
        </div>
      `).join(""),i=document.createElement("li");i.classList.add("gallery-item"),i.innerHTML=`
      <a href="${e}" class="gallery-link">
        <div class="image-wrapper">
          <img
            src="${n}"
            alt="${t}"
            class="gallery-image hidden"
          />
        </div>
      </a>
      <div class="gallery-info">
        ${y}
      </div>
    `;const d=i.querySelector(".gallery-image");d.onload=()=>{d.classList.remove("hidden")},a.appendChild(i),setTimeout(()=>{i.classList.add("fade-in")},h*100)}),c?c.refresh():c=new I(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}const l={searchForm:document.getElementById("searchForm"),searchInput:document.getElementById("searchInput")};l.searchForm.addEventListener("submit",s=>{s.preventDefault();const r=l.searchInput.value.trim();r&&x(r).then(A).catch(a=>console.error(a)).finally(()=>{l.searchInput.value="",l.searchInput.blur()})});
//# sourceMappingURL=index.js.map
