import TableProcedures from '../components/TableProcedures';
import InputDates from '../components/InputDates';
import Title from '../components/Title';
import Header from '../components/Header';
import Forecast from '../components/Forecast';
import { useState } from 'react';
import { ecosInital, examsInitial, listHeader } from '../utils/data';
import { childDates, Exams } from '../interfaces';
import TitlePrint from '../components/TitlePrint';
import Footer from '../components/Footer';
  
const Print = () => {
    const [initialDate, setInitialDate] = useState<Date|undefined>();
    const [ecos, setEcos] = useState({ecosInital}.ecosInital);
    const [exams, setExams] = useState({examsInitial}.examsInitial);
    const [dates, setDates] = useState<childDates>({
        menstruationDate: null,
        ecographyDate: null,
        weeks: 0,
        days: 0,
        disabled: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {

        let currentDates = dates;

        //TODO - Needs refactor...
        switch (e.target.id) {
            case 'menstruationDate':
                currentDates.menstruationDate = e.target.value;
                break;
            case 'ecographyDate':
                currentDates.ecographyDate = e.target.value;
                break;
            case 'weeks':
                currentDates.weeks = Number(e.target.value);
                break;
            case 'days':
                currentDates.days = Number(e.target.value);
                break;
            default:
                break;
        }

        function getInitialDate(date:childDates):Date | undefined  {
            let initialDate: Date | undefined;
    
            if (date.ecographyDate) {
                let ecoDate = new Date(date.ecographyDate);
                initialDate = new Date();
                initialDate.setDate(ecoDate.getDate() - (7 * date.weeks || 0) - (date.days || 0));
                
            } else {
                if (date.menstruationDate) {
                    initialDate = new Date(date.menstruationDate);
                }
            }
            return initialDate;
        }

        function getProceduresDates(initialDate: Date, procedures: Exams): Exams {

            let procedureFinalDates :Exams = [];
    
            for (let i = 0; i < procedures.length; i++) {
                const procedure = procedures[i];
    
                let dateSince = new Date(initialDate.valueOf());
                dateSince.setDate(dateSince.getDate() + 7 * procedure.since.weeks + (procedure.since.days || 0));
                procedure.since.display = dateSince.getDate() + '/' + (dateSince.getUTCMonth() + 1) + '/' + dateSince.getUTCFullYear();
                
                let dateUntil = new Date(initialDate.valueOf());
                dateUntil.setDate(dateUntil.getDate() + 7 * procedure.until.weeks + (procedure.until.days || 0));
                procedure.until.display = dateUntil.getDate() + '/' + (dateUntil.getUTCMonth() + 1) + '/' + dateUntil.getUTCFullYear();
    
                procedureFinalDates.push(procedure);
            }
            return procedureFinalDates;
        }

        setDates(currentDates);
        
        let initialDate = getInitialDate(currentDates);
        setInitialDate(initialDate);
        

        if (initialDate) {
            let ecosUpdated = getProceduresDates(initialDate, ecos);
            setEcos(ecosUpdated);

            let examsUpdated = getProceduresDates(initialDate, exams);
            setExams(examsUpdated);
        }
    };


    return (
        <div>
            <div className='bg-gradient-to-tr from-pink-200 to-blue-200 px-20'>
                <div className=' py-8 print:px-5 print:py-2'>
                    <Header/>
                    <div className='container mx-auto max-w-screen-lg'>

                        <div className='py-10 print:hidden'>
                            <Title/>
                        </div>
                    
                        <div className='grid grid-cols-1 print:grid-cols-2 gap-y-5 print:gap-y-0 print:grid-flow-col print:grid-rows-2 bg-white rounded-lg p-6 print:p-0 divide-y print:divide-transparent'>
                            <div className='container mx-auto print:hidden'>
                                <h2>Datas</h2>
                                <InputDates dates={dates} onChange={((e) => {handleChange(e);})}/>
                            </div>
                            <div className='container mx-auto hidden print:block'>
                                <TitlePrint/>
                            </div>
                            <div className='container mx-auto'>
                                <h2>Previsão</h2>
                                <Forecast initialDate={initialDate}/>
                            </div>
                            <div className='container flex flex-col justify-center'>
                                <h2>Ecografias</h2>
                                <TableProcedures list={ecos} header={listHeader}></TableProcedures>
                            </div>
                            <div className='container flex flex-col justify-center'>
                                <h2>Rastreios analiticos</h2>
                                <TableProcedures list={exams} header={listHeader}></TableProcedures>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto max-w-screen-lg print:hidden'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};


export default Print;


