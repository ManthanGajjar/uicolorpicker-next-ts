import { NextPage } from "next";
import { toast, Slide } from 'react-toastify';
import { Utils } from "../utils/utils";

interface ColorBlockI {
    colors: { id: number, title: string, colors: string[] }[];
}

const ColorBlock: NextPage<ColorBlockI> = ({ colors }) => {
    const setColor = (color: string) => {
        return { backgroundColor: color }
    }

    const copyColor = (colorCode: string) => {
        Utils.copyToClipboard(colorCode);
        toast.dark(`Copied color code: ${colorCode} ✅`, {
            transition: Slide
          });
    }

    return (        
        <div>
            {
                colors.map( (color, index) => {
                    return <div key = {index}>
                        <h5 className = "pl-4 colorTitle">
                            {color.title}
                        </h5>
                        <div className = "color-grid-container row mt-2">
                            {
                                color.colors.map((colorId, indexForColor) => {
                                return <div key = {indexForColor} className = "col mt-5 color-grid-item" onClick = { () => {copyColor(colorId)}} >
                                            <div
                                                className="color-block"
                                                style= {setColor(colorId)} > </div> 
                                                <h5 className = "mt-2 alignCenter">{colorId}</h5>
                                </div>
                                })
                            } 
                        </div>
                    </div> 
                })
            }
        </div>
    )
}

export default ColorBlock;