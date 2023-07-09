import useAxios from "../../tools/useAxios"
import TickDataService from "../../services/ticks"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { BasicPage } from "../GeneralStyles"

const Styles = {
    PageCont: styled.div`
    display: flex;
    flex-direction: column;
    `,
    ListCont: styled.div`
    width: 300px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `,
    LinkItem: styled(Link)`
    font-family: 'OpenSans', sans-serif;
    font-weight: 200;
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    padding: 2rem 1rem;
    border-bottom: 1px solid #000;
    `,

}

const TickList = () => {

    const { isLoading, isError, data } = useAxios(TickDataService.getAllTicks)
    const { allTicks } = data || {}
    // console.log('data', data)

    if (isLoading) return <div><h1>Loading...</h1></div>
    if (isError) return <div><h1>Error...</h1></div>

    return (
        <Styles.PageCont>
            <BasicPage.LinkButton.LinkSpec to={'/admin'}>
                <BasicPage.HoverCard>
                    <BasicPage.LinkButton.CardSpecial>
                        <span style={{ fontSize: '2rem' }}>Back to Dashboard</span>
                    </BasicPage.LinkButton.CardSpecial>
                </BasicPage.HoverCard>
            </BasicPage.LinkButton.LinkSpec>
            <h1> Select the Tick Species</h1>
            <Styles.ListCont>
                {allTicks?.map(item => (
                    <Styles.LinkItem to={`/admin/edit-tick-pathos/${item.id}`} key={item.id}>
                        {item.scientific} - {item.common}
                    </Styles.LinkItem>
                ))}
            </Styles.ListCont>
            <BasicPage.LinkButton.LinkSpec to={'/admin'}>
                <BasicPage.HoverCard>
                    <BasicPage.LinkButton.CardSpecial>
                        <span style={{ fontSize: '2rem' }}>Back to Dashboard</span>
                    </BasicPage.LinkButton.CardSpecial>
                </BasicPage.HoverCard>
            </BasicPage.LinkButton.LinkSpec>
        </Styles.PageCont>
    )
}
export default TickList