import React from 'react'
import Canvas from './Canvas'

function RainDrops() {

  const drawRing = (ctx, frameCount) => {
    ctx.beginPath()
    ctx.arc(50, 100, 20*(frameCount*0.005)**2, 0, 2*Math.PI)
    ctx.stroke()
  }
  
  const drawRainDrop = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.strokeStyle = '#000000'
    drawRing(ctx, frameCount)
    drawRing(ctx, frameCount-100)
    drawRing(ctx, frameCount-200)
    drawRing(ctx, frameCount-300)
    // ctx.beginPath()
    // ctx.arc(50, 100, 20*(frameCount*0.005)**2, 0, 2*Math.PI)
    // ctx.stroke()
  }
  
  return <Canvas draw={drawRainDrop} />
}

export default RainDrops