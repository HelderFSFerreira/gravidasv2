import { Exams, ListHeader } from "../interfaces";

type Props = {
    list: Exams
    header: ListHeader
  }

const TableProcedures =  ({list, header} :Props) => {

    return(
        <table className="shadow-lg">
            <thead className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider print:text-red-600">
                <tr>
                    <th className="border px-8 py-4">{header.status}</th>
                    <th className="border px-8 py-4">{header.start}</th>
                    <th className="border px-8 py-4">{header.end}</th>
                </tr>
            </thead>
            <tbody>
                {list.map((line,index) => {
                    return (
                        <tr key={index}>
                            <td className="border px-8 py-4">{line.description}</td>
                            <td className="border px-8 py-4">{line.since.display}</td>
                            <td className="border px-8 py-4">{line.until.display}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
}

export default TableProcedures;