import React, { useRef, useEffect, useCallback } from 'react'
import Canvas from './Canvas';

const EarthTheme = [
    'SkyBlue',
    'SteelBlue',
    'SlateGrey',
    'Teal'
];

const NeonTheme = [
    '#ff0066',
    '#8000ff',
    '#00ffff',
    '#bfff00'
];

const FireTheme = [
    '#ff0000',
    '#ff4000',
    '#ff8000',
    '#ffff00'
];

const DesertTheme = [
    'SandyBrown',
    'Tan',
    'Peru',
    'BurlyWood'
];


const myThemelist = [EarthTheme, NeonTheme, FireTheme, DesertTheme];

//randomizer functions
function randomArrayColour(colour){
    return colour[Math.floor(Math.random() * colour.length)];
}

function randomIntFrom(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

class bead {
    constructor(x, y, rad, color, speed) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = color;
        this.radians = Math.random() * Math.PI*2;
        this.speed = speed;
        this.distancefromCenter = {
            x: randomIntFrom(60, 100),
            y: randomIntFrom(60, 100),
            same: randomIntFrom(60, 320)
        };
    }
    
}

const updateBead = (context, bead) => {
    const lastpoint = {
        x: bead.x,
        y: bead.y
    };
    //move points
    bead.radians += bead.velocity;

    //circ motion
    // bead.x = lastpoint.x + Math.cos(bead.radians) * bead.distancefromCenter.same;
    // bead.y = lastpoint.y + Math.sin(bead.radians) * bead.distancefromCenter.same;
    drawBead(context, lastpoint, bead);
};

const drawBead = (context, lastpoint, bead) => {
    context.beginPath();
    context.arc(50, 100, 20*Math.sin(0.05)**2, 0, 2*Math.PI)
    context.strokeStyle = bead.color;
    context.lineWidth = bead.rad;
    context.moveTo(lastpoint.x, lastpoint.y);
    context.lineTo(bead.x, bead.y);
    context.stroke();
    context.closePath();
};


const CircularMotion = (numberOfBeads, speed, color) => {

    useEffect(() => {
        initCircularMotion();
    }, [])
  
    const beads = [];

    const initCircularMotion = () => {
        console.log('inititialize')
        for (let i = 0; i < 1; i++){
            beads.push(new bead(23, 22, 2, FireTheme[0], 20));
        }
        console.log(beads)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const drawCircularMotion = (context, frameCount) => {
        
        context.canvas.fillStyle = 'rgba(255, 255, 255, 0.05)';
        // context.canvas.fillRect(0, 0, context.canvas.width, context.canvas.height);
        beads.forEach(bead => {
            updateBead(context, bead);
        }); 
    }

    return <Canvas draw={drawCircularMotion}/>
}

// This code doesnt work, not sure if I will fix it in the near future. For know it stays broken!
export default CircularMotion