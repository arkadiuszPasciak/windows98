import { ObserverHelper } from '@windows98/toolkit';
import { ProgramManagerDomainContract } from '../contracts';
export declare class ProgramManagerDomain<Programs> implements ProgramManagerDomainContract<Programs> {
    readonly observerHelper: ObserverHelper<Programs>;
    private programsState;
    constructor(programs: Programs);
    get programs(): Programs;
    set programs(newPrograms: Programs);
    runProgram<Program extends keyof Programs>(program: Program, value: Programs[Program]): void;
}
