import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Card } from 'primereact/card';
import Convert from './convert';

const Converter = () => {

    const [activeIndex, setActiveIndex] = useState(0);


    // if (activeIndex == 0 ) {  
    //     button = <h1>jkasdgf</h1>;
    //   } else {
    //     button = <h1>kusdjafghisduhf</h1>;
    //   }

    const items = [
        { label: 'Convert', icon: 'pi pi-fw pi-dollar' },
        { label: 'Send', icon: 'pi pi-fw pi-send' },
        { label: 'Chart', icon: 'pi pi-fw pi-chart-line' }
    ];

    return (
        <>
            <div className="card">
                <Card>
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className='tabMenu'></TabMenu>

                    {activeIndex === 0 ? <Convert />: null }
                    {activeIndex === 1 ? <h1>Send</h1>: null }
                    {activeIndex === 2 ? <h1>Hello</h1> : null }

                </Card>
            </div>
        </>
    )
}

export default Converter;