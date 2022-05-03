import React from 'react'
// import { theme } from '../../theme'
import { BasicPage } from '../GeneralStyles'
// import OutlineCard from '../ui/outlineCard/OutlineCard'

let menuArray = [
    // {
    //     id: 1,
    //     title:'Preparing for Ticks', 
    //     path: '/checkMenu'
    // },
    {
        id: 1,
        title:'Tick Checks', 
        path: '/check'
    },
    {id: 2, title:'Tick Removal', path: '/removal'},
    {id: 3, title:'Tick-Borne Disease',path: '/disease'},
]
let menuElements = menuArray.map(item => (
    <BasicPage.LinkButton.LinkSpec key={item.id} to={item.path}>
<BasicPage.HoverCard>
<BasicPage.LinkButton.CardSpecial>
                <span> {item.title}</span>
               
              </BasicPage.LinkButton.CardSpecial>
               
            </BasicPage.HoverCard>
    </BasicPage.LinkButton.LinkSpec>
))

const TickCheckMenu = () => {
  return (
    <BasicPage.Text >
      <BasicPage.Title>
        Prevent Tick Bites
      </BasicPage.Title>
      <p >
      Below is a collection of resources to use before and after entering tick habitats. It's critical to be knowledgeable on tick prevention before going into potential areas with ticks and then being able to properly check yourself and others (including your pets) after exiting those environments. If you find a tick, you can safely remove it with the instructions we provide, and we encourage you to <BasicPage.InnieLink to='/preSurvey'><span>submit your tick</span></BasicPage.InnieLink>! We also list common and emerging tick-borne pathogens in New Jersey.
      </p>
        <BasicPage.CardContainer style={{width: '80vw'}}>
           {menuElements}
        </BasicPage.CardContainer>
        <p>
        New Jersey is home to many outdoor recreation sites, hiking trails, and beautiful scenery to explore. In addition, many homes are located close to or within forested areas where ticks can abound. It is generally best to avoid walking off paths through uncleared brush, leaves, and tall unmowed grass due to the risk of tick bites. </p>
        <p>
        If you plan on entering tick habitats, practice safe tick prevention strategies for your family and pets to avoid contracting a <BasicPage.InnieLink to='/disease'><span>tick-borne illness</span></BasicPage.InnieLink>. 
        </p>
        <BasicPage.ImageCont>
          <figure>
            <img src='https://www.cdc.gov/ticks/images/gallery/Permethrininstructions.jpg?_=03722' alt='engorged tick' style={{ maxHeight: '400px' }} />
            <figcaption>This woman is carefully reading instructions before applying her repellent.</figcaption>
          </figure>
        </BasicPage.ImageCont>
        <BasicPage.SectionSubtitle>
        Prepare before you go out: apply repellents to skin and/or treat clothing and gear with permethrin.
        </BasicPage.SectionSubtitle>
        <ul>
          <li>
          Use a repellent that contains 20%-30% DEET, 20% picaridin, Oil of Lemon Eucalyptus, or IR3535 on exposed skin, regularly applying every 5 hours.
          </li>
          <li>
          Use 0.5% permethrin to treat clothing and gear. You can also buy clothing pre-treated with permethrin that will last for many washes.
          </li>
          <li>
          Be sure to read the labels and follow the directions.
          </li>
        </ul>
        <p>
        Ways to wear everyday clothing to prevent tick bites:
        </p>
        <ul><li>
        Consider wearing light colored long-sleeved shirts, pants, closed-toed shoes, and tuck pants into socks. Ticks grab onto you when you brush against vegetation (grass and bushes). If you prevent them from entering around your shoes and socks they have to crawl upwards seeking skin, giving you more time to find them and prevent attachment. Light colored clothing lets you spot ticks more easily.

          </li></ul>
          <BasicPage.SectionSubtitle>
            Don't forget about your pets!
          </BasicPage.SectionSubtitle>
          <p>
          Treat dogs, outdoor cats, and even indoor cats for ticks. Veterinarians can assist you in deciding on the best preventatives to use. You can also perform <BasicPage.InnieLink to='/check' ><span>tick checks</span></BasicPage.InnieLink> on your pets after spending time outdoors.
          </p>
          {/* <BasicPage.SectionTitle>Preven-tionary</BasicPage.SectionTitle>
          <OutlineCard bgColor={theme.colors.ruYellow}>
                <BasicPage.CardSpecial>
                    
                    <div>
                    <BasicPage.SectionSubtitle>
                        What is DEET?
                    </BasicPage.SectionSubtitle>
                        DEET is a synthetic chemical that blocks the ability for biting bugs to smell us.<br/>
                        For more information, visit the U.S. Environmental Protection Agency's website about <BasicPage.OutieLink to='https://www.epa.gov/insect-repellents/deet' ><span>DEET</span></BasicPage.OutieLink>.
                    </div>
                </BasicPage.CardSpecial>
            </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruYellow}>
                <BasicPage.CardSpecial>
                    
                    <div>
                        <BasicPage.SectionSubtitle>
                    What is picaridin?
                    </BasicPage.SectionSubtitle>

                    Picaridin is a synthetic compound that resembles that of the natural compound piperine or black pepper.<br/>
                    For more information, visit the fact sheet provided by the National Pesticide Information Center on <BasicPage.OutieLink to='https://www.cmmcp.org/sites/g/files/vyhlif2966/f/uploads/national_pesticide_information_center_picaridin_general_fact_sheet.pdf'><span>picaridin</span></BasicPage.OutieLink>.
                    </div>
                </BasicPage.CardSpecial>
            </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruYellow}>
                <BasicPage.CardSpecial>
                    
                    <div>
                        <BasicPage.SectionSubtitle>
                    What is IR3535?
                    </BasicPage.SectionSubtitle>IR3535 is a biopesticide that can be applied to people and pets.<br/>
                    For more information, visit the technical document provided by the U.S. Environmental Protection Agency on <BasicPage.OutieLink to='https://www3.epa.gov/pesticides/chem_search/reg_actions/registration/related_PC-113509_1-Feb-99.pdf'><span>IR3535</span></BasicPage.OutieLink>.

                     </div>
                </BasicPage.CardSpecial>
            </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruYellow}>
                <BasicPage.CardSpecial>
                    
                    <div>
                        <BasicPage.SectionSubtitle>
                    What is Oil of Lemon Eucalyptus?
                    </BasicPage.SectionSubtitle>
                    Oil of lemon eucalyptus is a refined extract from the leaves of lemon eucalyptus trees. Effective products contain more than 60% P-menthane-3,8-diol (PMD).<br/>
For more information, visit the U.S. Environmental Protection Agency's website about <BasicPage.OutieLink to='https://www3.epa.gov/pesticides/chem_search/reg_actions/registration/fs_PC-011550_01-Apr-00.pdf'><span>oil of lemon eucalyptus</span></BasicPage.OutieLink>.

                        </div>
                </BasicPage.CardSpecial>
            </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruYellow}>
                <BasicPage.CardSpecial>
                    
                    <div>
                        <BasicPage.SectionSubtitle>
                    What is permethrin?
                    </BasicPage.SectionSubtitle>
                    Permethrin is an insecticide that can cause biting bugs to have severe reactions when ingested. This product should only be treated on clothes and can be toxic to cats.<br/>For more information, visit the U.S. Environmental Protection Agency’s website about <BasicPage.OutieLink to='https://www.epa.gov/insect-repellents/repellent-treated-clothing'><span>permethrin</span></BasicPage.OutieLink>.
                        </div>
                </BasicPage.CardSpecial>
            </OutlineCard> */}
    </BasicPage.Text>
  )
}

export default TickCheckMenu