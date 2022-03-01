import{j as d,r as u,a as p,R as f,b as h}from"./vendor.f3430415.js";const g=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}};g();const s=d.exports.jsx,r=d.exports.jsxs,m=d.exports.Fragment,y=o=>{const{updateCity:e,fetchWeather:i}=o;return r(m,{children:[s("img",{className:"city-img",src:"/icons/perfect-day.svg",alt:""}),s("p",{className:"city-title",children:"Find Weather of your city"}),r("form",{className:"city-search",onSubmit:i,children:[s("input",{type:"text",onChange:c=>e(c.target.value),placeholder:"City"}),s("button",{type:"submit",children:"Search"})]})]})};const v={sunset:"/icons/temp.svg",sunrise:"/icons/temp.svg",humidity:"/icons/humidity.svg",wind:"/icons/wind.svg",pressure:"/icons/pressure.svg"},N={"01d":"/icons/sunny.svg","01n":"/icons/night.svg","02d":"/icons/day.svg","02n":"/icons/cloudy-night.svg","03d":"/icons/cloudy.svg","03n":"/icons/cloudy.svg","04d":"/icons/perfect-day.svg","04n":"/icons/cloudy-night.svg","09d":"/icons/rain.svg","09n":"/icons/rain-night.svg","10d":"/icons/rain.svg","10n":"/icons/rain-night.svg","11d":"/icons/storm.svg","11n":"/icons/storm.svg"},l=o=>{const{name:e,value:i}=o;return r("div",{className:"infocomponent",children:[s("img",{src:v[e],alt:"",className:"info-icon"}),r("p",{className:"info-label",children:[i,s("span",{children:e})]})]})},x=o=>{var i,c,n,t,a;const{weather:e}=o;return r(m,{children:[r("div",{className:"weather",children:[r("div",{className:"condition",children:[s("span",{children:`${Math.floor(((i=e==null?void 0:e.main)==null?void 0:i.temp)-273)}\xB0C`}),`  |  ${e==null?void 0:e.weather[0].description}`]}),s("img",{src:N[e==null?void 0:e.weather[0].icon],alt:""})]}),s("p",{className:"location",children:`${e==null?void 0:e.name}, ${(c=e==null?void 0:e.sys)==null?void 0:c.country}`}),s("p",{className:"weather-info-label",children:"Weather Info"}),r("div",{className:"info-container",children:[s(l,{name:"sunrise",value:""}),s(l,{name:"humidity",value:(n=e==null?void 0:e.main)==null?void 0:n.humidity}),s(l,{name:"wind",value:(t=e==null?void 0:e.wind)==null?void 0:t.speed}),s(l,{name:"pressure",value:(a=e==null?void 0:e.main)==null?void 0:a.pressure})]})]})};function b(){const[o,e]=u.exports.useState(),[i,c]=u.exports.useState();return r("div",{className:"main",children:[s("p",{className:"app-label",children:"React Weather"}),o&&i?s(x,{weather:i}):s(y,{updateCity:e,fetchWeather:async t=>{t.preventDefault();const a=await p.get(`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);c(a.data)}})]})}f.render(s(h.StrictMode,{children:s(b,{})}),document.getElementById("root"));