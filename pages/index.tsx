import TableProcedures from '../components/TableProcedures';
import InputDates from '../components/InputDates';
import Title from '../components/Title';
import Header from '../components/Header';
import { useState } from 'react';
import { ecosInital, examsInitial, listHeader } from '../utils/data';
import { childDates, Exams } from '../interfaces';
  
const Print = () => {
    // const [initialDate, setInitialDate] = useState(new Date());
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

        setDates(currentDates);
        
        let initialDate = getInitialDate(currentDates);
        

        if (initialDate) {
            let ecosUpdated = getProceduresDates(initialDate, ecos);
            setEcos(ecosUpdated);

            let examsUpdated = getProceduresDates(initialDate, exams);
            setExams(examsUpdated);
        }
    };


    function getProceduresDates(initialDate: Date, procedures: Exams): Exams {

        let procedureFinalDates :Exams = [];

        for (let i = 0; i < procedures.length; i++) {
            const procedure = procedures[i];

            console.log(initialDate);
            

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

    

    function getInitialDate(date:childDates):Date | undefined  {
        let initialDate: Date | undefined;

        if (date.ecographyDate) {
            let ecoDate = new Date(date.ecographyDate)
            initialDate = new Date();
            initialDate.setDate(ecoDate.getDate() - (7 * date.weeks || 0) - (date.days || 0));
            
        } else {
            if (date.menstruationDate) {
                initialDate = new Date(date.menstruationDate);
            }
        }
        return initialDate;
    }

    return (
        
        <div className='bg-gradient-to-tr from-pink-200 to-blue-200 px-20 py-8'>
            <Header/>
            <div className='container mx-auto max-w-screen-lg'>

                <div className='py-10 print:hidden'>
                    <Title/>
                </div>
                
                <div className='grid grid-cols-1 print:grid-cols-2 gap-y-5 bg-white rounded-lg p-6 divide-y'>
                    <div className='container mx-auto print:row-span-2'>
                        <h2>Datas</h2>
                        <InputDates  dates={dates} onChange={(e=>{handleChange(e)})}/>
                    </div>
                    <div className='container flex flex-col justify-center'>
                        <h2>Ecografias</h2>
                        <TableProcedures list={ecos} header={listHeader}></TableProcedures>
                    </div>
                    <div className='container flex flex-col justify-center'>
                        <h2>Exames</h2>
                        <TableProcedures list={exams} header={listHeader}></TableProcedures>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Print;


