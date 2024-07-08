import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Browse Jobs By Categories</h1>
                <p className='max-w-2xl mx-auto my-6 text-center'>Three Categories available for the time being. They are Web, Graphics Design, Digital marketing. Browse Them bt clicking on the tabs below</p>
                <div className="flex items-center justify-center">
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2><JobCard></JobCard></h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;