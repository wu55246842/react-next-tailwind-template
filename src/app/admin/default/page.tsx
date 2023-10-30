'use client';

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
import { Slide,Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { AiFillFilePdf, AiFillInstagram, AiOutlineLineChart, AiOutlineRedo, AiOutlineRest, AiOutlineSend, AiOutlineVerticalAlignBottom, AiTwotoneBank } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import samplePDF from '/public/pdf/sample.pdf';
import PDFGenerator from './PDFGenerator';



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

  const questions = [
    "What are some of the scientific advancements that have contributed to the development of Knowledge Graphs?",
    "How have ancient philosophers and scientists influenced the concept of representing knowledge in a diagrammatic form?",
    "Why is it important for students and junior researchers to understand the historical context of their research area?"
  ];

  const [result, setResult] = useState([]);
  const [isText, setIsText] = useState(false);
  const [messages, setMessages] = useState<string[]>(['Hello! How can I assist you today?']);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [showIt,setShowIt] = useState<boolean>(false)

  const handleSendMessage = () => {
    setShowIt(!showIt)
    if (input.trim() !== '') {
      setMessages((prev) => [...prev, input]);
      setInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if(isText)
    {
      setIsText(false);
    }
  },[result])



  return (
    <div>

      {showIt &&
      <div className="w-full flex flex-col md:flex-row py-5 align-items-stretch">
        <div className="flex-1 p-1 text-white">
          <PDFGenerator></PDFGenerator>
        </div>
        <div className="flex-1 p-1 text-white">
          <div className="flex flex-col h-screen bg-white max-w-xl mx-auto">
            <header className="flex items-center justify-between p-4 border-b">
              <div className="text-lg font-semibold dark:text-gray-700">
                Chat
              </div>
              <div className="flex space-x-2">
                <AiOutlineLineChart className="h-6 w-6 text-gray-500 cursor-pointer" />
                <AiOutlineVerticalAlignBottom className="h-6 w-6 text-gray-500 cursor-pointer" />
                <AiOutlineRest className="h-6 w-6 text-gray-500 cursor-pointer" />
                <AiOutlineRedo className="h-6 w-6 text-gray-500 cursor-pointer" />
                <AiTwotoneBank className="h-6 w-6 text-gray-500 cursor-pointer" />
              </div>
            </header>
            <main className="flex-1 flex flex-col justify-between overflow-y-auto p-1">
              <div className="p-4">
                <div className="bg-white rounded text-xs shadow p-4 mb-6 text-gray-800">
                  Welcome to this informative PDF file on the historical context and background of Knowledge Graphs! By understanding the roots of this field, we can better navigate the future of information and technology. 
                  <br/><br/>
                  Example questions:
                  {questions.map((question, idx) => (
                    <div key={idx} className="mt-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-500 mr-2" viewBox="64 64 896 896" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
                      </svg>
                      {question}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask some questions"
                  className="flex-1 p-2 rounded-l-lg text-xs border"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white p-2 rounded-r-lg"
                >
                  <AiOutlineSend></AiOutlineSend>
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>}

      {!showIt &&
      <div className="w-full  text-gray-100 text-base pt-5">
        <div className="w-full flex justify-center">
          <section className="text-center w-full space-y-10">
            <div className="w-full flex items-center justify-center space-x-2">
              <AiFillInstagram className='dark:text-gray-100 text-gray-800'></AiFillInstagram>
              <p className='dark:text-gray-100 text-gray-800'>Your document will be enriched, shared on Course Hero, and used to extract content to assist in studying. </p>
            </div>

            <div className="relative shadow-lg rounded pt-5">
                <div className="">
                  <div role="presentation" className="relative border-2 rounded border-dashed flex flex-col 
                  focus-visible:outline-blue-100 bg-lightPrimary dark:bg-navy-800 rounded-xl px-8 py-2" >

                    <div className="font-medium text-center text-md-loose md:text-base dark:text-gray-100 text-gray-800 m-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-12 h-12 hidden md:inline md:relative md:top-[-2px] mr-4 align-middle">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                      For the best results, upload docs <span className="whitespace-nowrap">with many questions</span>
                    </div>
                
                    <div className="transition-all duration-300 h-[16rem] md:h-[20rem]">
                      <div className="flex flex-col justify-center items-center p-8 space-y-5">
                        <AiFillFilePdf className='w-24 h-24 text-blue-500  shadow-lg'/>
                        <h3 data-testid="granite-heading" className="font-normal m-0 text-gray-900 dark:text-gray-200 md:!text-3xl lg:h-40 text-xl md:rg-text-2xl">
                          Drag and drop or 
                          <span className="underline-offset-[6px] hover:text-blue-600 hover:cursor-pointer underline ml-1">upload</span>
                          <br/>your study document
                        </h3>
                      </div>
                    </div>
                    <textarea 
                      className="
                        font-inherit 
                        rounded-[16px]
                        md:rounded-[24px] 
                        w-full 
                        transition-all 
                        duration-300 
                        overflow-hidden 
                        resize-none 
                        text-gray-700 
                        focus:outline-none 
                        text-base 
                        md:mt-18 
                        p-2 
                        md:p-3 
                        border-2
                        dark:border-gray-100 
                        border-gray-900"
                      placeholder='or type your question here'
                    >
                    </textarea>
                    <input data-testid="drop-input" type="file" className='hidden'/>


                    <footer className="mt-4 md:mt-5 md:flex md:flex-row-reverse md:justify-between items-center p-5">
                      <div className="flex space-x-6">

                          <button
                            className="text-sm mt-2 block rounded 
                            bg-gradient-to-b from-gray-800/50 to-gray-800/10 dark:from-white/50 dark:to-white/10 px-6 
                            py-[0.5rem] text-center text-base text-gray-800 dark:text-gray-100 
                            dark:hover:bg-gradient-to-b dark:hover:from-white/40 dark:hover:to-white/5 
                            hover:bg-gradient-to-b hover:from-gray-800/40 hover:to-gray-800/5 "
                            onClick={()=>setShowIt(!showIt)}
                          >
                            Upload
                          </button>
                      </div>
                      <p className="mt-8 md:mt-0 mb-0 text-[10px] text-left dark:text-gray-300 text-gray-800">
                      After uploading study materials, you can directly use chat tools to interact with the content of the materials, and more</p>
                    </footer>
                  </div>
                </div>
            </div>
            

          </section>
        </div>

       
      </div>}


      <div className="mt-5 slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>

      {/* <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
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
      </div> */}

      {/* <div className="w-full grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">	
        <FirstCard/>
        <SecondCard />
        <ThirdCard />
        <FourthCard />
        <SixthCard/>
      </div> */}

     


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
