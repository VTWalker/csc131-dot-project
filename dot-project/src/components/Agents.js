import { useCallback } from "react";
import AgentList from "./AgentList";

const sampleAgents = [
    {
        id: 1111,
        name: 'Agent 1',
        status: 'On Call',
    },
    {
        id: 2222,
        name: 'Agent 2',
        status: 'On Call'
    },
    {
        id: 3333,
        name: 'Agent 3',
        status: 'On Call'
    },
    {
        id: 4444,
        name: 'Agent 4',
        status: 'On Call'
    },
    {
        id: 5555,
        name: 'Agent 5',
        status: 'On Standby'
    }
]

function Agents() {
    const agentData = sampleAgents.map(agents => 
        <AgentList 
        id={agents.id}
        name={agents.name}
        status={agents.status}
        />)

        return (
            <div>
                {agentData}
            </div>
        )
}

export default Agents;