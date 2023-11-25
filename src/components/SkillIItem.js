
import React from 'react';
import { CircularProgress } from "./CircularProgressBar";

export const SkillItem = (props) => {

    return (

        <div className="item"><CircularProgress percentage={props.percentage}></CircularProgress>
            <h5>{props.skill}</h5>
        </div>

    )
}



