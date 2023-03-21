import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animateQuote = (quotes) => {
  for (let q in quotes) {
    gsap.to(quotes[q].current, {
      y: 0,
      duration: 2.5,
      delay: q * 0.4,
    });
  }
};

export const createGsapPlugIn = () => gsap.registerPlugin(ScrollTrigger);

export const createFixedHero = (elem) =>
  ScrollTrigger.create({
    trigger: elem,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });

export const fromTo = (elem) => {
  gsap.fromTo();
};

export const to = (elem) => gsap.to(elem.position, { x: 1 });

export const phoneScrollTrigerOne = (elem, camera, end, scene, fov) => {
  camera.position.set(0, 2, 6);

  let mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: `(min-width: 48em)`,
      isMobile: `(max-width: 48em)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions;
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top+=200 top",
          endTrigger: end,
          end: "top top",
          scrub: true,
        },
      });

      t1.fromTo(
        camera.position,
        {
          y: 2,
        },
        { y: 0 }
      )
        .to(scene.rotation, {
          y: 0.8,
        })
        .to(scene.rotation, {
          y: 3,
        })
        .to(
          scene.rotation,
          {
            z: 1.58,
          },
          "key1"
        )
        .to(
          camera.position,
          {
            z: 4,
          },
          "key1"
        )
        .to(
          scene.rotation,
          {
            z: 0,
            y: 0,
          },
          "key2"
        )
        .to(
          camera.position,
          {
            z: 6,
            x: isDesktop ? -1 : 0,
          },
          "key2"
        )
        .to(
          scene.rotation,
          {
            z: 0,
            y: 6.3,
          },
          "key3"
        )
        .to(
          camera.position,
          {
            y: 0,
            x: isDesktop ? 0.8 : 0,
          },
          "key3"
        );
      if (isMobile) {
        camera.fov = 20;
        camera.updateProjectionMatrix();
      }
      return () => {
        if (t1) t1.kill();
      };
    }
  );
};

export const designComponentTl = (container, textOne, textTwo) =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top-=200 top",
        bottom: "bottom top",
        scrub: true,
      },
      delay: 0.4,
    })
    .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
    .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

export const displayComponentTl = (container, textOne, textTwo) =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top-=300 top",
        bottom: "bottom top",
        scrub: true,
      },
      delay: 0.4,
    })
    .fromTo(textOne.current, { x: 0 }, { x: "20%" }, "key1")
    .fromTo(textTwo.current, { x: 0 }, { x: "-20%" }, "key1");

export const batteryComponentTl = (elem) => {
  let elements = gsap.utils.selector(elem);

  let t1 = gsap.timeline();

  elements("li").forEach((elm) =>
    t1.to(elm, {
      scrollTrigger: {
        trigger: elm,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      opacity: 1,
    })
  );
};

export const colorsComponentTl = (
  sectionRef,
  leftRef,
  rightRef,
  textRef,
  changeColorContext,
  currColor
) => {
  let updateColor = (color, text, rgba) => {
    const colorObj = {
      color,
      text,
      rgba,
    };
    changeColorContext(colorObj);

    textRef.innerText = text;
    textRef.style.color = color;
    rightRef.style.backgroundColor = `rgba(${rgba}, 0.4)`;
    leftRef.style.backgroundColor = `rgba(${rgba}, 0.8)`;
  };

  gsap.to(sectionRef, {
    scrollTrigger: {
      trigger: sectionRef,
      start: "top top",
      end: `+=${sectionRef.offsetWidth}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "top top",
        end: `+=${sectionRef.offsetWidth}`,
        scrub: true,
      },
    })
    .to(sectionRef, {
      onStart: updateColor,
      onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
    })
    .to(sectionRef, {
      onStart: updateColor,
      onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
    })
    .to(sectionRef, {
      onStart: updateColor,
      onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
    })
    .to(sectionRef, {
      onStart: updateColor,
      onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
    })
    .to(sectionRef, {
      onStart: updateColor,
      onStartParams: ["#A50011", "Red", "165, 0, 17"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
    })
    .to(sectionRef, {
      onStart: updateColor,
      onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
    });
};

export const cameraComponentTl = (sectionRef, videoOne, videoTwo, title) => {
  gsap.to(sectionRef, {
    scrollTrigger: {
      trigger: sectionRef,
      start: "top top",
      end: `bottom+=500 bottom`,
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  });

  let elements = gsap.utils.selector(title);

  let t1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: true,
      },
    })
    .to(videoOne, { scale: 0.3 }, "key1")
    .to(videoTwo, { scale: 0.6 }, "key1");

  elements("h1").forEach((el) => {
    t1.fromTo(
      el,
      {
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `bottom bottom`,
          scrub: true,
        },

        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
  });
};
