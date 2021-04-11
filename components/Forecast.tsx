import { useEffect, useState } from "react";

type Props = {
    initialDate: Date | undefined
}

const Forecast =  ({initialDate} :Props) => {
    const [startDate, setStartDate] = useState<string>('');
    const [weeksOfGestation, setWeeksOfGestation] = useState<number>(0);

    useEffect(() => {
        if (initialDate) {
            
        
            setStartDate(getDateofBirth(initialDate));
            setWeeksOfGestation(calculateWeeksOfGestation(initialDate));
        }   
    })

    function getDateofBirth(initialDate:Date|undefined): string {
        if (initialDate) {
            
            let dateOfBirth = new Date(initialDate.valueOf());
            dateOfBirth.setDate(dateOfBirth.getDate() + 7 * 42);
            return dateOfBirth.toISOString().split('T')[0]
        } else {
            return '';
        }
    }

    function calculateWeeksOfGestation(initialDate: Date):number {
        const oneWeek = 1000 * 60 * 60 * 24 * 7;

        let diffDates = ( (new Date()).getTime() - initialDate.getTime() ) / oneWeek;
        return Math.floor(diffDates);
    }

    return(
        <div className='grid grid-cols-2 content-center'>
            <div className='flex flex-col flex-wrap flex-grow-0 items-center'>
                <h3>Data prevista de parto</h3>
                <input  type='date'
                        value={startDate}
                        disabled/>
            </div>

            <div className='flex flex-col flex-wrap flex-grow-0 items-center print:hidden'>
                <h3>Semanas de gestação</h3>
                <input  type='number'
                        value={weeksOfGestation}
                        disabled/>
            </div>
        </div>
    );
}

export default Forecast;


