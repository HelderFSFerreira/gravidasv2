import { useEffect, useState } from 'react';

type Props = {
    initialDate: Date | undefined
}

const Forecast =  ({initialDate} :Props) => {
    const [startDate, setStartDate] = useState<string>('');
    const [weeksOfGestation, setWeeksOfGestation] = useState<number>(0);
    const [daysOfGestation, setDaysOfGestation] = useState<number>(0);

    function getDateofBirth(initialDate:Date|undefined): string {
        if (initialDate) {
            
            let dateOfBirth = new Date(initialDate.valueOf());
            dateOfBirth.setDate(dateOfBirth.getDate() + 7 * 42);
            return dateOfBirth.toISOString().split('T')[0];
        } else {
            return '';
        }
    }

    function calculateWeeksOfGestation(initialDate: Date):number {
        const oneWeek = 1000 * 60 * 60 * 24 * 7;

        let diffDates = ( (new Date()).getTime() - initialDate.getTime() ) / oneWeek;
        return Math.floor(diffDates);
    }

    function calculateDaysOfGestation(initialDate: Date):number {
        const oneDay  = 1000 * 60 * 60 * 24;

        let dataAtual = new Date();
        dataAtual.setHours(0,0,0,0);

        let initialDateCloned = new Date(initialDate.getTime());
        initialDateCloned.setHours(0,0,0,0);

        let diffDays = ( dataAtual.getTime() - initialDateCloned.getTime() ) / oneDay;
        let diffDates = diffDays % 7;

        return diffDates;
    }

    useEffect(() => {
        if (initialDate) {
            setStartDate(getDateofBirth(initialDate));
            setWeeksOfGestation(calculateWeeksOfGestation(initialDate));
            setDaysOfGestation(calculateDaysOfGestation(initialDate));
        }   
    });

    

    return(
        <div className='grid grid-cols-2 print:grid-cols-1 content-center'>
            <div className='flex flex-col flex-wrap flex-grow-0 items-center'>
                <h3>Data provável de parto</h3>
                <input  type='date'
                        value={startDate}
                        disabled/>
            </div>

            <div className='flex flex-col flex-wrap flex-grow-0 items-center divide-y print:hidden'>
                <h3>Tempo de gestação</h3>
                <div>
                    <div className="grid grid-cols-2 border">
                        <span className="text-sm px-2 py-2 bg-gray-100 align-middle border-b">Semanas:</span>
                        <div className=" text-sm px-2 py-2 align-middle text-center border-b"> {weeksOfGestation} </div> 
                    
                        <span className="text-sm px-2 py-2 bg-gray-100 align-middle">Dias: </span>
                        <div className=" text-sm px-2 py-2 align-middle text-center"> {daysOfGestation} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;


