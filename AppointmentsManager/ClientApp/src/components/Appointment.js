import { activeId, entry, openModal } from "./Lib";

export default function Appointment(props) {

    const handlingDelete = (id) => {
        activeId.id = id;
        // update state
        props.stateListener(Math.random() * 848 * Math.random());
        // open delete modal
        openModal("delete-modal");
    };

    const handlingEdit = (row) => {
        Object.assign(entry, row);
        // update state
        props.stateListener(Math.random() * 548 * Math.random());
        // open edit modal
        openModal("edit-modal");
    };

    const levelOfImportance = ["Very Low", "Low", "Normal", "Medium", "High", "Very High"];
    
    // Helper to get color class based on importance for the badge UI
    const getImportanceClass = (level) => {
        if (level >= 4) return 'bc-red'; // High / Very High
        if (level >= 2) return 'bc-gold'; // Normal / Medium
        return 'bc-green'; // Low
    };

    return (
        <div className={`row py-5 underline ${props.item.deleted ? ' bc-red' : props.item.done ? ' bc-green' : ''}`} key={props.item.id}>
            <div className="column id">{props.item.id}</div>
            
            {/* Added <b> tag for a more prominent Title */}
            <div className="column title"><b>{props.item.title}</b></div> 
            
            <div className="column description">{props.item.description}</div>
            
            <div className="column importance">
                {/* Wrapped in a span with 'badge' class for a professional UI look */}
                <span className={`badge ${getImportanceClass(props.item.levelOfImportance)}`}>
                    {levelOfImportance[props.item.levelOfImportance]}
                </span>
            </div>

            <div className="column date">{props.item.date.split("T")[0]}</div>
            <div className="column time">{props.item.time}</div>
            <div className="column addr">{props.item.address}</div>
            <div className="column edit">
                <div className="btn edit" onClick={() => handlingEdit(props.item)}>Edit</div>
            </div>
            
            <div className={`column delete ${props.item.deleted ? ' not-allowed' : ''}`}>
                <div className={`btn delete ${props.item.deleted ? ' no-event' : ''}`} onClick={() => handlingDelete(props.item.id)}>Delete</div>
            </div>
        </div>
    );
}