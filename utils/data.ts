import { Exams, ListHeader, idChangesToHandle } from '../interfaces';

export const ecosInital: Exams = [
    {
        description: '1º Trimestre',
        since: {
            display: '11 semanas',
            weeks: 11
        },
        until: {
            display: '13 semanas + 6 dias',
            weeks: 13,
            days: 6
        }
    },
    {
        description: '2º Trimestre',
        since: {
            display: '20 semanas',
            weeks: 20
        },
        until: {
            display: '22 semanas + 6 dias',
            weeks: 22,
            days: 6,
        }
    },
    {
        description: '3º Trimestre',
        since: {
            display: '30 semanas',
            weeks: 30
        },
        until: {
            display: '32 semanas + 6 dias',
            weeks: 32,
            days: 6,
        }
    }
];

export const examsInitial: Exams = [
    {
        description: '1º Trimestre',
        since: {
            display: '0 semanas',
            weeks: 0
        },
        until: {
            display: '12 Semanas',
            weeks: 12
        },
    },
    {
        description: '2º Trimestre',
        since: {
            display: '24 semanas',
            weeks: 24
        },
        until: {
            display: '28 Semanas',
            weeks: 28,
        },
    },
    {
        description: '3º Trimestre',
        since: {
            display: '32 semanas',
            weeks: 32
        },
        until: {
            display: '34 Semanas',
            weeks: 34,
        },
    },
    {
        description: 'StrepB',
        since: {
            display: '35 semanas',
            weeks: 35
        },
        until: {
            display: '37 Semanas',
            weeks: 37,
        },
    }
];

export const listHeader: ListHeader = {
    status: 'Status',
    desk: 'Descrição',
    start: 'A partir de',
    end: 'Data limite'
};

export const idChangesToHande: idChangesToHandle[] = [ 'menstruationDate', 'ecographyDate', 'weeks', 'days' ];