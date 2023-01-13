import React, { useEffect, useRef, useState } from 'react';

const BeadsCanvas = () => {
  const canvasRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const [NumberOfBeads, setNumberOfBeads] = useState(0);
  const [speedofBeads, setSpeedOfBeads] = useState(0.1);
  const [index, setIndex] = useState(0);
  const [beads, setBeads] = useState([]);
  const [myThemelist, setMyThemelist] = useState([
    [
      'SkyBlue',
      'SteelBlue',
      'SlateGrey',
      'Teal'
    ],
    [
      '#ff0066',
      '#8000ff',
      '#00ffff',
      '#bfff00'
    ],
    [
      '#ff0000',
      '#ff4000',
      '#ff8000',
      '#ffff00'
    ],
    [
      'SandyBrown',
      'Tan',
      'Peru',
      'BurlyWood'
    ]
  ]);

  const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  useEffect(() => {
    canvasRef.current.width = window.innerWidth - 33;
    canvasRef.current.height = window.innerHeight - 300;
    setNumberOfBeads(slider1Ref.current.value);
    setSpeedOfBeads(slider2Ref.current.value / 10);
    setIndex(slider3Ref.current.value);
    init();
    window.addEventListener('resize', init, false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
    window.addEventListener('resize', () => {
        canvasRef.current.width = window.innerWidth - 33;
        canvasRef.current.height = window.innerHeight - 300;
        init();
      });
      window.addEventListener('click', () => {
        canvasRef.current.width = window.innerWidth - 33;
        canvasRef.current.height = window.innerHeight - 300;
        init();
      });
    }, []);
  
    const randomArrayColour = (colour) => {
      return colour[Math.floor(Math.random() * colour.length)];
    };
  
    const randomIntFrom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
  
    function bead(x, y, rad, colour, theme) {
      this.x = x;
      this.y = y;
      this.rad = rad;
      this.colour = colour;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = speedofBeads;
      this.distancefromCenter = {
        x: randomIntFrom(60, 100),
        y: randomIntFrom(60, 100),
        same: randomIntFrom(60, 320),
      };
  
      this.update = () => {
        const lastpoint = {
          x: this.x,
          y: this.y,
        };
        //move points
        this.radians += this.velocity;
  
        //circ motion
        this.x = x + Math.cos(this.radians) * this.distancefromCenter.same;
        this.y = y + Math.sin(this.radians) * this.distancefromCenter.same;
        this.draw(lastpoint);
      };
  
      this.draw = (lastpoint) => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = this.colour;
        ctx.lineWidth = this.rad;
        ctx.moveTo(lastpoint.x, lastpoint.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
      };
    }
  
    function init() {
        var beadlist = [];
        for (let i = 0; i < NumberOfBeads; i++) {
            const x = canvasRef.current.width / 2;
            const y = canvasRef.current.height / 2;
            const rad = randomIntFrom(1, 3);
            const colour = randomArrayColour(myThemelist[index]);
            beadlist.push(new bead(x, y, rad, colour, index));
        }
        console.log(beadlist)
        setBeads(beadlist);
        animate();
    }
  
    function animate() {
        requestAnimationFrame(animate);
        //c.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        beads.forEach((b) => {
            b.update();
        });
    }
  
    return (
      <div>
        ayayya
        <canvas ref={canvasRef} id='canvas' />
        <input type='range' ref={slider1Ref} id='beads' min='10' max='200' defaultValue='100' onInput={(e) => setNumberOfBeads(e.target.value)} />
        <input type='range' ref={slider2Ref} id='speed' min='1' max='10' defaultValue='5' onInput={(e) => setSpeedOfBeads(e.target.value/10)} />
        <input type='range' ref={slider3Ref} id='Theme' min='0' max='3' defaultValue='0' onInput={(e) => setIndex(e.target.value)} />
      </div>
    );
  };
  
  export default BeadsCanvas;