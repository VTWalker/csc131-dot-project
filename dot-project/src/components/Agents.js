import { useCallback } from "react";
import AgentList from "./AgentList";

const sampleAgents = [
    {
        id: 1111,
        name: 'Agent 1',
        status: 'available',
    },
    {
        id: 2222,
        name: 'Agent 2',
        status: 'on voice call'
    },
    {
        id: 3333,
        name: 'Agent 3',
        status: 'after call work'
    },
    {
        id: 4444,
        name: 'Agent 4',
        status: 'on preview task'
    },
    {
        id: 5555,
        name: 'Agent 5',
        status: 'logged out'
    },
    {
        id: 1111,
        name: 'Agent 1',
        status: 'available',
    },
    {
        id: 2222,
        name: 'Agent 2',
        status: 'on voice call'
    },
    {
        id: 3333,
        name: 'Agent 3',
        status: 'after call work'
    },
    {
        id: 4444,
        name: 'Agent 4',
        status: 'on preview task'
    },
    {
        id: 5555,
        name: 'Agent 5',
        status: 'logged out'
    },
    {
        id: 1111,
        name: 'Agent 1',
        status: 'available',
    },
    {
        id: 2222,
        name: 'Agent 2',
        status: 'on voice call'
    },
    {
        id: 3333,
        name: 'Agent 3',
        status: 'after call work'
    },
    {
        id: 4444,
        name: 'Agent 4',
        status: 'on preview task'
    },
    {
        id: 5555,
        name: 'Agent 5',
        status: 'logged out'
    },
]

function Agents(props) {
    console.log(props);
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