export interface ProgramManagerDomainContract<Programs> {
    readonly programs: Programs;
    runProgram<Program extends keyof Programs>(program: Program, value: Programs[Program]): void;
}
