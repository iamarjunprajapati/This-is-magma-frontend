gsap.registerPlugin(ScrollTrigger);

function loco() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();


// page2
let clutter = "";
document.querySelector('.page2>h1').textContent.split(" ").forEach(function (dets) {
  clutter += `<span> ${dets} </span>`;
});
document.querySelector('.page2>h1').innerHTML = clutter;

gsap.to('.page2>h1>span', {
  scrollTrigger: {
    trigger: '.page2>h1>span',
    start: 'top bottom',
    end: 'bottom top',
    scroller: '#main',
    scrub: 0.5,
    // markers: true,
  },
  color: '#fff',
  stagger: 0.2
});

// canvas / page3
function canvas() {
  const canvas = document.querySelector(".page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./img/canvas/frames00007.png
    ./img/canvas/frames00010.png
    ./img/canvas/frames00013.png
    ./img/canvas/frames00016.png
    ./img/canvas/frames00019.png
    ./img/canvas/frames00022.png
    ./img/canvas/frames00025.png
    ./img/canvas/frames00028.png
    ./img/canvas/frames00031.png
    ./img/canvas/frames00034.png
    ./img/canvas/frames00037.png
    ./img/canvas/frames00040.png
    ./img/canvas/frames00043.png
    ./img/canvas/frames00046.png
    ./img/canvas/frames00049.png
    ./img/canvas/frames00052.png
    ./img/canvas/frames00055.png
    ./img/canvas/frames00058.png
    ./img/canvas/frames00061.png
    ./img/canvas/frames00064.png
    ./img/canvas/frames00067.png
    ./img/canvas/frames00070.png
    ./img/canvas/frames00073.png
    ./img/canvas/frames00076.png
    ./img/canvas/frames00079.png
    ./img/canvas/frames00082.png
    ./img/canvas/frames00085.png
    ./img/canvas/frames00088.png
    ./img/canvas/frames00091.png
    ./img/canvas/frames00094.png
    ./img/canvas/frames00097.png
    ./img/canvas/frames00100.png
    ./img/canvas/frames00103.png
    ./img/canvas/frames00106.png
    ./img/canvas/frames00109.png
    ./img/canvas/frames00112.png
    ./img/canvas/frames00115.png
    ./img/canvas/frames00118.png
    ./img/canvas/frames00121.png
    ./img/canvas/frames00124.png
    ./img/canvas/frames00127.png
    ./img/canvas/frames00130.png
    ./img/canvas/frames00133.png
    ./img/canvas/frames00136.png
    ./img/canvas/frames00139.png
    ./img/canvas/frames00142.png
    ./img/canvas/frames00145.png
    ./img/canvas/frames00148.png
    ./img/canvas/frames00151.png
    ./img/canvas/frames00154.png
    ./img/canvas/frames00157.png
    ./img/canvas/frames00160.png
    ./img/canvas/frames00163.png
    ./img/canvas/frames00166.png
    ./img/canvas/frames00169.png
    ./img/canvas/frames00172.png
    ./img/canvas/frames00175.png
    ./img/canvas/frames00178.png
    ./img/canvas/frames00181.png
    ./img/canvas/frames00184.png
    ./img/canvas/frames00187.png
    ./img/canvas/frames00190.png
    ./img/canvas/frames00193.png
    ./img/canvas/frames00196.png
    ./img/canvas/frames00199.png
    ./img/canvas/frames00202.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .2,
      trigger: `.page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}

canvas();

// page4
let clutter2 = "";
document.querySelector('.page4>h1').textContent.split(" ").forEach(function (dets) {
  clutter2 += `<span> ${dets} </span>`;
});

document.querySelector('.page4>h1').innerHTML = clutter2;

gsap.to('.page4>h1>span', {
  scrollTrigger: {
    trigger: '.page4>h1>span',
    start: 'top bottom',
    end: 'bottom top',
    scroller: '#main',
    scrub: 0.5,
    // markers: true,
  },
  color: '#fff',
  stagger: 0.2
});

// page5

function canvas2() {
  const canvas = document.querySelector(".page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./img/canvas/bridges00004.png
   ./img/canvas/bridges00007.png
   ./img/canvas/bridges00010.png
   ./img/canvas/bridges00013.png
   ./img/canvas/bridges00016.png
   ./img/canvas/bridges00019.png
   ./img/canvas/bridges00022.png
   ./img/canvas/bridges00025.png
   ./img/canvas/bridges00028.png
   ./img/canvas/bridges00031.png
   ./img/canvas/bridges00034.png
   ./img/canvas/bridges00037.png
   ./img/canvas/bridges00040.png 
   ./img/canvas/bridges00043.png
   ./img/canvas/bridges00046.png
   ./img/canvas/bridges00049.png
   ./img/canvas/bridges00052.png
   ./img/canvas/bridges00055.png
   ./img/canvas/bridges00058.png
   ./img/canvas/bridges00061.png
   ./img/canvas/bridges00064.png
   ./img/canvas/bridges00067.png
   ./img/canvas/bridges00070.png
   ./img/canvas/bridges00073.png
   ./img/canvas/bridges00076.png
   ./img/canvas/bridges00079.png
   ./img/canvas/bridges00082.png
   ./img/canvas/bridges00085.png
   ./img/canvas/bridges00088.png
   ./img/canvas/bridges00091.png
   ./img/canvas/bridges00094.png
   ./img/canvas/bridges00097.png
   ./img/canvas/bridges00100.png
   ./img/canvas/bridges00103.png
   ./img/canvas/bridges00106.png
   ./img/canvas/bridges00109.png
   ./img/canvas/bridges00112.png
   ./img/canvas/bridges00115.png
   ./img/canvas/bridges00118.png
   ./img/canvas/bridges00121.png
   ./img/canvas/bridges00124.png
   ./img/canvas/bridges00127.png
   ./img/canvas/bridges00130.png
   ./img/canvas/bridges00133.png
   ./img/canvas/bridges00136.png
   ./img/canvas/bridges00139.png
   ./img/canvas/bridges00142.png
   ./img/canvas/bridges00145.png
   ./img/canvas/bridges00148.png
   ./img/canvas/bridges00151.png
   ./img/canvas/bridges00154.png
   ./img/canvas/bridges00157.png
   ./img/canvas/bridges00160.png
   ./img/canvas/bridges00163.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 54;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .2,
      trigger: `.page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}

canvas2();


// page6
let clutter3 = "";
document.querySelector('.page6>h1').textContent.split(" ").forEach(function (dets) {
  clutter3 += `<span> ${dets} </span>`;
});

document.querySelector('.page6>h1').innerHTML = clutter3;

gsap.to('.page6>h1>span', {
  scrollTrigger: {
    trigger: '.page6>h1>span',
    start: 'top bottom',
    end: 'bottom top',
    scroller: '#main',
    scrub: 0.5,
    // markers: true,
  },
  color: '#fff',
  stagger: 0.2
});

// page7 /canvas

function canvas3() {
  const canvas = document.querySelector(".page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
        https://thisismagma.com/assets/home/lore/seq/1.webp?2
        https://thisismagma.com/assets/home/lore/seq/2.webp?2
        https://thisismagma.com/assets/home/lore/seq/3.webp?2
        https://thisismagma.com/assets/home/lore/seq/4.webp?2
        https://thisismagma.com/assets/home/lore/seq/5.webp?2
        https://thisismagma.com/assets/home/lore/seq/6.webp?2
        https://thisismagma.com/assets/home/lore/seq/7.webp?2
        https://thisismagma.com/assets/home/lore/seq/8.webp?2
        https://thisismagma.com/assets/home/lore/seq/9.webp?2
        https://thisismagma.com/assets/home/lore/seq/10.webp?2
        https://thisismagma.com/assets/home/lore/seq/11.webp?2
        https://thisismagma.com/assets/home/lore/seq/12.webp?2
        https://thisismagma.com/assets/home/lore/seq/13.webp?2
        https://thisismagma.com/assets/home/lore/seq/14.webp?2
        https://thisismagma.com/assets/home/lore/seq/15.webp?2
        https://thisismagma.com/assets/home/lore/seq/16.webp?2
        https://thisismagma.com/assets/home/lore/seq/17.webp?2
        https://thisismagma.com/assets/home/lore/seq/18.webp?2
        https://thisismagma.com/assets/home/lore/seq/19.webp?2
        https://thisismagma.com/assets/home/lore/seq/20.webp?2
        https://thisismagma.com/assets/home/lore/seq/21.webp?2
        https://thisismagma.com/assets/home/lore/seq/22.webp?2
        https://thisismagma.com/assets/home/lore/seq/23.webp?2
        https://thisismagma.com/assets/home/lore/seq/24.webp?2
        https://thisismagma.com/assets/home/lore/seq/25.webp?2
        https://thisismagma.com/assets/home/lore/seq/26.webp?2
        https://thisismagma.com/assets/home/lore/seq/27.webp?2
        https://thisismagma.com/assets/home/lore/seq/28.webp?2
        https://thisismagma.com/assets/home/lore/seq/29.webp?2
        https://thisismagma.com/assets/home/lore/seq/30.webp?2
        https://thisismagma.com/assets/home/lore/seq/31.webp?2
        https://thisismagma.com/assets/home/lore/seq/32.webp?2
        https://thisismagma.com/assets/home/lore/seq/33.webp?2
        https://thisismagma.com/assets/home/lore/seq/34.webp?2
        https://thisismagma.com/assets/home/lore/seq/35.webp?2
        https://thisismagma.com/assets/home/lore/seq/36.webp?2
        https://thisismagma.com/assets/home/lore/seq/37.webp?2
        https://thisismagma.com/assets/home/lore/seq/38.webp?2
        https://thisismagma.com/assets/home/lore/seq/39.webp?2
        https://thisismagma.com/assets/home/lore/seq/40.webp?2
        https://thisismagma.com/assets/home/lore/seq/41.webp?2
        https://thisismagma.com/assets/home/lore/seq/42.webp?2
        https://thisismagma.com/assets/home/lore/seq/43.webp?2
        https://thisismagma.com/assets/home/lore/seq/44.webp?2
        https://thisismagma.com/assets/home/lore/seq/45.webp?2
        https://thisismagma.com/assets/home/lore/seq/46.webp?2
        https://thisismagma.com/assets/home/lore/seq/47.webp?2
        https://thisismagma.com/assets/home/lore/seq/48.webp?2
        https://thisismagma.com/assets/home/lore/seq/49.webp?2
        https://thisismagma.com/assets/home/lore/seq/50.webp?2
        https://thisismagma.com/assets/home/lore/seq/51.webp?2
        https://thisismagma.com/assets/home/lore/seq/52.webp?2
        https://thisismagma.com/assets/home/lore/seq/53.webp?2
        https://thisismagma.com/assets/home/lore/seq/54.webp?2
        https://thisismagma.com/assets/home/lore/seq/55.webp?2
        https://thisismagma.com/assets/home/lore/seq/56.webp?2
        https://thisismagma.com/assets/home/lore/seq/57.webp?2
        https://thisismagma.com/assets/home/lore/seq/58.webp?2
        https://thisismagma.com/assets/home/lore/seq/59.webp?2
        https://thisismagma.com/assets/home/lore/seq/60.webp?2
        https://thisismagma.com/assets/home/lore/seq/61.webp?2
        https://thisismagma.com/assets/home/lore/seq/62.webp?2
        https://thisismagma.com/assets/home/lore/seq/63.webp?2
        https://thisismagma.com/assets/home/lore/seq/64.webp?2
        https://thisismagma.com/assets/home/lore/seq/65.webp?2
        https://thisismagma.com/assets/home/lore/seq/66.webp?2
        https://thisismagma.com/assets/home/lore/seq/67.webp?2
        https://thisismagma.com/assets/home/lore/seq/68.webp?2
        https://thisismagma.com/assets/home/lore/seq/69.webp?2
        https://thisismagma.com/assets/home/lore/seq/70.webp?2
        https://thisismagma.com/assets/home/lore/seq/71.webp?2
        https://thisismagma.com/assets/home/lore/seq/72.webp?2
        https://thisismagma.com/assets/home/lore/seq/73.webp?2
        https://thisismagma.com/assets/home/lore/seq/74.webp?2
        https://thisismagma.com/assets/home/lore/seq/75.webp?2
        https://thisismagma.com/assets/home/lore/seq/76.webp?2
        https://thisismagma.com/assets/home/lore/seq/77.webp?2
        https://thisismagma.com/assets/home/lore/seq/78.webp?2
        https://thisismagma.com/assets/home/lore/seq/79.webp?2
        https://thisismagma.com/assets/home/lore/seq/80.webp?2
        https://thisismagma.com/assets/home/lore/seq/81.webp?2
        https://thisismagma.com/assets/home/lore/seq/82.webp?2
        https://thisismagma.com/assets/home/lore/seq/83.webp?2
        https://thisismagma.com/assets/home/lore/seq/84.webp?2
        https://thisismagma.com/assets/home/lore/seq/85.webp?2
        https://thisismagma.com/assets/home/lore/seq/86.webp?2
        https://thisismagma.com/assets/home/lore/seq/87.webp?2
        https://thisismagma.com/assets/home/lore/seq/88.webp?2
        https://thisismagma.com/assets/home/lore/seq/89.webp?2
        https://thisismagma.com/assets/home/lore/seq/90.webp?2
        https://thisismagma.com/assets/home/lore/seq/91.webp?2
        https://thisismagma.com/assets/home/lore/seq/92.webp?2
        https://thisismagma.com/assets/home/lore/seq/93.webp?2
        https://thisismagma.com/assets/home/lore/seq/94.webp?2
        https://thisismagma.com/assets/home/lore/seq/95.webp?2
        https://thisismagma.com/assets/home/lore/seq/96.webp?2
        https://thisismagma.com/assets/home/lore/seq/97.webp?2
        https://thisismagma.com/assets/home/lore/seq/98.webp?2
        https://thisismagma.com/assets/home/lore/seq/99.webp?2
        https://thisismagma.com/assets/home/lore/seq/100.webp?2
        https://thisismagma.com/assets/home/lore/seq/101.webp?2
        https://thisismagma.com/assets/home/lore/seq/102.webp?2
        https://thisismagma.com/assets/home/lore/seq/103.webp?2
        https://thisismagma.com/assets/home/lore/seq/104.webp?2
        https://thisismagma.com/assets/home/lore/seq/105.webp?2
        https://thisismagma.com/assets/home/lore/seq/106.webp?2
        https://thisismagma.com/assets/home/lore/seq/107.webp?2
        https://thisismagma.com/assets/home/lore/seq/108.webp?2
        https://thisismagma.com/assets/home/lore/seq/109.webp?2
        https://thisismagma.com/assets/home/lore/seq/110.webp?2
        https://thisismagma.com/assets/home/lore/seq/111.webp?2
        https://thisismagma.com/assets/home/lore/seq/112.webp?2
        https://thisismagma.com/assets/home/lore/seq/113.webp?2
        https://thisismagma.com/assets/home/lore/seq/114.webp?2
        https://thisismagma.com/assets/home/lore/seq/115.webp?2
        https://thisismagma.com/assets/home/lore/seq/116.webp?2
        https://thisismagma.com/assets/home/lore/seq/117.webp?2
        https://thisismagma.com/assets/home/lore/seq/118.webp?2
        https://thisismagma.com/assets/home/lore/seq/119.webp?2
        https://thisismagma.com/assets/home/lore/seq/120.webp?2
        https://thisismagma.com/assets/home/lore/seq/121.webp?2
        https://thisismagma.com/assets/home/lore/seq/122.webp?2
        https://thisismagma.com/assets/home/lore/seq/123.webp?2
        https://thisismagma.com/assets/home/lore/seq/124.webp?2
        https://thisismagma.com/assets/home/lore/seq/125.webp?2
        https://thisismagma.com/assets/home/lore/seq/126.webp?2
        https://thisismagma.com/assets/home/lore/seq/127.webp?2
        https://thisismagma.com/assets/home/lore/seq/128.webp?2
        https://thisismagma.com/assets/home/lore/seq/129.webp?2
        https://thisismagma.com/assets/home/lore/seq/130.webp?2
        https://thisismagma.com/assets/home/lore/seq/131.webp?2
        https://thisismagma.com/assets/home/lore/seq/132.webp?2
        https://thisismagma.com/assets/home/lore/seq/133.webp?2
        https://thisismagma.com/assets/home/lore/seq/134.webp?2
        https://thisismagma.com/assets/home/lore/seq/135.webp?2
        https://thisismagma.com/assets/home/lore/seq/136.webp?2
  `;
    return data.split("\n")[index];
  }

  const frameCount = 137;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .2,
      trigger: `.page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page7",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}

canvas3();

gsap.to('.page7>.circle', {
  scrollTrigger: {
    trigger: '.page7>.circle',
    start: 'top top',
    end: 'bottom top',
    scroller: '#main',
    scrub: 0.5,
    // markers: true,
  },
  scale : 2,
  // borderColor : "#fff"

});
gsap.to('.page7>.circle>.circle-inner', {
  scrollTrigger: {
    trigger: '.page7>.circle>.circle-inner',
    start: 'top middle',
    end: 'bottom top',
    scroller: '#main',
    scrub: 0.5,
    // markers: true,
  },
  borderColor : "#fff",
  backgroundColor : " rgba(9, 61, 205, 0.481)"
});





