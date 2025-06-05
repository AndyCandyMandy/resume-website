import React, {useRef, useEffect} from "react" 

const Canvas = props => { 

    const canvasRef = useRef(null);

    const draw = (ctx) => { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = "black";
        ctx.rect(ctx.canvas.width/2, ctx.canvas.height/2, 50, 50);
        ctx.fill();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d"); 

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw(context)
        };
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();
        draw(context);
    }, [draw])

    return <canvas ref={canvasRef} {...props}/> 
}

export default Canvas;