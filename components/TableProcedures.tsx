import { Exams, ListHeader } from '../interfaces';

type Props = {
    list: Exams
    header: ListHeader
  }

const TableProcedures =  ({list, header} :Props) => {

    return(
        <table className="shadow-lg">
            <thead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-semibold text-gray-600 uppercase tracking-wider">
                <tr>
                    <th>{header.desk}</th>
                    <th>{header.start}</th>
                    <th>{header.end}</th>
                </tr>
            </thead>
            <tbody>
                {list.map((line,index) => {
                    return (
                        <tr key={index}>
                            <td>{line.description}</td>
                            <td>{line.since.display}</td>
                            <td>{line.until.display}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
};

export default TableProcedures;