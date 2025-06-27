import { Maybe } from '@windows98/toolkit';
import { Programs } from '../models';
export interface RunnerDomainContract {
    programName: string;
    setProgramName(programName: string): void;
    runProgram<Program extends string>(programs: Programs<Program>): Maybe<Program>;
}
