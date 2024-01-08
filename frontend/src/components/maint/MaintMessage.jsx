

const MaintMessage = () => {
    let currentDate = new Date()
    if (currentDate < new Date('2024-01-10')) {
        return (
            <div>
                <p style={{ color: '#cc0033', fontSize: '2rem', margin: '5rem' }}>
                    Please note that the site will be down for maintenance on January 10, 2024. We expect this maintenance to take less than an hour.
                    </p>
            </div>
        )
    } else {
        return <></>
    }
   
}

export default MaintMessage