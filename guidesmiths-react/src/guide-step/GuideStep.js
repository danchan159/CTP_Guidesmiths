import React from 'react';
import { Panel, Image} from 'react-bootstrap';


const GuideStep= (props) => {
    const step = props.step


    return (
        <Panel>
          <h2>{step.title}</h2>
          <p> {step.content}</p>
          <Image src={step.gifLocation}/>

        </Panel>
    )
}

export default GuideStep;