import { useCallback, Fragment } from "react";
import AgentList from "./AgentList";

export default function Agents(props) {
    let data = props.agentData.data;
    
    const agentData = data.map((agents, index) =>
        <div key={index}>
        <AgentList 
        id={agents.id}
        name={agents.name}
        status={agents.status}
        
        />
        </div>
        )

        return (
            <Fragment>
                {agentData}
            </Fragment>
        )
}





