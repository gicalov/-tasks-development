import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import FallingSnowflake from "../FallingSnowflake";
import "./style.css";
const getWindowSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
});
const SowflakesBlock = ({ snowflakeOptions }) => {
    console.log(2);
    const [layerSize, setLayerSize] = useState(getWindowSize);
    const boxRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            if (boxRef.current) {
                const { width, height } = boxRef.current.getBoundingClientRect();
                setLayerSize({ width, height });
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log(3);
    return (_jsx("div", { className: "background-container", ref: boxRef, children: _jsx(Stage, { width: layerSize.width - 8, height: layerSize.height - 20, children: _jsx(Layer, { children: [...Array(snowflakeOptions?.snowflakesCount || 50)].map((_, i) => (_jsx(FallingSnowflake, { layerSize: layerSize, snowflakeOptions: snowflakeOptions }, i))) }) }) }));
};
export default SowflakesBlock;
