import { useLoaderData } from 'react-router-dom';
import Carousol from '../components/Carousol'
import TabCategories from '../components/TabCategories';
const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <Carousol></Carousol>
            <TabCategories></TabCategories>
        </div>
    );
};

export default Home;