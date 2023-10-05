'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import { FirstCard , FourthCard, SecondCard, SixthCard, ThirdCard} from 'components/carddemo/CardDemo';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const fadeImages = [
  {
    url: 'https://picsum.photos/700/320?random=1',
    caption: ''
  },
  {
    url: 'https://picsum.photos/700/320?random=2',
    caption: ''
  },
  {
    url: 'https://picsum.photos/700/320?random=3',
    caption: ''
  },
];

const Dashboard = () => {
  return (
    <div>

      <div className="mt-5 slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>`

      

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Earnings'}
          subtitle={'$340.5'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Spend this month'}
          subtitle={'$642.39'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Sales'}
          subtitle={'$574.34'}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={'Your Balance'}
          subtitle={'$1,000'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'New Tasks'}
          subtitle={'145'}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={'Total Projects'}
          subtitle={'$2433'}
        />
      </div>

      <div className="w-full grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">	
        <FirstCard/>
        <SecondCard />
        <ThirdCard />
        <FourthCard />
        <SixthCard/>
      </div>

     


      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>


      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>


        <ComplexTable tableData={tableDataComplex} />


        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <TaskCard />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
