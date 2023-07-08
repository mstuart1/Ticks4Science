import { useState } from "react";
import OutlineCard from "../ui/outlineCard/OutlineCard"

const DupSubDefine = ({ tick, updateSub }) => {

    const [dupId, setDupId] = useState('')
    const handleChange = (evt) => {
        setDupId(evt.target.value);
    };

    const handleDuplicate = (id, dupId) => {
        let data = { duplicate: dupId };
        return updateSub(data, id);
    };

    return (
        <OutlineCard>
            <label htmlFor="duplicate">
                Enter the original submission id if this is a duplicate:
            </label>
            <input
                id="duplicate"
                type="text"
                name="duplicate"
                value={dupId}
                placeholder="Enter id number for original submission here"
                onChange={handleChange}
                style={{
                    border: "1px solid black",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                }}
            />
            <button
                style={{
                    backgroundColor: "lightgrey",
                    border: "1px solid black",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                }}
                onClick={() => handleDuplicate(tick.id, dupId)}
            >
                Remove Duplicate From List
            </button>
            <p>
                If you define this submission as a duplicate, the original will
                stay in the lists and the duplicate(s) will be removed. Do not
                mark the original as a duplicate.
            </p>
        </OutlineCard>
    )
}
export default DupSubDefine