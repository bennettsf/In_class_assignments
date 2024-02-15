import {useState} from 'react'
import React from "react"

export default function FeatureToggle({isEnabled, featureName}) {
    // create a useState to keep track of our toggle boolean
    const [toggleState, setToggleState] = useState(isEnabled)

    // button logic for changes to toggleState
    const handleToggle = () => {
        if (toggleState) {
            setToggleState(false)
        } else {
            setToggleState(true)
        }
    }   

    return (
        <div>

            <button onClick={handleToggle}>Toggle</button>
            {/* depending on the initial toggleState: 
                true shows ❌
                false shows ✅ 
                button click changes toggleState */}
            {toggleState ? <p>{featureName} ❌</p> : <p>{featureName} ✅</p>}
        </div>
    )

}