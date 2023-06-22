import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        company: 'FACT',
        location: 'London, UK',
        title: 'Due Diligence Researcher and Data Processor',
        duration: '3 years',
        details:
        '1. To conduct open source research and collection of intended subject matter according to business needs: political, security, socio-economic, and terrorism issues. 2. Process visa and citizenship applications and to consolidate foreign language information into English, and produce clear and concise written research reports',
    },
    {
        year: 2019,
        company: 'Jan De Nul Group',
        location: 'Taipei, Taiwan',
        title: 'Office Manager',
        duration: '1 year and 1 month',
        details: 
        '1. Assist the director with the management of his workload, prioritising accordingly. 2. Filing, Scanning, Photocopying, Organising the meeting room calendar and Set up. 3. International and national travel arrangement, Orgnising company events. 4. Ordering office supplies, Contacting suppliers and Processing PO and Invoice. 5. Supporting cash expense, HR hiring process and Dealing with shipping documents. 6. Greeting visitors, Operating the switchboard and Office environment maintenance.'
    },
    {
        year: 2015,
        company: 'Bahamas Maritime Authority',
        location: 'London, UK',
        title: 'Administrative Assistant',
        duration: '3 years and 7 months',
        details: 
        '1. Answering incoming calls and emails via customers. 2. Account manager for multiple clients. 3. Issuing seaman’s books and endorsements for seafarers.'
    },
    {
        year: 2014,
        company: 'Jack&Fox',
        location: 'London, UK',
        title: 'Sales Administrator',
        duration: '8 months',
        details: 
        '1. Providing excellent customer support in a timely manner and Sales order processing. 2. Stock control and Creating sales documents, Chasing up vendors. 3. Administration of key customer accounts and supporting HR duties.'
    },
    {
        year: 2013,
        company: 'Egistec Inc',
        location: 'Taipei, Taiwan',
        title: 'Logistics and Purchasing Administrator',
        duration: '1 year and 4 months',
        details: 
        '1. Stock control and Handling shipping documents and forwarder arrangement. 2. Issuing Purchase Orders with relevant information. 3. Engaging & replying to customer correspondence. 4. Preparing invoice and payment requests with correct sign off to Finance.'
    },
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-'>Work Experience</h1>
            <p className="text-center py-8" >
                Have a passion in Front-end,  
            </p>
            {data.map((item, idx) => (
                <WorkItem 
                    key={idx} 
                    year={item.year} 
                    company={item.company} 
                    location={item.location} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                /> 
            ))}
        </div>
    );
};

export default Work;