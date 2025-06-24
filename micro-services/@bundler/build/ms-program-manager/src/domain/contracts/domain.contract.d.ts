export interface ProgramManagerDomainContract<Programs> {
    runProgram<Program extends keyof Programs>(program: Program, value: Programs[Program]): void;
}
