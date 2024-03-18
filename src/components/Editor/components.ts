const components = [
  {
    id: "input-with-label",
    data: {
      label: "Input",
      content: `<div id="e97ea35c8"><label for="b20352fe4" id="e3b4a2bec">Label Text</label><input id="b20352fe4" placeholder="Enter text here"></div><style>#e97ea35c8{display:flex;flex-direction:column;gap:.4rem;width:max-content}#e3b4a2bec{font-size:15px}#b20352fe4{padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;width:200px;outline:0}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 10h1v4H4z"></path></svg>`,
      category: {
        label: "Atoms",
        open: false,
      },
    },
  },
  {
    id: "textarea-with-label",
    data: {
      label: "Textarea",
      content: `<div id="df244d0ef"><label for="d371f8acf" id="f420434ed">Label Text</label><textarea id="d371f8acf" cols="50" rows="7" placeholder="Enter text here"></textarea></div><style>#df244d0ef{display:flex;flex-direction:column;gap:.4rem;width:max-content}#f420434ed{font-size:15px}#d371f8acf{padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;outline:0;resize:vertical}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"></path><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"></path></svg>`,
      category: "Atoms",
    },
  },
  {
    id: "select-with-label",
    data: {
      label: "Select",
      content: `<div id="aabc6fa75"><label for="aebd1956f" id="db8ac6d78">Label Text</label><select id="aebd1956f"><option id="ij01" value="opt1">Option 1</option><option id="izlb" value="opt2">Option 2</option></select></div><style>#aabc6fa75{display:flex;flex-direction:column;gap:.4rem;width:max-content}#db8ac6d78{font-size:15px}#aebd1956f{padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;width:200px;outline:0}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"></path></svg>`,
      category: "Atoms",
    },
  },
  {
    id: "checkbox-with-label",
    data: {
      label: "Checkbox",
      content: `<div id="c09940fee"><input id="f1b6e9f80" type="checkbox"><label for="f1b6e9f80">Checkbox</label></div><style>#c09940fee{display:flex;gap:.4rem;width:max-content}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" style="padding: 1rem;" viewBox="0 0 24 24"><path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"></path></svg>`,
      category: "Atoms",
    },
  },
  {
    id: "radio-with-label",
    data: {
      label: "Radio",
      content: `<div id="c09940fee"><input id="f1b6e9f80" type="radio"><label for="f1b6e9f80">Radio</label></div><style>#c09940fee{display:flex;gap:.4rem;width:max-content}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="padding: 1rem;"><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>`,
      category: "Atoms",
    },
  },
  {
    id: "section-title",
    data: {
      label: "Section Title",
      content: `<div id="ip6kj"><h1 id="ino8g">Heading<br></h1><p id="ipxwv">paragraph</p></div><style>#ip6kj{padding:0;margin:0}#ino8g{width:auto;font-size:48px;line-height:60px;color:#000;font-weight:600;text-align:left;margin:0 0 1rem 0}#ipxwv{width:auto;font-size:20px;color:#000;font-weight:400;margin:0 0 1rem 0;line-height:30px}</style>`,
      media: `<i class="fa-solid fa-t" style="font-size:2.5rem"></i>`,
      category: {
        label: "Components",
        open: false,
      },
    },
  },
  {
    id: "icon-button",
    data: {
      label: "Icon Button",
      content: { type: "icon-button" },
      media: `<i class="fa-solid fa-star" style="font-size:2.5rem"></i>`,
      category: "Components",
    },
  },
  {
    id: "card",
    data: {
      label: "Card",
      content: `<div id="c0e3b1d9"><img id="feabe150" src="https://via.placeholder.com/300x200" alt="Sample Image"><div id="e2271c61"><div id="df8a83b6">Beautiful Card</div><p id="dd436418">This is a simple, beautiful card component with a heading, title, description, and an image at the top. You can customize it to fit your needs.</p></div></div><style>#c0e3b1d9{background-color:#f5f5f5;border:1px solid #e1e1e1;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);max-width:300px;margin:20px;display:flex;flex-direction:column;align-items:center}#feabe150{max-width:100%;border-radius:8px 8px 0 0}#e2271c61{padding:20px}#df8a83b6{font-size:24px;color:#333}#dd436418{font-size:16px;color:#555;margin:10px 0}</style>`,
      media: `<i class="fa-solid fa-square " style="font-size:2.5rem"></i>`,
      category: "Components",
    },
  },
  {
    id: "button-2",
    data: {
      label: "Call to Action",
      content: {
        type: "default",
        content: `<button id="afae2970"><span>Button</span></button><style>#afae2970{display:inline-block;padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;text-align:center;text-decoration:none;transition:background-color .3s ease}#afae2970:hover{background-color:#0056b3}</style>`,
      },
      media: `<svg style="padding: 0 1rem;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 17h-17A2.502 2.502 0 0 1 1 14.5v-4A2.502 2.502 0 0 1 3.5 8h17a2.502 2.502 0 0 1 2.5 2.5v4a2.502 2.502 0 0 1-2.5 2.5zm-17-8A1.502 1.502 0 0 0 2 10.5v4A1.502 1.502 0 0 0 3.5 16h17a1.502 1.502 0 0 0 1.5-1.5v-4A1.502 1.502 0 0 0 20.5 9zM17 12H7v1h10z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "navbar",
    data: {
      label: "Navbar",
      content: `<header id="e4dec149c"><div id="f26fe5ebe"><a href="#" id="cc7ad9251"><img id="feabe150" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(30).svg?alt=media&token=f0203a9a-962e-4c2f-a1cf-db654d6c0f44" alt="Sample Image"></a><input type="checkbox" id="hamburger"><label for="hamburger" id="f5ef1b432"><span></span></label><nav><ul id="aab69235c"><li><a href="#">Home</a></li><li tabindex="0"><button data-gjs-type="default"><span>Services</span><span id="a36945343"></span></button><ul id="ab02b4920"><li><a href="#">Web design</a></li><li><a href="#">Web dev</a></li><li><a href="#">Web</a></li></ul></li><li><a href="#">About</a></li></ul></nav></div></header><style>#e4dec149c{position:relative;background:#1d1f24;color:#fff} #feabe150{width:50px}#f26fe5ebe{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;padding:0 20px;height:75px}#cc7ad9251{text-decoration:none;font-size:25px;color:inherit;margin-right:20px;display:flex;justify-content:center;align-items:center}#e4dec149c input[type=checkbox]{opacity:0;position:absolute;right:0}#f5ef1b432{padding:23px 20px;position:absolute;cursor:pointer;right:0;top:50%;transform:translateY(-50%)}#f5ef1b432 span{width:20px;height:3px;display:block;background:#fff;position:relative}#f5ef1b432 span::after,#f5ef1b432 span::before{content:"";position:absolute;display:block;background:inherit;width:inherit;height:inherit}#f5ef1b432 span::before{top:8px}#f5ef1b432 span::after{bottom:8px}#e4dec149c input[type=checkbox]:focus+#f5ef1b432{box-shadow:0 0 20px rgba(0,0,0,.45)}ul#aab69235c{list-style:none}ul#aab69235c li{font-size:18px}ul#aab69235c li a{display:block;text-decoration:none}ul#aab69235c li a,ul#aab69235c li button{padding:.7rem 1rem;text-align:left;color:inherit}#aab69235c{position:absolute;top:3.2rem;left:0;right:0;background:#2f3238;visibility:hidden;padding:.5rem 2rem}#ab02b4920{padding:2px 1.5rem;height:0;overflow:hidden}#e4dec149c input[type=checkbox]:checked~nav #aab69235c{visibility:visible;transform:translateY(0)}#aab69235c li:focus-within #ab02b4920{height:auto}#aab69235c li:focus-within #a36945343{transform:rotate(180deg)}#aab69235c li{position:relative;left:100%}#e4dec149c input[type=checkbox]:checked~nav>ul#aab69235c li{left:0;list-style:none}#e4dec149c button{font-size:inherit;border:none;background-color:transparent;cursor:pointer;width:100%;display:flex;align-items:center;gap:1em}#a36945343{border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #fff}ul#aab69235c li:hover{background:#1d1f2480}@media (min-width:640px){#f26fe5ebe{display:flex}#aab69235c{position:static;visibility:visible;background:0 0;display:flex;transform:initial}#aab69235c li{font-size:14px;left:auto}#f5ef1b432,input[type=checkbox]{display:none}ul#aab69235c li:hover{background:#1d1f2480}ul#aab69235c li a:hover,ul#aab69235c li button:hover{background-color:#2f3238}#ab02b4920{position:absolute;top:48px;right:0;left:auto;z-index:99;min-width:10rem;padding:0;background-color:#1d1f24;border-radius:0 0 .5rem .5rem}}</style>`,
      media: `<svg style="padding:0 1rem" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"/></svg>`,
      category: {
        label: "Sections",
        open: false,
      },
    },
  },
  {
    id: "info-card",
    data: {
      label: "Info Card",
      content: `<div id="iaegs"><div id="ietcg"><h1 id="i8doa">Welcome to Pegasus Direct!</h1><section id="ihkt3"><p id="ifhl6">We are a commercial gaming agent in accordance with Section 19 Paragraph 2 GlüStV 2021 and offer our customers gaming offers at the highest level. Security, fairness, responsibility and fun with the popular products 6aus49, Eurojackpot and Co., that is our mission. We are committed to the state treaty on the lottery system in Germany, so we ensure the high quality of our service and also your trust in us.<br id="i0y8m"></p></section><button type="button" id="io2l2">Learn More</button></div></div><style>#iaegs{margin-right:0;margin-bottom:0;margin-left:0;background-color:#fff;justify-content:space-between;align-items:center;padding:40px 100px;box-shadow:rgba(0,0,0,.1) 0 15px 20px 0;display:flex!important}#ietcg{box-sizing:border-box;display:inline-block;width:85%;height:auto}#i8doa{box-sizing:border-box;font-size:43px;font-weight:700;line-height:51px;margin-top:0;margin-right:0;margin-bottom:20px;margin-left:0}#ifhl6{box-sizing:border-box;font-size:18px;line-height:35px;color:#212121;margin-top:0;margin-right:0;margin-bottom:20px;margin-left:0}#io2l2{box-sizing:border-box;font-size:20px;font-weight:700;line-height:32px;background-color:#f29200;color:#fff;padding:4px 25px;border:none}@media (max-width: 575px){ #iaegs{ padding:2rem 2rem 2rem 2rem; } #i8doa{ font-size:28px; line-height:30px; } #ifhl6{ font-size:16px; line-height:23px; } #ietcg{ width:100%; } }</style>`,
      media: `<svg style="padding:0 1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 13.5H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm8-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "list",
    data: {
      label: "List",
      content: `<div id="i3qnx"><h1 id="iyudp3">VIA PEGASUS DIRECT</h1><div id="ifhzv"><img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(50).svg?alt=media&token=ce2dc6a4-2c93-4609-af70-b0b5c3f90856" height="15"><p id="iyxji">We are an official partner of Lotto - with us you play the original</p></div><div id="ilzkb"><img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(50).svg?alt=media&token=ce2dc6a4-2c93-4609-af70-b0b5c3f90856" height="15"><p id="i8dkf">We offer exclusive and legal gaming offers in the regulated German gaming market</p></div><div id="iopep"><img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(50).svg?alt=media&token=ce2dc6a4-2c93-4609-af70-b0b5c3f90856" height="15"><p id="izfdj">The founders and owners of Pegasus have many decades of experience in national and international gaming and betting markets</p></div><div id="infby"><img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(50).svg?alt=media&token=ce2dc6a4-2c93-4609-af70-b0b5c3f90856" height="15"><p id="ilomt">We understand marketing and IT and create synergies that are always based on fairness, security and unique product experiences</p></div></div><style>#i3qnx{padding:2rem 2rem 2rem 2rem}#iyudp3{box-sizing:border-box;font-size:22px;font-weight:700;line-height:26px;margin-top:0;margin-right:0;margin-bottom:30px;margin-left:0}#ifhzv{padding:10px;width:100%;display:flex;align-items:center;gap:25px}#ilzkb{padding:10px;width:100%;display:flex;align-items:center;gap:25px}#iopep{padding:10px;width:100%;display:flex;align-items:center;gap:25px}#infby{padding:10px;width:100%;display:flex;align-items:center;gap:25px}#iyxji{font-size:18px;flex-shrink:0;width:auto;margin:0;max-width:90%}#i8dkf{font-size:18px;flex-shrink:0;width:auto;margin:0;max-width:90%}#izfdj{font-size:18px;flex-shrink:0;width:auto;margin:0;max-width:90%}#ilomt{font-size:18px;flex-shrink:0;width:auto;margin:0;max-width:90%}@media (max-width:575px){#i3qnx{padding:2rem 1rem 2rem 1rem}#ifhzv{gap:15px;align-items:start}#infby{gap:15px;align-items:start}#ilzkb{gap:15px;align-items:start}#iopep{gap:15px;align-items:start}}</style>`,
      media: `<svg style="padding:0 1rem;fill:transparent" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z"/><path d="m5 10 3 3 6-6M5 24l3 3 6-6M5 38l3 3 6-6m7-11h22M21 38h22M21 10h22" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "image-grid",
    data: {
      label: "Image Grid",
      content: `<div id="igwz1"><img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Flottoplan-logo-300x118.png?alt=media&amp;token=9929a583-6811-4c0e-9c35-141df04d75a6" width="300"> <img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Flotto-logo-sw-300x102.png?alt=media&amp;token=36e8576f-2da9-4f20-b737-b9ebc4666112" width="300"> <img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Feurojackpot-300x117.png?alt=media&amp;token=4dbd4349-81c8-431f-a293-b72c7f2d150f" width="300"> <img src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Flotto6aus49-300x92.png?alt=media&amp;token=3b1d37c8-6296-4818-a4c0-6d594bf0053f" width="300"></div><style>#igwz1{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}</style>`,
      media: `<svg style="padding:0 1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 15V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3ZM4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.36l-1.08-1.09a2.56 2.56 0 0 0-1.81-.75 2.58 2.58 0 0 0-1.81.75l-.91.91-.81-.81a2.93 2.93 0 0 0-4.11 0L4 9.85Zm.12 10.45A.94.94 0 0 1 4 15v-2.33l2.88-2.88a.91.91 0 0 1 1.29 0l.83.81Zm8.6-5.76a.52.52 0 0 1 .39-.17.52.52 0 0 1 .39.17l2.5 2.49V15a1 1 0 0 1-1 1H6.4ZM21 6a1 1 0 0 0-1 1v10a3 3 0 0 1-3 3H7a1 1 0 0 0 0 2h10a5 5 0 0 0 5-5V7a1 1 0 0 0-1-1Z"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "about-section",
    data: {
      label: "About",
      content: `<div id="ifh1bh"><div id="iz3i3o"><div id="idam3l"><div id="i85msy"><img id="irs81b" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(32).svg?alt=media&amp;token=75358f54-8ac8-45b6-8ce9-53ac55b4590d"></div></div><h1 id="iy8g7g">Make it yours with official Bootstrap Themes</h1><p id="iyi49a">Take Bootstrap to the next level with premium themes from the<a id="iipjbl" href="#">official Bootstrap Themes marketplace</a>. Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.</p><a id="ilw2k7" href="#"><div id="ipns5o">Browse Bootstrap Themes</div></a></div><div id="irsrfn"><div id="isslgg"><img id="iki53j" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fbootstrap-themes.png?alt=media&amp;token=d4bfa201-5880-44a2-9255-f2e80d3b54b5"></div></div></div><style>#irs81b{width:40px;height:40px}#i85msy{display:flex;justify-content:center;align-items:center;flex-direction:row;margin:0 0 1.5rem 0;width:73px;height:72px;border-radius:16px 16px 16px 16px;background-color:#29253e}#idam3l{display:flex;justify-content:flex-start;align-items:center;flex-direction:row}#iy8g7g{width:auto;font-size:48px;line-height:60px;font-weight:600;text-align:left;margin:0 0 1rem 0}#iyi49a{width:auto;font-size:20px;font-weight:400;margin:0 0 1rem 0;line-height:30px}#ipns5o{padding:0;text-decoration:underline;font-size:20px;font-weight:600;line-height:30px;border:0 solid #000}#ilw2k7{display:inline-block;padding:5px;min-height:50px;min-width:50px;text-decoration:none;margin:0 0 1.5rem 0}#iz3i3o{height:auto;padding:0 24px 0 24px;width:50%}#iki53j{width:612px;height:auto}#isslgg{display:flex;justify-content:flex-start;align-items:center;flex-direction:row}#irsrfn{height:auto;padding:0 24px 0 24px;width:50%}#ifh1bh{max-width:1320px;margin:0 auto 0 auto;padding:1rem 0 1rem 0;display:flex;align-items:center}#iipjbl{color:#8bb9fe;padding:0 0 0 5px}@media (max-width:992px){#iy8g7g{font-size:40px;line-height:50px}#irsrfn{width:auto;padding:0 3rem 2rem 3rem;max-width:100%}#iz3i3o{width:auto;padding:0 3rem 0 3rem;order:1;max-width:100%}#ifh1bh{flex-direction:column}#iki53j{width:100%;order:0}}@media (max-width:575px){#iz3i3o{padding:0 1rem 0 1rem}#iy8g7g{font-size:25px;line-height:35px}#iyi49a{line-height:25px;font-size:18px;margin:0}#ipns5o{font-size:18px;line-height:25px}}@media (max-width:575px){#i85msy{height:60px;width:60px}#irs81b{width:35px;height:35px}}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" xml:space="preserve" style="transform:rotate(180deg);padding:0 1rem"><path d="M28.988 24.583H13.176c-2.218 0-2.593 1-2.593 3.169v21c0 1.104.488 1.831 1.593 1.831h16.813c1.104 0 1.595.273 1.595-.831v-22c-.001-1.105.437-3.169-1.596-3.169zm-.405 24h-16v-22h16v22zm4.834-22h12a1 1 0 1 0 0-2h-12a1 1 0 1 0 0 2zm25-2h-9a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm-25 7h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2zm17-2h-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-17 7h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zm13-1a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1zm12-6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-25 15h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2zm25-2h-13a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zm-10 5h-15a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2zm10 0h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "footer-section",
    data: {
      label: "Footer",
      content: `<div id="ieq5g4"><div id="isk6gm"><section id="i36kqn"><a id="ihtmed" href="#"><img id="i7hsai" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(33).svg?alt=media&amp;token=fdac18b9-d941-4807-91a8-988ea08af7ab"><div id="i135dy">Bootstrap</div></a></section><h1 id="iin9aa">Designed and built with all the love in the world<br>by the<a id="iwdgj8" href="#">Bootstrap team</a>with the help of<a id="iy730g" href="#">our<br id="i33vqq">contributors.</a><br><br><span id="ivwp3j">Code licensed<a id="isumc2" href="#">MIT</a>, docs<a id="ifds0k" href="#">CC BY 3.0</a>.</span><br><span id="i7u3wf">Currently v5.3.2.</span></h1></div><div id="ilefgx"><table id="i0e0yi"><tbody><tr id="iljpd"><td id="iiyyqe"><div><h1 id="i0xe6f">Links</h1><p id="it981x"><a id="i2hlml" href="#">Home</a><br><a id="ixr7vj" href="#">Docs</a><br><a id="ic9o9x" href="#">Examples</a><br><a id="i9lzpa" href="#">Icons</a><br><a id="i5q1z5" href="">Themes</a><br><a id="irghg2" href="">Blog</a><br><a id="ip611a" href="">Swag Store</a></p></div></td><td id="irvekh"><section id="ira31g"><h1 id="io1uni">Guides</h1><p id="i3pj6i"><a id="iytjba" href="#">Getting started</a><br><a id="i92l1d" href="">Starter template</a><br><a id="itl77k" href="">Webpack</a><br><a id="i2ga5v" href="">Parcel</a><br><a id="iptqpz" href="">Vite</a></p></section></td><td id="ipdrvs"><section id="irm9j6"><h1 id="i8bivb">Projects</h1><p id="iowri1"><a id="ic5u1m" href="#">Bootstrap 5</a><br><a id="itbypi" href="">Bootstrap 4</a><br><a id="ir8zzx" href="">Icons</a><br><a id="iuc7jl" href="">Icons</a><br><a id="igh4xg" href="">RFS</a><br><a id="ia6w1g" href="">Examples repo</a><br></p></section></td><td id="i13zry"><section id="i900s1"><h1 id="ixqjez">Community</h1><p id="iqyy5o"><a id="i7eoki" href="#">Issues</a><br><a id="i59q0c" href="">Discussions</a><br><a id="ikf498" href="">Corporate sponsors</a><br><a id="is5juw" href="">Open Collective</a><br><a id="il3tlj" href="">Stack Overflow</a><br></p></section></td></tr></tbody></table></div></div><style>#i7hsai{color:#000;width:40px;height:auto;margin:0 .5rem 0 0}#i36kqn{display:flex;justify-content:flex-start;align-items:center;flex-direction:row;padding:0;margin:0}#iin9aa{width:auto;font-size:.875rem;margin:0 0 1rem 0;color:#979ca0;font-weight:300;line-height:20px}#isk6gm{height:auto;padding:0 24px 0 24px;width:35%}#ilefgx{height:auto;padding:0 24px 0 24px;width:65%}#ieq5g4{max-width:1320px;margin:0 auto 0 auto;padding:3rem 1rem 3rem 1rem;display:flex;align-items:center;background:#212121}#i135dy{padding:0;color:#fff;font-size:20px}#ihtmed{display:flex;padding:0;min-height:50px;min-width:50px;align-items:center;text-decoration:none}#iwdgj8{color:#fff;text-decoration:none;font-size:.875rem;line-height:20px;padding:0 5px 0 5px}#iy730g{color:#fff;text-decoration:none;font-size:.875rem;line-height:20px;padding:0 5px 0 5px}#i7u3wf{margin:1rem 0 0 0}#ivwp3j{margin:0 0 1rem 0}#isumc2{color:#fff;text-decoration:none;padding:0 0 0 5px}#ifds0k{color:#fff;text-decoration:none;padding:0 0 0 5px}#i0e0yi{height:150px;margin:0 auto 10px auto;padding:5px 5px 5px 5px;width:100%}#iiyyqe{padding:0;margin:0;vertical-align:top;width:25%}#i0xe6f{font-size:20px;color:#a0a4a9;font-weight:300;margin:0 0 .7rem 0;padding:0}#i2hlml{color:#cbced1;text-decoration:none}#ixr7vj{color:#cbced1;text-decoration:none}#ic9o9x{color:#cbced1;text-decoration:none}#i9lzpa{color:#cbced1;text-decoration:none}#i5q1z5{color:#cbced1;text-decoration:none}#irghg2{color:#cbced1;text-decoration:none}#ip611a{text-decoration:none;color:#cbced1}#it981x{color:#cbced1;font-size:16px;line-height:29px;margin:0}#ixqjez{font-size:20px;color:#a0a4a9;font-weight:300;margin:0 0 .7rem 0;padding:0}#i7eoki{color:#cbced1;text-decoration:none}#i59q0c{color:#cbced1;text-decoration:none}#ikf498{color:#cbced1;text-decoration:none}#is5juw{color:#cbced1;text-decoration:none}#il3tlj{color:#cbced1;text-decoration:none}#iqyy5o{color:#cbced1;font-size:16px;line-height:29px;margin:0}#i13zry{padding:0;margin:0;vertical-align:top;width:25%}#i8bivb{font-size:20px;color:#a0a4a9;font-weight:300;margin:0 0 .7rem 0;padding:0}#ic5u1m{color:#cbced1;text-decoration:none}#itbypi{color:#cbced1;text-decoration:none}#ir8zzx{color:#cbced1;text-decoration:none}#iuc7jl{color:#cbced1;text-decoration:none}#igh4xg{color:#cbced1;text-decoration:none}#ia6w1g{color:#cbced1;text-decoration:none}#iowri1{color:#cbced1;font-size:16px;line-height:29px;margin:0}#ipdrvs{padding:0;margin:0;vertical-align:top;width:25%}#io1uni{font-size:20px;color:#a0a4a9;font-weight:300;margin:0 0 .7rem 0;padding:0}#iytjba{color:#cbced1;text-decoration:none}#i92l1d{color:#cbced1;text-decoration:none}#itl77k{color:#cbced1;text-decoration:none}#i2ga5v{color:#cbced1;text-decoration:none}#iptqpz{color:#cbced1;text-decoration:none}#i3pj6i{color:#cbced1;font-size:16px;line-height:29px;margin:0}#irvekh{padding:0;margin:0;vertical-align:top;width:25%}@media (max-width:992px){#ieq5g4{flex-direction:column}#ilefgx{width:100%}#isk6gm{width:100%;padding:0 24px 2rem 24px;text-align:center}#i36kqn{flex-direction:column}}@media (max-width:575px){#ieq5g4{padding:3rem 0 1rem 0}#isk6gm{padding:0 0 1rem 0}#ilefgx{padding:0}#iiyyqe{width:100%;margin:0 0 1.5rem 0;text-align:center}#i13zry{width:100%;text-align:center}#ipdrvs{width:100%;margin:0 0 1.5rem 0;text-align:center}#irvekh{width:100%;margin:0 0 1.5rem 0;text-align:center}#i0e0yi{height:auto;margin:0 auto 46px auto}}@media (max-width:575px){#iljpd{display:flex;flex-direction:column}}</style>`,
      media: `<svg style="padding:0 1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 18h-4v-1h4zm-9 0h3v-1H8zm12-4h-7v1h7zm-9 0H4v1h7zM23 3v18H1V3zm-1 9H2v8h20zm0-8H2v7h20z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "hero-section",
    data: {
      label: "Hero",
      content: `<table id="ifkj"><tbody id="ij9r6"><tr id="ihox"><td id="ictq"><div id="idd5"><div id="itie"><section id="iqhsr"><h1 id="iqjv9">Build fast, responsive sites with Bootstrap</h1><h1 id="iaw7w">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</h1><section id="ipa4ck"><a id="iyrrq" href="#"><div id="i0hz5">Read the docs</div></a></section></section></div></div></td></tr></tbody></table><style>#ifkj{margin:0 auto 1rem auto;width:100%;background-color:#212529;padding:2rem 0 3rem 0;display:flex;justify-content:center;align-items:center;height:80vh;background-image:url(https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2F2023-11-02_23-43.png?alt=media&token=b1137097-690f-4741-a9eb-69287e54758a);background-repeat:no-repeat;background-position:left top;background-attachment:scroll;background-size:cover}#ictq{padding:0;margin:0;vertical-align:top}#idd5{max-width:1320px;margin:0 auto 0 auto;height:auto}#itie{display:flex;width:100%;flex-direction:column;justify-content:center;height:auto;max-width:66%;margin:0 auto 0 auto}#iqjv9{width:auto;font-size:64px;line-height:64px;color:#fff;font-weight:600;text-align:center;margin:0 0 1rem 0}#iqhsr{justify-content:center;align-items:center;flex-direction:column;display:flex;padding:0;margin:0}#iaw7w{width:auto;font-size:1.5rem;color:#adb0b5;font-weight:400;text-align:center;margin:0 0 1.5rem 0;line-height:36px}#iyrrq{display:inline-block;min-height:50px;min-width:50px;text-decoration:none;margin:0}#i0hz5{padding:15px 32px 15px 32px;text-decoration:none;font-size:20px;font-weight:600;line-height:30px;color:#fff;border-radius:8px 8px 8px 8px;background-color:#712cf9}#ipa4ck{justify-content:space-between;align-items:center;margin:0 0 1rem 0;padding:0;height:auto;display:flex}@media (max-width:992px){#iqjv9{font-size:40px;line-height:50px}#iaw7w{font-size:1.3rem;line-height:25px}#i0hz5{font-size:20px;text-wrap:nowrap;height:62px;padding:15px 32px 15px 32px}}@media (max-width:575px){#idd5{width:100%;padding:10px 10px 10px 10px}#ipa4ck{flex-direction:column}#iqjv9{font-size:30px;line-height:35px;width:100%}#iqhsr{width:100%}#itie{max-width:100%}#i0hz5{height:auto}}@media (max-width:575px){#i0hz5{padding:10px 20px 10px 20px;font-size:16px;line-height:25px}}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" style="padding:0 1rem" viewBox="0 0 64 64" xml:space="preserve"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M6 25h52M6 33h52M6 41h52M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "gallery-section",
    data: {
      label: "Gallery",
      content: `<div id="e1869aae6"><div id="b3cdfde0d"><img src="https://assets.codepen.io/12005/windmill.jpg" alt="A windmill" width="100%"></div><div id="ac5d6170b"><img src="https://assets.codepen.io/12005/suspension-bridge.jpg" alt="The Clifton Suspension Bridge" width="100%"></div><div id="c522a484c"><img src="https://assets.codepen.io/12005/sunset.jpg" alt="Sunset and boats" width="100%"></div><div id="e1d9f5532"><img src="https://assets.codepen.io/12005/snowy.jpg" alt="a river in the snow" width="100%"></div><div id="c2f84e19d"><img src="https://assets.codepen.io/12005/bristol-balloons1.jpg" alt="a single checked balloon" width="100%"></div><div id="f87183182"><img src="https://assets.codepen.io/12005/dog-balloon.jpg" alt="a hot air balloon shaped like a dog" width="100%"></div><div id="a185046c8"><img src="https://assets.codepen.io/12005/abq-balloons.jpg" alt="View from a hot air balloon of other balloons" width="100%"></div></div><style>#e1869aae6{column-count:4;column-gap:0;padding:1rem}#b3cdfde0d{padding:10px}#ac5d6170b{padding:10px}#c522a484c{padding:10px}#e1d9f5532{padding:10px}#c2f84e19d{padding:10px}#f87183182{padding:10px}#a185046c8{padding:10px}@media (max-width:992px){#e1869aae6{column-count:3}}@media (max-width:575px){#e1869aae6{column-count:2}#b3cdfde0d{padding:5px}#ac5d6170b{padding:5px}#c522a484c{padding:5px}#e1d9f5532{padding:5px}#c2f84e19d{padding:5px}#f87183182{padding:5px}#a185046c8{padding:5px}}</style>`,
      media: `<svg viewBox="0 0 24 24" style="padding:0 1rem" xmlns="http://www.w3.org/2000/svg"><path d="M8 22H2V2h6zm-5-1h4V3H3zm19-10H10V2h12zm-11-1h10V3H11zm4 12h-5v-9h5zm-4-1h3v-7h-3zm11 1h-5v-9h5zm-4-1h3v-7h-3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "3x-card",
    data: {
      label: "3x Card",
      content: `<div id="a1b9efd7c"><div id="dc1140b1f"><img id="c45a06484" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2FAdobeStock_12208893-scaled-q2ft2k3gn8i375csvy6em6dkizuest8xdpxusghgko.jpeg?alt=media&amp;token=8cce2920-a662-41f0-9519-01cc13cfd4e5" width="100%"><div id="f40a2963c">Lottery players often look for patterns and strategies to increase their chances of winning. But is there really a secret key to the jackpot? Discover the complex answer to this question in our blog.</div><a id="df53dc719" href="#"><div id="ddba99091">Read more</div></a></div><div id="izxgf"><img id="ice4h" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2FAdobeStock_12208893-scaled-q2ft2k3gn8i375csvy6em6dkizuest8xdpxusghgko.jpeg?alt=media&amp;token=8cce2920-a662-41f0-9519-01cc13cfd4e5" width="100%"><div id="iryfj">Lottery players often look for patterns and strategies to increase their chances of winning. But is there really a secret key to the jackpot? Discover the complex answer to this question in our blog.</div><a id="ixylf" href="#"><div id="iy5ls">Read more</div></a></div><div id="i8cfh"><img id="igg3d" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2FAdobeStock_12208893-scaled-q2ft2k3gn8i375csvy6em6dkizuest8xdpxusghgko.jpeg?alt=media&amp;token=8cce2920-a662-41f0-9519-01cc13cfd4e5" width="100%"><div id="ij8oj">Lottery players often look for patterns and strategies to increase their chances of winning. But is there really a secret key to the jackpot? Discover the complex answer to this question in our blog.</div><a id="ixklj" href="#"><div id="ibkiv">Read more</div></a></div></div><style>#a1b9efd7c{display:flex;gap:1rem;justify-content:center;width:100%;flex-wrap:wrap;max-width:1240px;margin:0 auto}#ddba99091{padding:10px;font-size:15px;line-height:15px;color:#fff;background:#ff6a00;border-radius:5px;text-decoration:none}#df53dc719{display:inline-block;min-height:50px;min-width:50px;padding:0;text-decoration:none}#dc1140b1f{padding:20px;display:block;width:300px;max-width:315px;height:auto;margin-bottom:1rem}#c45a06484{box-sizing:border-box;color:#000;max-width:300px;margin-bottom:15px;width:100%}#f40a2963c{box-sizing:border-box;font-size:17px;line-height:28px;margin:0 0 20px 0;max-width:100%}#igg3d{box-sizing:border-box;color:#000;max-width:300px;margin-bottom:15px;width:100%}#ij8oj{box-sizing:border-box;font-size:17px;line-height:28px;margin:0 0 20px 0;max-width:100%}#ibkiv{padding:10px;font-size:15px;line-height:15px;color:#fff;background:#ff6a00;border-radius:5px;text-decoration:none}#ixklj{display:inline-block;min-height:50px;min-width:50px;padding:0;text-decoration:none}#i8cfh{padding:20px;display:block;width:300px;max-width:315px;height:auto;margin-bottom:1rem}#ice4h{box-sizing:border-box;color:#000;max-width:300px;margin-bottom:15px;width:100%}#iryfj{box-sizing:border-box;font-size:17px;line-height:28px;margin:0 0 20px 0;max-width:100%}#iy5ls{padding:10px;font-size:15px;line-height:15px;color:#fff;background:#ff6a00;border-radius:5px;text-decoration:none}#ixylf{display:inline-block;min-height:50px;min-width:50px;padding:0;text-decoration:none}#izxgf{padding:20px;display:block;width:300px;max-width:315px;height:auto;margin-bottom:1rem}</style>`,
      media: `<svg viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg);padding:0 1rem"><path d="M15 8v14H9V8Zm2 0v14h3a2 2 0 0 0 2-2V8ZM7 8H2v12a2 2 0 0 0 2 2h3Z" style="fill:currentColor"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "container",
    data: {
      label: "Container",
      content: `<div id="b92c2300e"></div><style>#b92c2300e{max-width:1320px;padding:1.5rem .75rem;margin:0 auto}</style>`,
      media: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M32 30H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM4 8v20h28V8Z" class="clr-i-outline clr-i-outline-path-1"/><path d="M9 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8Z" class="clr-i-outline clr-i-outline-path-2"/><path d="M14.92 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8Z" class="clr-i-outline clr-i-outline-path-3"/><path d="M21 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8Z" class="clr-i-outline clr-i-outline-path-4"/><path d="M27 25.3a.8.8 0 0 1-.8-.8v-13a.8.8 0 0 1 1.6 0v13a.8.8 0 0 1-.8.8Z" class="clr-i-outline clr-i-outline-path-5"/><path fill="none" d="M0 0h36v36H0z"/></svg>`,
      category: {
        label: "Layouts",
        open: false,
      },
    },
  },
  {
    id: "share-buttons",
    data: {
      label: "Share Buttons",
      content: {
        type: "share-buttons",
      },
      media: `<svg viewBox="0 0 36 36" style="padding: 0 1.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M27.53 24a5 5 0 0 0-3.6 1.55l-12.19-6.1a4.47 4.47 0 0 0 0-2.8l12.21-6.21a5.12 5.12 0 1 0-1.07-1.7l-12.09 6.15a5 5 0 1 0 0 6.33l12.06 6.07a4.93 4.93 0 0 0-.31 1.71 5 5 0 1 0 5-5Z"/><path fill="none" d="M0 0h36v36H0z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "table-of-contents",
    data: {
      label: "Table of Contents",
      content: `<div id="Bb8sUW5hp9"><p id="AVFsT3jQfm">Contents</p><ul id="B3Gs9uLrpd"><li><a href="#" id="vt8EYHTk6G">First Point Header</a></li><li><a href="#" id="KCbwnH6e2f">Second Point Header</a></li><li><a href="#" id="jtEsTC7wgq">Third Point Header</a></li></ul></div><style>#vt8EYHTk6G{text-decoration:none;color:#3f51b5}#KCbwnH6e2f{text-decoration:none;color:#3f51b5}#jtEsTC7wgq{text-decoration:none;color:#3f51b5}#Bb8sUW5hp9{background:#f9f9f9 none repeat scroll 0 0;border:1px solid #ccc;width:max-content;margin-bottom:1em;padding:20px;border:1px solid #ccc}#B3Gs9uLrpd{padding:0 0 0 20px;list-style:decimal;display:flex;flex-direction:column;gap:3px}#AVFsT3jQfm{font-weight:700;text-align:left;margin:0}</style>`,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform:rotate(180deg);padding: 0 1rem;"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "icon",
    data: {
      label: "Icon",
      content: {
        type: "icon",
      },
      media: `<svg viewBox="0 0 24 24" style="padding:0 1rem" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" d="M12 4 9.22 9.27 3 10.11l4.5 4.1L6.44 20 12 17.27 17.56 20l-1.06-5.79 4.5-4.1-6.22-.84L12 4z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "rating",
    data: {
      label: "Rating",
      content: {
        type: "rating",
      },
      media: `<svg viewBox="0 0 52 52" style="padding: 0 1.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="m27.413 3.101 4.6 15c.2.6.8.9 1.4.9h15c1.5 0 2.1 2 .9 2.9l-12.2 9c-.5.4-.7 1.1-.5 1.7l5.8 15.4c.4 1.4-1.1 2.6-2.3 1.7l-13.1-9.8c-.5-.4-1.2-.4-1.8 0l-13.2 9.8c-1.2.9-2.8-.3-2.3-1.7l5.6-15.4c.2-.6 0-1.3-.5-1.7l-12.2-9c-1.2-.9-.5-2.9.9-2.9h15c.7 0 1.2-.2 1.4-.9l4.7-15.1c.4-1.4 2.4-1.3 2.8.1Zm-1.4 9.701C26 14.17 26 33.542 26 34.495c.187.153 2.933 2.194 8.24 6.125.7.525 1.574-.175 1.34-.992l-3.27-8.608c-.35-.77 0-1.271.43-1.535l6.866-4.789c.7-.525.35-1.691-.525-1.691h-8.06c-.35 0-1.268-.117-1.517-1.016l-2.67-8.545a.89.89 0 0 0-.82-.642Z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "pricing-table",
    data: {
      label: "Pricing Table",
      content: `<div id="KQub7gWsvG"><div id="c6eXJ3hdNy"><div id="g2AuFHxcpT"><img id="Dp7Tx8qAaV" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(51).svg?alt=media&token=e6e22551-7db8-4078-b785-39ecdf83b6b4"><div id="f8g35PZbhm"><span id="zZgD4bxp7F">$</span>29</div><h3 id="fJeTduNM2s">Freelance</h3></div><ul id="DzL5aQs7Zk"><li id="C8Q3wrDb2F">5 GB of space</li><li id="xd2WUJGZ9a">Support at $25/hour</li><li id="pXGxWBH38v">Limited cloud access</li></ul><button id="X4dxbYq25W">Choose plan</button></div><div id="ij73u"><div id="ipx0z"><img id="i77fp" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(51).svg?alt=media&token=e6e22551-7db8-4078-b785-39ecdf83b6b4"><div id="ihznz" contenteditable="false"><span id="i2vy3">$</span>99</div><h3 id="i8ikk" contenteditable="false">agency</h3></div><ul id="iwcvc"><li id="ic7pz">30 GB of space</li><li id="ixoli" contenteditable="false">Support at $10/hour</li><li id="irlbf" contenteditable="false">Support for 24 * 7</li><li id="ic2dr">Limited cloud access</li><li id="igl1g" contenteditable="false">Unlimited cloud access</li></ul><button id="i8u6a">Choose plan</button></div><div id="ivpbk"><div id="i4g3j"><img id="iwmp4" src="https://firebasestorage.googleapis.com/v0/b/data-controller-7f9c5.appspot.com/o/assets%2Fsvgviewer-output%20(51).svg?alt=media&token=e6e22551-7db8-4078-b785-39ecdf83b6b4"><div id="ib6nq" contenteditable="false"><span id="iluod">$</span>49</div><h3 id="ir4hq" contenteditable="false">pro</h3></div><ul id="i54r7"><li id="i6niy">15 GB of space</li><li id="i5cyk">Support at $15/hour</li><li id="int6r">Support for 10 * 7</li><li id="ieycx">Limited cloud access</li></ul><button id="i5cyh">Choose plan</button></div></div><style>#KQub7gWsvG{display:flex;flex-wrap:wrap;justify-content:center;width:100%;margin:0 auto 3em}#c6eXJ3hdNy{position:relative;display:flex;flex-direction:column;align-items:stretch;text-align:center;flex:0 1 330px;font-family:'Open Sans',sans-serif;cursor:default;color:#84697c;background:#fff;box-shadow:0 0 10px rgba(46,59,125,.23);border-radius:20px 20px 10px 10px;margin:1em}#g2AuFHxcpT{border-radius:10px 10px 0 0;background-color:#4c4665fc;padding:4em 0 9em;position:relative}#Dp7Tx8qAaV{position:absolute;bottom:0;left:0;width:100%;height:160px}#fJeTduNM2s{font-size:.75em;margin:0;text-transform:uppercase;letter-spacing:5px;color:#fff;margin-bottom:1rem}#f8g35PZbhm{font-size:5em;font-weight:700;padding:0;color:#fff;margin:0 0 .25em 0;line-height:.75}#zZgD4bxp7F{font-size:.15em;vertical-align:top}#DzL5aQs7Zk{margin:0;padding:.25em 0 2.5em;list-style:none;text-align:center}#C8Q3wrDb2F{padding:.6rem 0}#xd2WUJGZ9a{padding:.6rem 0}#pXGxWBH38v{padding:.6rem 0}#X4dxbYq25W{border:none;background:#4d4766;font-weight:700;margin:auto 3em 2em 3em;padding:1em 2em;color:#fff;border-radius:30px;cursor:pointer}#i77fp{position:absolute;bottom:0;left:0;width:100%;height:160px}#i2vy3{font-size:.15em;vertical-align:top}#ihznz{font-size:5em;font-weight:700;padding:0;color:#fff;margin:0 0 .25em 0;line-height:.75}#i8ikk{font-size:.75em;margin:0;text-transform:uppercase;letter-spacing:5px;color:#fff;margin-bottom:1rem}#ipx0z{border-radius:10px 10px 0 0;background-color:#4c4665fc;padding:4em 0 9em;position:relative}#ic7pz{padding:.6rem 0}#ixoli{padding:.6rem 0}#ic2dr{padding:.6rem 0}#iwcvc{margin:0;padding:.25em 0 2.5em;list-style:none;text-align:center}#i8u6a{border:none;background:#4d4766;font-weight:700;margin:auto 3em 2em 3em;padding:1em 2em;color:#fff;border-radius:30px;cursor:pointer}#ij73u{position:relative;display:flex;flex-direction:column;align-items:stretch;text-align:center;flex:0 1 330px;font-family:'Open Sans',sans-serif;cursor:default;color:#84697c;background:#fff;box-shadow:0 0 10px rgba(46,59,125,.23);border-radius:20px 20px 10px 10px;margin:1em}#iwmp4{position:absolute;bottom:0;left:0;width:100%;height:160px}#iluod{font-size:.15em;vertical-align:top}#ib6nq{font-size:5em;font-weight:700;padding:0;color:#fff;margin:0 0 .25em 0;line-height:.75}#ir4hq{font-size:.75em;margin:0;text-transform:uppercase;letter-spacing:5px;color:#fff;margin-bottom:1rem}#i4g3j{border-radius:10px 10px 0 0;background-color:#4c4665fc;padding:4em 0 9em;position:relative}#i6niy{padding:.6rem 0}#ieycx{padding:.6rem 0}#i54r7{margin:0;padding:.25em 0 2.5em;list-style:none;text-align:center}#i5cyh{border:none;background:#4d4766;font-weight:700;margin:auto 3em 2em 3em;padding:1em 2em;color:#fff;border-radius:30px;cursor:pointer}#ivpbk{position:relative;display:flex;flex-direction:column;align-items:stretch;text-align:center;flex:0 1 330px;font-family:'Open Sans',sans-serif;cursor:default;color:#84697c;background:#fff;box-shadow:0 0 10px rgba(46,59,125,.23);border-radius:20px 20px 10px 10px;margin:1em}#irlbf{padding:.6rem 0}#int6r{padding:.6rem 0}#i5cyk{padding:.6rem 0}#igl1g{padding:.6rem 0}</style>`,
      media: `<svg style="padding:0 1.5rem" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M26.205 26.293a.999.999 0 0 0 0 1.414l6 6a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-6-6a.999.999 0 0 0-1.414 0Zm-2.586 4a.999.999 0 1 0-1.414 1.414l6 6a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-6-6Zm-4 4a.999.999 0 1 0-1.414 1.414l6 6a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-6-6ZM38.5 32 27.911 21.414 13.326 36l10.586 10.586L38.498 32Zm-9.88-12.707 12 12a.999.999 0 0 1 0 1.414l-16 16a.997.997 0 0 1-1.414 0l-12-12a.999.999 0 0 1 0-1.414l16-16a.999.999 0 0 1 1.414 0Zm23.268 17.282a.998.998 0 0 0-1.369.357l-11.462 19.55c-.828 1.433-2.667 1.926-4.055 1.126l-2.233-1.447a.999.999 0 1 0-1.087 1.678l2.276 1.475a4.972 4.972 0 0 0 2.492.668 4.998 4.998 0 0 0 4.335-2.494l11.46-19.545a1 1 0 0 0-.357-1.368ZM59.912 5v16c0 3.094-.984 5.399-3.293 7.707l-29.698 29.74a4.968 4.968 0 0 1-3.537 1.464 4.958 4.958 0 0 1-3.534-1.464L1.465 40.063A4.969 4.969 0 0 1 0 36.526c0-1.336.52-2.591 1.465-3.535L27.44 7.05C20.647 5.509 16.432 5.405 15.2 5.766c.52.533 2.143 1.665 6.06 3.209a1 1 0 0 1-.733 1.86C12.418 7.64 12.892 5.868 13.071 5.2c.371-1.39 2.352-1.853 6.41-1.498 3.305.289 7.571 1.104 12.012 2.293 4.441 1.19 8.541 2.617 11.547 4.02 3.695 1.723 5.176 3.112 4.803 4.503-.36 1.342-2.23 1.506-2.846 1.56a1 1 0 0 1-.174-1.992c.426-.037.71-.095.892-.147-.428-.447-1.51-1.144-3.243-1.974a3.993 3.993 0 0 0-.56 2.035c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4a1 1 0 1 1 0-2c3.31 0 6 2.69 6 6 0 3.309-2.69 6-6 6-3.309 0-6-2.691-6-6 0-1.003.264-1.98.735-2.852-2.393-1.005-5.603-2.13-9.67-3.221-.43-.115-.843-.22-1.256-.325L2.88 34.406a2.977 2.977 0 0 0-.88 2.12c0 .802.312 1.555.88 2.122l18.384 18.385c1.133 1.133 3.11 1.133 4.242 0l29.698-29.74c1.95-1.948 2.708-3.713 2.708-6.293V5c0-1.654-1.346-3-3-3h-16c-2.58 0-4.345.759-6.293 2.707a.999.999 0 1 1-1.414-1.414C33.513.983 35.818 0 38.912 0h16c2.757 0 5 2.243 5 5Z" fill-rule="evenodd"/></svg>`,
      category: "Sections",
    },
  },
  {
    id: "slider",
    data: {
      label: "Slider",
      content: {
        type: "slider",
      },
      media: `<svg style="padding:0 1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4ZM5 16.01h14M2 4v16M22 4v16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "accordion",
    data: {
      label: "Accordion",
      content: {
        type: "accordion",
      },
      media: `<svg style="padding:0 1.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 4v8h16V4H0zm15 7H1V7h14v4zM0 0h16v3H0V0zm0 13h16v3H0v-3z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "breadcrumb",
    data: {
      label: "Breadcrumb",
      content: {
        type: "breadcrumb",
      },
      media: `<svg style="padding:0 1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" xml:space="preserve"><path d="M8.4 42c-.6 0-1-.4-1-1V10.9c0-.6.4-1 1-1h8.1c.4 0 .9.2 1.2.5L29.3 25c.4.5.4 1.3 0 1.9L17.6 41.5c-.3.4-.8.6-1.3.6L8.4 42z"/><path d="M44.3 25 32.6 10.5c-.5-.6-1.4-.8-2.1-.2l-2.3 1.9c-.7.5-.8 1.5-.2 2.1L37.5 26 28 37.8c-.5.6-.4 1.6.2 2.1l2.3 1.9c.7.5 1.5.4 2.1-.2L44.3 27c.4-.8.4-1.5 0-2z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "code-snippet",
    data: {
      label: "Code Snippet",
      content: {
        type: "code-snippet",
      },
      media: `<i class="fa-solid fa-code" style="font-size:2.5rem"></i>`,
      category: "Components",
    },
  },
  {
    id: "tab",
    data: {
      label: "Tab",
      content: {
        type: "tab",
      },
      media: `<svg style="padding:0 1rem" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Zm1 5.625h-7c-.552 0-1.156-.42-1.348-.938L10.654 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.625Z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "form-cs",
    data: {
      label: "Form",
      content: {
        type: "form-cs",
      },
      media: `<svg style="padding:0 1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><path style="fill:currentColor" d="M123.888 344.956h264.24v92.008h-264.24z"/><path style="fill:#fff" d="M43.272 79.052h425.464c21.688 0 39.264 17.576 39.264 39.264v5.472c0 21.688-17.584 39.272-39.272 39.272H43.28c-21.688.008-39.272-17.576-39.28-39.264v-5.48c0-21.688 17.576-39.264 39.272-39.264-.008 0 0 0 0 0z"/><path style="fill:currentColor" d="M468.728 83.052c19.464.024 35.248 15.8 35.272 35.264v5.472c-.024 19.472-15.8 35.248-35.272 35.272H43.272C23.8 159.036 8.024 143.252 8 123.788v-5.472c.024-19.472 15.8-35.248 35.272-35.272h425.456m0-8.008H43.272C19.376 75.036 0 94.412 0 118.316v5.472c0 23.896 19.376 43.272 43.272 43.272h425.456c23.896 0 43.272-19.376 43.272-43.272v-5.472c0-23.904-19.376-43.28-43.272-43.28z"/><path style="fill:#fff" d="M43.272 200.196h425.456c21.688 0 39.272 17.584 39.272 39.272v5.472c0 21.688-17.584 39.272-39.272 39.272H43.28C21.592 284.22 4.008 266.636 4 244.948v-5.488c0-21.688 17.576-39.264 39.264-39.264h.008z"/><path style="fill:currentColor" d="M468.728 204.196c19.472.024 35.248 15.8 35.272 35.272v5.472c-.024 19.472-15.8 35.248-35.272 35.272H43.272C23.8 280.188 8.024 264.404 8 244.94v-5.472c.024-19.472 15.8-35.248 35.272-35.272h425.456m0-8H43.272C19.376 196.196 0 215.564 0 239.468v5.472c0 23.896 19.376 43.272 43.272 43.272h425.456c23.896 0 43.272-19.376 43.272-43.272v-5.472c0-23.904-19.376-43.272-43.272-43.272z"/><circle style="fill:currentColor" cx="53.408" cy="242.236" r="12.272"/><circle style="fill:currentColor" cx="97.88" cy="242.236" r="12.272"/><circle style="fill:currentColor" cx="142.352" cy="242.236" r="12.272"/><circle style="fill:currentColor" cx="186.824" cy="242.236" r="12.272"/><circle style="fill:currentColor" cx="231.296" cy="242.236" r="12.272"/><circle style="fill:currentColor" cx="275.768" cy="242.236" r="12.272"/><path style="fill:#fff" d="M181.416 402.74a15.97 15.97 0 0 0 8.08 2.272c4.6 0 7.296-2.4 7.296-5.952 0-3.256-1.864-5.128-6.576-6.928-5.688-2.024-9.208-4.968-9.208-9.888.272-5.536 4.976-9.808 10.52-9.536.256.016.512.032.76.064a15.827 15.827 0 0 1 7.712 1.712l-1.24 3.672a13.858 13.858 0 0 0-6.624-1.656c-4.76 0-6.568 2.84-6.568 5.224 0 3.256 2.128 4.864 6.936 6.728 5.896 2.28 8.896 5.128 8.896 10.248 0 5.384-4 10.04-12.208 10.04a18.03 18.03 0 0 1-8.904-2.224l1.128-3.776zm46.928-1.352c0 2.592.048 4.864.2 6.832h-4l-.256-4.088h-.104a9.426 9.426 0 0 1-8.28 4.656c-3.928 0-8.64-2.168-8.64-10.976v-14.616h4.552v13.872c0 4.8 1.448 8 5.6 8a6.582 6.582 0 0 0 6.008-4.144c.28-.744.416-1.536.416-2.328v-15.4h4.552l-.048 18.192zm7.328 6.84c.104-1.712.208-4.24.208-6.472v-30.28h4.504v15.72h.104a9.363 9.363 0 0 1 8.536-4.6c6.2.312 10.968 5.592 10.656 11.792-.016.336-.048.672-.096 1.008.84 6.52-3.768 12.488-10.288 13.328-.304.04-.608.064-.912.08a8.938 8.938 0 0 1-8.384-4.72h-.16l-.2 4.144h-3.968zm4.712-10.04c.016.56.08 1.112.2 1.656a7.027 7.027 0 0 0 6.832 5.328c4.76 0 7.608-3.88 7.608-9.6 0-5.024-2.584-9.32-7.456-9.32a7.267 7.267 0 0 0-6.936 5.6 9.096 9.096 0 0 0-.256 1.856l.008 4.48zm24.928-8.24c0-2.584-.056-4.704-.208-6.784h4l.208 4h.16a8.638 8.638 0 0 1 7.864-4.6 7.4 7.4 0 0 1 7.088 5.016h.104a10.335 10.335 0 0 1 2.8-3.256 8.533 8.533 0 0 1 5.536-1.76c3.312 0 8.224 2.168 8.224 10.864v14.752h-4.448v-14.136c0-4.8-1.76-7.712-5.44-7.712a5.91 5.91 0 0 0-5.384 4.144 7.577 7.577 0 0 0-.36 2.272v15.48H281V393.22c0-4-1.76-6.88-5.224-6.88a6.81 6.81 0 0 0-6.008 6.776v15.12h-4.448l-.008-18.288zm48.216-13.8a2.826 2.826 0 0 1-2.968 2.672 2.835 2.835 0 0 1-2.672-2.672 2.773 2.773 0 0 1 2.704-2.848h.136a2.7 2.7 0 0 1 2.8 2.6c.008.08.008.16 0 .248zm-5.072 32.088v-25.032h4.552v25.056l-4.552-.024zm17.584-32.24v7.2h6.52v3.472h-6.52v13.488c0 3.104.872 4.856 3.416 4.856a9.813 9.813 0 0 0 2.64-.312l.208 3.424c-1.288.448-2.64.656-4 .616a6.3 6.3 0 0 1-4.92-1.912 9.311 9.311 0 0 1-1.76-6.52v-13.672h-3.88v-3.44h3.856v-6l4.44-1.2z"/><path style="fill:currentColor" d="M41.56 139.084v-34.88h4.92l11.2 17.648a98.89 98.89 0 0 1 6.256 11.336l.064-.056c-.416-4.656-.512-8.896-.512-14.336v-14.592h4.24v34.88H63.2L52.12 121.38a111.246 111.246 0 0 1-6.52-11.64l-.16.048c.256 4.4.368 8.592.368 14.4v14.904l-4.248-.008zm47.752 0-.36-3.16H88.8a9.326 9.326 0 0 1-7.664 3.728 7.139 7.139 0 0 1-7.64-6.6 5.01 5.01 0 0 1-.016-.6c0-6.056 5.384-9.368 15.064-9.312v-.52a5.17 5.17 0 0 0-4.464-5.792 4.885 4.885 0 0 0-1.232-.008c-2.304.008-4.56.656-6.52 1.864l-1.032-3a15.502 15.502 0 0 1 8.224-2.224c7.664 0 9.52 5.224 9.52 10.24v9.376a35.031 35.031 0 0 0 .416 6l-4.144.008zm-.672-12.8c-4.968-.112-10.608.8-10.608 5.64a4 4 0 0 0 3.624 4.344c.224.016.448.024.672 0a6.247 6.247 0 0 0 6.056-4.184c.16-.472.248-.96.256-1.456v-4.344zm11.736-5.48c0-2.584-.056-4.712-.208-6.776h4l.208 4h.16a8.638 8.638 0 0 1 7.864-4.6 7.4 7.4 0 0 1 7.088 5.016h.104a10.335 10.335 0 0 1 2.8-3.256 8.533 8.533 0 0 1 5.536-1.76c3.312 0 8.224 2.168 8.224 10.864v14.752h-4.448v-14.136c0-4.8-1.76-7.712-5.44-7.712a5.91 5.91 0 0 0-5.384 4.144 7.577 7.577 0 0 0-.36 2.272v15.48h-4.456v-15.016c0-4-1.76-6.88-5.224-6.88a6.22 6.22 0 0 0-5.64 4.552 6.185 6.185 0 0 0-.368 2.224v15.112h-4.448l-.008-18.28zm45.672 6.584c-.4 4.4 2.848 8.288 7.248 8.688.448.04.896.04 1.344.008a16.513 16.513 0 0 0 6.936-1.296l.8 3.264a20.355 20.355 0 0 1-8.328 1.544c-6.408.408-11.936-4.464-12.344-10.88a10.57 10.57 0 0 1 .024-1.744c-.752-6.672 4.048-12.68 10.72-13.432.344-.04.688-.064 1.032-.072 5.864.112 10.528 4.952 10.416 10.808a10.32 10.32 0 0 1-.064.992 17.198 17.198 0 0 1-.16 2.128l-17.624-.008zm13.352-3.264c.512-3.544-1.952-6.824-5.496-7.336a5.608 5.608 0 0 0-.816-.064 7.544 7.544 0 0 0-6.984 7.4H159.4zm-35.512 279.04v-58.232h58.232z"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "list-items",
    data: {
      label: "List Items",
      content: `<ul class="list-group p-2"><li class="list-group-item" aria-current="true">A first item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>`,
      media: `<svg style="padding:0 1.2rem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/><path d="m5 10 3 3 6-6M5 24l3 3 6-6M5 38l3 3 6-6m7-11h22M21 38h22M21 10h22" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      category: "Components",
    },
  },
  {
    id: "testimonial",
    data: {
      label: "Testimonial",
      content: {
        type: "testimonial-card",
      },
      media: `<svg style="padding:0 1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.248 478.248" style="enable-background:new 0 0 478.248 478.248" xml:space="preserve"><path d="M456.02 44.821H264.83c-12.26 0-22.232 9.972-22.232 22.229v98.652c0 12.258 9.974 22.23 22.232 22.23h16.787v39.161a6.92 6.92 0 0 0 6.918 6.919 6.9 6.9 0 0 0 4.523-1.685l51.383-44.396h111.576c12.26 0 22.23-9.973 22.23-22.23V67.05c.003-12.258-9.97-22.229-22.227-22.229zm-136.098 67.431-10.209 9.953 2.41 14.054a2.698 2.698 0 0 1-1.076 2.643 2.694 2.694 0 0 1-2.844.206l-12.621-6.635-12.619 6.635c-.912.478-2.016.398-2.848-.206s-1.248-1.628-1.074-2.643l2.41-14.054-10.211-9.953a2.709 2.709 0 0 1-.685-2.769 2.702 2.702 0 0 1 2.183-1.839l14.11-2.05 6.31-12.786c.457-.923 1.396-1.507 2.424-1.507s1.969.584 2.422 1.507l6.312 12.786 14.107 2.05a2.708 2.708 0 0 1 2.184 1.839 2.704 2.704 0 0 1-.685 2.769zm64.844 0-10.211 9.953 2.412 14.054a2.706 2.706 0 0 1-2.664 3.159c-.43 0-.859-.103-1.26-.31l-12.619-6.635-12.619 6.635a2.705 2.705 0 0 1-3.922-2.849l2.41-14.054-10.209-9.953a2.706 2.706 0 0 1-.684-2.769 2.695 2.695 0 0 1 2.182-1.839l14.109-2.05 6.311-12.786a2.7 2.7 0 0 1 4.844 0l6.312 12.786 14.109 2.05a2.7 2.7 0 0 1 1.499 4.608zm64.841 0-10.211 9.953 2.408 14.054a2.7 2.7 0 0 1-3.92 2.849l-12.621-6.635-12.621 6.635a2.702 2.702 0 0 1-3.92-2.849l2.412-14.054-10.211-9.953a2.7 2.7 0 0 1 1.498-4.608l14.111-2.05 6.311-12.786a2.699 2.699 0 0 1 2.42-1.507c1.027 0 1.971.584 2.426 1.507L434 105.594l14.109 2.05a2.7 2.7 0 0 1 1.498 4.608zm-296.763.672c-46.76 0-72.639 24.231-72.166 70.921.686 63.947 27.859 102.74 72.166 102.063 0 0 72.131 2.924 72.131-102.063 0-46.69-24.37-70.921-72.131-70.921zm127.584 221.52-72.074-28.736-16.877-14.223c-4.457-3.766-11.041-3.488-15.178.621l-23.463 23.336-23.533-23.342a11.237 11.237 0 0 0-15.164-.615l-16.881 14.223-72.074 28.739C1.975 343.69 1.995 425.884 0 433.427h305.646c-1.99-7.527-2-89.748-25.218-98.983z"/></svg>`,
      category: "Components",
    },
  },
];

export { components };
