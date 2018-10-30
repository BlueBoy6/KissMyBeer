import React from 'react'
import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 





export const labelAnimateIn = (that) => {

    var tl = new TimelineMax({paused: true})

    var group = document.getElementById(that);
    var label = document.querySelector(`.input${that}>.label-animate-on-select`);
    var input = document.querySelector(`.input${that}>.form-control`);

    // console.log('===========GROUP=========')
    // console.log(group)
    // console.log('========LABEL============')
    // console.log(label)
    // console.log('=========THAT===========')
    // console.log(that)

    var focusAnim = tl.to(label, 0.3, { x: "45px", opacity : "0"})
    focusAnim.play()

}
export const labelAnimateOut = (that, event) => {

    var tl = new TimelineMax({paused: true})

    var group = document.getElementById(that);
    var label = document.querySelector(`.input${that}>.label-animate-on-select`);
    var input = document.querySelector(`.input${that}>.form-control`);

    // console.log('====================')
    // console.log(input.value)

    if(input.value === ""){
        var focusAnim = tl.to(label, 0.3, {x: "25px", opacity : "1"})
        focusAnim.play()
    }

}