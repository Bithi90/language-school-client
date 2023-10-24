import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTab from './CategoryTab';

const Category = () => {

    const [tabIndex, setTavIndex] = useState(0);
    const [course, setCourse] = useState([]);


    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])


    const English = course.filter(item => item.category_id === '1');
    const German = course.filter(item => item.category_id === '2');
    const Spanish = course.filter(item => item.category_id === '3');
    const French = course.filter(item => item.category_id === '4');
    const Chinese = course.filter(item => item.category_id === '5');

    return (
        <div className='py-20'>
            <h2 className='text-3xl   font-bold text-center my-10 text-teal-600'>Choose Your Language</h2>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTavIndex(index)}>
                <TabList className='text-center text-orange-600'>
                    <Tab>English</Tab>
                    <Tab>German</Tab>
                    <Tab>Spanish</Tab>
                    <Tab>French</Tab>
                    <Tab>Chinese</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 p-10'>
                        {
                            English.map(data => <CategoryTab
                                key={data.Length}
                                data={data}
                            ></CategoryTab>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 p-10'>
                        {
                            German.map(data => <CategoryTab
                                key={data.Length}
                                data={data}
                            ></CategoryTab>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 p-10'>
                        {
                            Spanish.map(data => <CategoryTab
                                key={data.Length}
                                data={data}
                            ></CategoryTab>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 p-10'>
                        {
                            French.map(data => <CategoryTab
                                key={data.Length}
                                data={data}
                            ></CategoryTab>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 p-10'>
                        {
                            Chinese.map(data => <CategoryTab
                                key={data.Length}
                                data={data}
                            ></CategoryTab>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            </div>

            );
};

            export default Category;