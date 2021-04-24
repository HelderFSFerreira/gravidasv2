import { childDates } from '../interfaces';

type Props = {
    dates: childDates
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputDates = ({dates, onChange}: Props) => {

    if (dates) {
        //TODO Refactor
    }

    return(
        <div className='grid grid-cols-2 content-center'>
            <div className='flex flex-col flex-wrap flex-grow-0 items-center'>
                <h3 className=''>Última menstruação</h3>
                <input  type='date' 
                        id='menstruationDate'
                        onChange={((e) => {onChange(e);})}/>
            </div>

            <div className='flex flex-col flex-wrap flex-grow-0 items-center'>
                <h3>Ecografia</h3>
                <input  type='date'
                        id='ecographyDate'
                        onChange={((e) => {onChange(e);})}
                        />
                <h3>Semanas</h3>
                <input  type='number'
                        id='weeks'
                        // value={dates.weeks}
                        onChange={((e) => {onChange(e);})}
                        />
                <h3>Dias</h3>
                <input  type='number'
                        id='days'     
                        onChange={((e) => {onChange(e);})}          
                        // value={dates.days}
                        />
            </div>
        </div>
    );
};

export default InputDates;