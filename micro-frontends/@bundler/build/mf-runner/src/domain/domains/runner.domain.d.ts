import { Maybe } from '@windows98/toolkit';
import { RunnerDomainContract } from '../contracts';
import { Programs } from '../models';
export declare class RunnerDomain implements RunnerDomainContract {
    programName: string;
    constructor();
    setProgramName(programName: string): void;
    runProgram<Program extends string>(programs: Programs<Program>): Maybe<Program>;
    private clearProgramName;
}
export declare const runnerDomain: RunnerDomain;
