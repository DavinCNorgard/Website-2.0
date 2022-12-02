import React, { useRef, useEffect, useCallback } from 'react'

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

function bead(x, y, rad, color, speed){
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

    this.update = () => {
        const lastpoint = {
            x: this.x,
            y: this.y
        };
        //move points
        this.radians += this.velocity;

        //circ motion
        this.x = x + Math.cos(this.radians) * this.distancefromCenter.same;
        this.y = y + Math.sin(this.radians) * this.distancefromCenter.same;
        this.draw(lastpoint);
    };

    this.draw = (lastpoint, canvas) => {
        canvas.beginPath();
        canvas.strokeStyle = this.colour;
        canvas.lineWidth = this.rad;
        canvas.moveTo(lastpoint.x, lastpoint.y);
        canvas.lineTo(this.x, this.y);
        canvas.stroke();
        canvas.closePath();
    };
}

const CircularMotion = (numberOfBeads, speed, color) => {
  
    const canvasRef = useRef(null)
    const beads = [];

    const init = canvas => {
        console.log('inititialize')
        for (let i = 0; i < numberOfBeads; i++){
            beads.push(new bead(canvas.width/2, canvas.height/2, 2, FireTheme, 20));
        }
        console.log(beads)
    }

    useEffect(() => {
       init() 
    }, [])
    

    const drawCircularMotion = useCallback(canvas => {
        //requestAnimationFrame(drawCircularMotion);
        console.log('hehe')
        canvas.fillStyle = 'rgba(255, 255, 255, 0.05)';
        canvas.fillRect(0, 0, canvas.width, canvas.height);
        beads.forEach(bead => {
            bead.update();
        }); 
    }, [])
  
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = window.innerWidth-33;
        canvas.height = window.innerHeight-300;
        drawCircularMotion(context);

    }, [drawCircularMotion])
  
    return (
        <>
            <canvas ref={canvasRef}/>
        </>
    );
}

export default CircularMotion