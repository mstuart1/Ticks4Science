import OutlineCard from "../ui/outlineCard/OutlineCard"

const SubmitterInfo = ({ tick }) => {
    return (
        <OutlineCard>
            <div style={{ margin: "1rem", padding: "1rem" }}>
                <h2>Submitter Info</h2>
                <p>Municipality: {tick.userMuni}</p>
                <p>Zip Code: {tick.userZip?.toString().padStart(5, "0")}</p>
                <p>Travel History: {tick.travelInfo ? tick.travelInfo : 'not reported'}</p>
                <p style={{ maxWidth: '300px' }}>Additional Info: {tick.additionalInfo}</p>
            </div>
        </OutlineCard>
    )
}
export default SubmitterInfo