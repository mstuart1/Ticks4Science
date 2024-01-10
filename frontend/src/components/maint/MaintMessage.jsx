

const MaintMessage = ({ message }) => {
    let currentDate = new Date()
    if (currentDate < new Date('2024-01-18')) {
        return (
            <div>
                <p style={{ color: '#cc0033', fontSize: '2rem', margin: '5rem' }}>
                    {message}
                </p>
            </div>
        )
    } else {
        return <></>
    }

}

export default MaintMessage