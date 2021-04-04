// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Exam = {
  description: string
  since: {
    display: string
    weeks: number
    days?: number
  }
  until: {
    display: string
    weeks: number
    days?: number
  }
};

export type Exams = Exam[];


export type ListHeader = {
  status: string,
  desk: string,
  start: string,
  end: string
}


export type childDates = {
  menstruationDate: string | null,
  ecographyDate: string | null,
  weeks: number,
  days: number,
  disabled: boolean,
}

export type idChangesToHandle = 'menstruationDate' | 'ecographyDate' | 'weeks' | 'days';