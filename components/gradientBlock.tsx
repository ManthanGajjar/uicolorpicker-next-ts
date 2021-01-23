import { NextPage } from "next";
import { toast, Slide } from 'react-toastify';
import { Utils } from "../utils/utils";
import { useState } from "react";
import { CONSTANCE } from '../helper/constance';

interface ColorBlockI {
    colors: { firstId: string, secId: string }[];
}

const GradientBlock: NextPage<ColorBlockI> = ({ colors }) => {
    const [newColors, setColors ] = useState(colors);
    const setColor = (colorId1: string, colorId2: string) => {
        return { "background": `linear-gradient(${colorId1}, ${colorId2})` }
    }

    const copyColor = (colorCodeFirst: string, colorCodeSec : string) => {
        const toastText = `Copied color code: ${colorCodeFirst} + ${colorCodeSec} ✅`;
        // const copyText = setColor(colorCodeFirst, colorCodeSec);
        const copyText = `${colorCodeFirst}  ${colorCodeSec}`;
        Utils.copyToClipboard(copyText);
        toast.dark(toastText, {
            transition: Slide
        });
    }

    return (        
        <div>
            <h5 className = "alignCenter">
                Get {CONSTANCE.GRADIENT_LIMIT}+ random gradient color blocks, Refresh to get new....
            </h5>
            <div className ="alignRight" >
                <div className = "btn" onClick = { () => { setColors(Utils.randomGradientPair(CONSTANCE.GRADIENT_LIMIT))}}>
                    🔄
                </div>
            </div>
            {
                <div className = "color-grid-container row mt-2">
                    {
                        newColors.map((colorId, indexForColor) => {
                        return <div key = {indexForColor} className = "col mt-5 color-grid-item" onClick = { () => {copyColor(colorId.firstId, colorId.secId)}} >
                            <div
                                className="color-block"
                                style= {setColor(colorId.firstId, colorId.secId)}>
                            </div> 
                            <h5 className = "mt-2 alignCenter">{colorId.firstId+ " And " + colorId.secId}</h5>
                        </div>
                        })
                    } 
                </div>
            }
        </div>
    )
}

export default GradientBlock;