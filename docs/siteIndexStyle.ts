const style = `
html[data-prefers-color="dark"] .__dumi-default-layout-hero, html[data-prefers-color="light"] .__dumi-default-layout-hero {
  padding: 140px 0;
  background: #21144d no-repeat bottom/cover url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f3c200' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e26003' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23ecb500' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23d86200' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23e4a800' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ce6400' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23dc9b00' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23c46500' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23d38f00' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23ba6600' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ca8300' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23b16600' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");;
}
html[data-prefers-color="dark"] .__dumi-default-layout-hero h1, html[data-prefers-color="light"] .__dumi-default-layout-hero h1 {
  color: #f3f3f3;
  text-shadow: 0 2px 8px rgba(0,0,0,.3);
  font-size: 120px;
  margin-bottom: 50px;
}
html[data-prefers-color="dark"] .__dumi-default-layout-hero .markdown, html[data-prefers-color="light"] .__dumi-default-layout-hero .markdown {
  margin-top: 40px;
  color: #eee;
  text-shadow: 0 2px 5px rgba(0,0,0,.3);
}
html[data-prefers-color="dark"] .__dumi-default-layout-hero {
  background-color: hsla(0,0%,100%,.08);
}
.__dumi-default-layout-content {
  max-width: 100% !important;
}
html[data-perfers-color="dark"] .__dumi-default-previewer{
  border-color: #504f4f !important;
  background-color: #2b2b2b !important;
}
html[data-perfers-color="dark"] .__dumi-default-previewer .__dumi-default-previewer-actions {
  border-top: none !important;
}
.__dumi-default-menu-inner::-webkit-scrollbar {
  width: 4px;    
  /*height: 4px;*/
}
.__dumi-default-menu-inner::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.__dumi-default-menu-inner::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
.__dumi-default-menu-list li {
  font-size: 14px;
}
`;

export default style;
